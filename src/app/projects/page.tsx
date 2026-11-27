import PageHeading from "@/components/page-heading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "/projects/",
  "岡大AIStudioのメンバーが自由な発想で作った作品を紹介します。公開に同意した個人・共同開発の作品を掲載しています。",
  "制作物",
);

export default function Projects() {
  return (
    <>
      <PageHeading english="OUR PROJECTS" title="制作物" description="自由な発想から生まれた作品たち。" />
      <section className="content-section" aria-label="メンバーの制作物">
        <div className="container">
          <p className="project-intro">実用、趣味、遊びなど、目的やジャンルはさまざまです。制作者が公開に同意した個人・共同開発の作品を紹介します。</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.url}>
                {project.image ? (
                  <div className="project-art project-art-image">
                    <img {...project.image} loading="lazy" />
                  </div>
                ) : (
                  <div className="project-art" aria-hidden="true"><strong>{project.name}</strong></div>
                )}
                <div className="project-detail">
                  <p className="eyebrow">{project.category}</p>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <p className="project-credit">{project.creator}</p>
                  <div className="project-links">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-arrow" aria-label={`作品を見る（${project.name}、新しいタブ）`}>作品を見る <span aria-hidden="true">↗</span></a>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-arrow" aria-label={`GitHub（${project.name}、新しいタブ）`}>GitHub <span aria-hidden="true">↗</span></a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="page-footnote"><a href={`${site.github}/projects`} target="_blank" rel="noopener noreferrer">成果物紹介リポジトリ</a>でも作品を紹介しています。</p>
        </div>
      </section>
    </>
  );
}
