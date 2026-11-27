"use client";

import { useState, useSyncExternalStore } from "react";
import { site } from "@/data/site";
import type { ScheduleImage } from "@/lib/schedule-images.mjs";

const monthFormat = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
});

function monthLabel(month: string) {
  const [year, monthNumber] = month.split("-");
  return `${year}年${Number(monthNumber)}月`;
}

function subscribeToClock(update: () => void) {
  const interval = window.setInterval(update, 15_000);
  document.addEventListener("visibilitychange", update);
  return () => {
    window.clearInterval(interval);
    document.removeEventListener("visibilitychange", update);
  };
}

function readMonth() {
  return monthFormat.format(Date.now());
}

// A static build can outlive its own month. Resolve the current month at runtime.
function readStaticMonth() {
  return null;
}

export default function ActivitySchedule({ scheduleImages }: { scheduleImages: readonly ScheduleImage[] }) {
  const [selection, setSelection] = useState("current");
  const currentMonth = useSyncExternalStore(subscribeToClock, readMonth, readStaticMonth);
  const shownMonth = selection === "current" ? currentMonth : selection;
  const schedule = scheduleImages.find((entry) => entry.month === shownMonth);
  const archived = currentMonth !== null && schedule !== undefined && schedule.month < currentMonth;

  return (
    <section className="content-section schedule-section" id="schedule" aria-labelledby="schedule-heading">
      <div className="container">
        <h2 id="schedule-heading">月間活動予定</h2>
        <div className="schedule-picker">
          <label htmlFor="schedule-month">表示する年月</label>
          <select
            id="schedule-month"
            value={selection === currentMonth ? "current" : selection}
            onChange={(event) => setSelection(event.target.value)}
            disabled={currentMonth === null || scheduleImages.length === 0}
          >
            <option value="current">{currentMonth ? `${monthLabel(currentMonth)}（今月）` : "今月（日本時間）"}</option>
            {scheduleImages.filter((entry) => entry.month !== currentMonth).map((entry) => (
              <option key={entry.month} value={entry.month}>
                {monthLabel(entry.month)}{currentMonth && entry.month < currentMonth ? "（過去の予定）" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="schedule-status" role="status">
          {shownMonth && <h3>{monthLabel(shownMonth)}の活動予定</h3>}
          {!schedule && (currentMonth !== null || scheduleImages.length === 0) && <p>月間予定は準備中です。</p>}
          {archived && <p>過去に掲載した活動予定表です。</p>}
        </div>
        {schedule && (
          <a className="schedule-image-link" href={schedule.src} target="_blank" rel="noopener noreferrer">
            <img src={schedule.src} width={schedule.width} height={schedule.height} alt={`${monthLabel(schedule.month)}の活動予定表`} />
            <span>画像を拡大（新しいタブ） <span aria-hidden="true">↗</span></span>
          </a>
        )}
        {scheduleImages.length > 0 && (
          <noscript>
            <p>掲載済みの活動予定画像</p>
            <ul>
              {scheduleImages.map((entry) => (
                <li key={entry.month}><a className="text-arrow" href={entry.src}>{monthLabel(entry.month)}の活動予定表を開く</a></li>
              ))}
            </ul>
          </noscript>
        )}
        <div className="schedule-notice">
          <p>活動場所は、施設の予約状況などによって変更になることがあります。活動場所や開催日時の変更・中止については、公式Xでお知らせしています。参加前に、公式Xで最新の活動情報をご確認ください。</p>
          <a className="text-arrow" href={site.x} target="_blank" rel="noopener noreferrer">公式Xで最新情報を見る <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
