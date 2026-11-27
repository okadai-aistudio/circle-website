import type { Metadata } from "next";
import { site } from "@/data/site";

const socialImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "青と黄色の回路模様の帽子をかぶった岡大AIStudioの公式キャラクター",
};

export function pageMetadata(path: string, description: string, title?: string): Metadata {
  const previewTitle = title ? `${title} | ${site.name}` : `${site.name}｜岡山大学の非公認AI開発サークル`;

  return {
    title: title ?? { absolute: previewTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: previewTitle,
      description,
      url: path,
      type: "website",
      locale: "ja_JP",
      siteName: site.name,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: previewTitle,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
