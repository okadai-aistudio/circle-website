"use client";

import { useState, useSyncExternalStore } from "react";
import { schedules } from "@/data/schedules";
import { site } from "@/data/site";

const tokyoTimeZone = "Asia/Tokyo";
const monthFormat = new Intl.DateTimeFormat("sv-SE", {
  timeZone: tokyoTimeZone,
  year: "numeric",
  month: "2-digit",
});
const dayFormat = new Intl.DateTimeFormat("ja-JP", {
  timeZone: tokyoTimeZone,
  month: "long",
  day: "numeric",
  weekday: "short",
});
const publishedSchedules = [...schedules].sort((a, b) => b.month.localeCompare(a.month));

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

function readClock() {
  return Math.floor(Date.now() / 60_000) * 60_000;
}

// The static export can display published material without claiming it is current.
function readStaticClock() {
  return null;
}

export default function ActivitySchedule() {
  const [selection, setSelection] = useState("current");
  const now = useSyncExternalStore(subscribeToClock, readClock, readStaticClock);
  const currentMonth = now === null ? null : monthFormat.format(now);
  const shownMonth = selection === "current" ? currentMonth ?? publishedSchedules[0]?.month : selection;
  const schedule = publishedSchedules.find((entry) => entry.month === shownMonth);
  const sessionEnded = (date: string, end: string) => now !== null && now >= Date.parse(`${date}T${end}:00+09:00`);
  const archived = currentMonth !== null && shownMonth !== undefined && shownMonth < currentMonth;
  const expired = currentMonth !== null && schedule?.month === currentMonth &&
    schedule.sessions.every(({ date, end }) => sessionEnded(date, end));
  const imageSrc = schedule && `/schedules/${schedule.month}.webp`;

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
            disabled={now === null}
          >
            <option value="current">{currentMonth ? `${monthLabel(currentMonth)}（今月）` : "掲載済みの最新月"}</option>
            {publishedSchedules.filter((entry) => entry.month !== currentMonth).map((entry) => (
              <option key={entry.month} value={entry.month}>
                {monthLabel(entry.month)}{currentMonth && entry.month < currentMonth ? "（過去の予定）" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="schedule-status" role="status">
          <h3>{shownMonth ? `${monthLabel(shownMonth)}の活動予定` : "活動予定"}</h3>
          {!schedule && <p>月間予定は準備中です。最新の案内は公式Xをご確認ください。</p>}
          {archived && <p>過去に掲載した予定です。当時の掲載内容を記録しています。</p>}
          {expired && <p>すべての予定時刻が経過しました。次の開催案内は公式Xをご確認ください。</p>}
          {now === null && schedule && <p>掲載済みの予定です。参加前に公式Xで最新の活動情報をご確認ください。</p>}
        </div>
        {schedule && imageSrc && (
          <div className="schedule-grid">
            <a className="schedule-image-link" href={imageSrc} target="_blank" rel="noopener noreferrer">
              <img src={imageSrc} width={schedule.image.width} height={schedule.image.height} alt="" />
              <span>{monthLabel(schedule.month)}のカレンダー画像を拡大（新しいタブ） <span aria-hidden="true">↗</span></span>
            </a>
            <div className="schedule-details">
              <p className="schedule-label">活動場所（月間予定の掲載情報）</p>
              <p>{schedule.venue}</p>
              {schedule.venueNote && <p className="schedule-note">{schedule.venueNote}</p>}
              <p className="schedule-label">開催予定日時（日本時間）</p>
              <ul className="schedule-dates" role="list">
                {schedule.sessions.map(({ date, start, end }) => (
                  <li key={`${date}-${start}`}>
                    <span><time dateTime={date}>{dayFormat.format(new Date(date))}</time>{" "}
                      <time dateTime={`${date}T${start}+09:00`}>{start}</time>〜<time dateTime={`${date}T${end}+09:00`}>{end}</time>
                    </span>
                    {!archived && !expired && sessionEnded(date, end) && <small>予定時刻経過</small>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="schedule-notice">
          <p>活動場所は、施設の予約状況などによって変更になることがあります。活動場所や開催日時の変更・中止については、公式Xでお知らせしています。参加前に、公式Xで最新の活動情報をご確認ください。</p>
          <a className="text-arrow" href={site.x} target="_blank" rel="noopener noreferrer">公式Xで最新情報を見る <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
