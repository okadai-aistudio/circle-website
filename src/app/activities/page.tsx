import type { Metadata } from "next";
import PageHeading from "@/components/page-heading";
export const metadata: Metadata = { title: "活動内容", description: "岡大AIStudioの活動内容。AI開発、AIニュースや技術の情報共有、成果発表、メンバー交流などに取り組みます。", alternates: { canonical: "/activities/" } };
const activities = [
{n:"01",en:"CREATE",title:"AI開発",body:"AIを活用したアプリやサービスを、個人でもチームでも制作します。アイデアを形にする過程を大切にしています。"},
{n:"02",en:"LEARN",title:"情報共有",body:"最新のAIニュース、開発ツール、技術ノウハウなどを持ち寄り、互いに学びます。"},
{n:"03",en:"SHARE",title:"成果発表",body:"完成した作品だけでなく、学んだことや開発途中の取り組みも気軽に紹介します。"},
{n:"04",en:"CONNECT",title:"交流",body:"勉強会やイベントなどを通して、AIに興味のある学生同士で交流します。"},
];
export default function Activities() {return <><PageHeading english="OUR ACTIVITIES" title="活動内容" description="学ぶことも、つくることも。一人でも、仲間とでも。"/><section className="content-section"><div className="container activity-list">{activities.map(a=><article className="activity-row" key={a.n}><div className="activity-index">{a.n} <small>{a.en}</small></div><div><h2>{a.title}</h2><p>{a.body}</p></div></article>)}</div></section></>}