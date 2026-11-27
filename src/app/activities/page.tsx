import Link from "next/link";
import ActivitySchedule from "@/components/activity-schedule";
import PageHeading from "@/components/page-heading";
import { pageMetadata } from "@/lib/page-metadata";
import { loadScheduleImages } from "@/lib/schedule-images.mjs";

export const dynamic = "force-static";

export const metadata = pageMetadata(
  "/activities/",
  "岡大AIStudioの月間活動予定と活動内容。自由開発を中心に、任意の勉強会・情報交換会・成果発表を行います。",
  "活動内容",
);

const activities = [
  {
    id: "study",
    title: "勉強会",
    detail: "木曜の活動では、AI・プログラミング・開発に役立つ知識を学ぶ勉強会を基本としています。開催日は月間予定と公式Xをご確認ください。参加は任意で、その間も自由開発を続けられます。",
  },
  {
    id: "exchange",
    title: "情報交換会",
    detail: "金曜の活動では、AIのニュースや作品、アイデアを持ち寄り、技術相談や雑談をする情報交換会を基本としています。開催日は月間予定と公式Xをご確認ください。参加は任意で、自由開発も続けられます。",
  },
  {
    id: "showcase",
    title: "成果発表",
    detail: "希望者は作品や開発の途中で得た知見を紹介できます。サイトなどで公開する場合は、制作者の同意を確認します。",
  },
  {
    id: "online",
    title: "オンラインでの交流・開発",
    detail: "オンラインでも交流したり一緒に開発したりできる環境を整えていく予定です。",
  },
];

export default async function Activities() {
  const scheduleImages = await loadScheduleImages();

  return (
    <>
      <PageHeading english="OUR ACTIVITIES" title="活動内容" description="作りたいものから、始めよう。" />
      <ActivitySchedule scheduleImages={scheduleImages} />

      <section className="content-section tinted" id="development">
        <div className="container split-layout">
          <div><h2>自由開発</h2></div>
          <div className="prose">
            <p>自由な個人開発と共同開発が活動の中心です。テーマや分野は自由で、同じ時間に集まっても、それぞれが自分の作りたいものに取り組めます。</p>
            <p>初めての方も実際の開発から始められます。テーマが決まっていればその場で開発を始められます。アイデアを仲間と考えたり、希望する企画に加わったりすることもできます。</p>
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="activity-types">
        <div className="container activity-list">
          <h2 id="activity-types">勉強会・交流・発表</h2>
          {activities.map((activity) => (
            <article className="activity-row" key={activity.id} id={activity.id}>
              <h3>{activity.title}</h3>
              <p>{activity.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="highlight-section">
        <div className="container highlight-inner">
          <div>
            <h2>開催中は飛び込み参加できます</h2>
            <p>施設の利用条件・定員に従い、開催日時と場所を公式Xで確認してからお越しください。</p>
          </div>
          <Link href="/join/" className="secondary-link">参加案内を見る <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
