import { readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import sharp from "sharp";
import { loadScheduleImages, scheduleManifest } from "../src/lib/schedule-images.mjs";

const directory = "public/schedules";
const filenamePattern = /^(\d{4})-(\d{2})\.(png|jpe?g|webp)$/;

async function readScheduleFiles() {
  const entries = await readdir(directory, { withFileTypes: true }).catch((error) => {
    if (error.code === "ENOENT") return [];
    throw error;
  });
  const months = new Map();
  const files = [];

  for (const entry of entries) {
    const filename = entry.name;
    const input = join(directory, filename);
    const match = filename.match(filenamePattern);
    if (!entry.isFile() || !match) {
      throw new Error(`${input}: ファイル名は YYYY-MM.png / .jpg / .jpeg / .webp の形式にしてください。`);
    }

    const [, year, monthNumber, extension] = match;
    if (year === "0000" || Number(monthNumber) < 1 || Number(monthNumber) > 12) {
      throw new Error(`${input}: 年は0001〜9999、月は01〜12で指定してください。`);
    }

    const month = `${year}-${monthNumber}`;
    if (months.has(month)) {
      throw new Error(`${input}: ${month} の画像が重複しています（${months.get(month)} と ${filename}）。1枚だけにしてください。`);
    }
    months.set(month, filename);
    files.push({ filename, input, month, format: extension === "jpg" ? "jpeg" : extension });
  }

  return files.sort((a, b) => b.month.localeCompare(a.month));
}

async function prepareScheduleImages() {
  const images = [];
  for (const file of await readScheduleFiles()) {
    try {
      const image = sharp(file.input, { animated: true, failOn: "warning" });
      const metadata = await image.metadata();
      if (metadata.format !== file.format) {
        throw new Error(`拡張子と画像の形式が一致しません（検出形式: ${metadata.format}）。`);
      }

      // Metadata can be valid even when the pixel data is truncated.
      await image.stats();
      images.push({
        month: file.month,
        src: `/schedules/${file.filename}`,
        width: metadata.autoOrient.width,
        height: metadata.pageHeight ?? metadata.autoOrient.height,
      });
    } catch (error) {
      throw new Error(`${file.input}: 画像を読み込めません。元の画像を確認してください。 ${error.message}`, { cause: error });
    }
  }
  await writeFile(scheduleManifest, JSON.stringify(images) + "\n");
}

async function checkScheduleExport() {
  const images = await loadScheduleImages();
  for (const { src } of images) {
    const filename = basename(src);
    const output = join("out", "schedules", filename);
    const exported = await readFile(output).catch((error) => {
      throw new Error(`${output}: 静的出力の画像を読み込めません。 ${error.message}`, { cause: error });
    });
    if (!exported.equals(await readFile(join(directory, filename)))) {
      throw new Error(`${output}: 元の画像と静的出力が一致しません。`);
    }
  }
  console.log(`活動予定画像の静的出力を確認しました（${images.length}枚）。`);
}

try {
  switch (process.argv[2]) {
    case "prepare":
      await prepareScheduleImages();
      break;
    case "check":
      await checkScheduleExport();
      break;
    default:
      throw new Error("引数に prepare（画像の検証と一覧生成）または check（静的出力の照合）を指定してください。");
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
