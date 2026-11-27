type Project = {
  name: string;
  description: string;
  category: string;
  creator: string;
  url: string;
  image?: { src: string; alt: string; width: number; height: number };
  githubUrl?: string;
};

export const projects: readonly Project[] = [
  {
    name: "回答します",
    description: "誰かが投稿したお題に、みんなで自由に回答して楽しめるWebサービスです。",
    category: "Webサービス",
    creator: "サークル発起人による個人開発",
    url: "https://kaitousimasu.com/",
  },
];
