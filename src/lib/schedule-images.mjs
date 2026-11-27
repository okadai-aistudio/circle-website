import { readFile } from "node:fs/promises";

export const scheduleManifest = ".schedule-images.json";

/** @typedef {{ month: string, src: string, width: number, height: number }} ScheduleImage */

/** @returns {Promise<ScheduleImage[]>} */
export async function loadScheduleImages() {
  return JSON.parse(await readFile(scheduleManifest, "utf8"));
}
