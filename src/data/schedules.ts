type DateString = `${number}-${number}-${number}`;
type TimeString = `${number}:${number}`;

export type Schedule = {
  month: `${number}-${number}`;
  image: { width: number; height: number };
  venue: string;
  venueNote?: string;
  sessions: readonly {
    date: DateString;
    start: TimeString;
    end: TimeString;
  }[];
};

export const schedules: readonly Schedule[] = [
  {
    month: "2026-11",
    image: { width: 1254, height: 1254 },
    venue: "岡山大学 中央図書館 本館3階 グループ学修室2A",
    venueNote: "予約できない場合は、グループ学修室2Bを利用する予定です。",
    sessions: [
      { date: "2026-11-20", start: "18:30", end: "20:00" },
      { date: "2026-11-21", start: "14:00", end: "17:00" },
      { date: "2026-11-22", start: "14:00", end: "17:00" },
      { date: "2026-11-23", start: "12:30", end: "15:30" },
      { date: "2026-11-25", start: "17:30", end: "20:00" },
      { date: "2026-11-26", start: "17:00", end: "20:00" },
      { date: "2026-11-27", start: "17:00", end: "20:00" },
      { date: "2026-11-28", start: "12:30", end: "15:30" },
      { date: "2026-11-29", start: "14:00", end: "17:00" },
      { date: "2026-11-30", start: "18:00", end: "20:00" },
    ],
  },
];
