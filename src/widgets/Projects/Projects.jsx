import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next"; // Импорт хука

import { useOnScreen } from "@/shared/hooks/useOnScreen";
import colorSharp from "@/shared/assets/img/color-sharp.png";
import { projects } from "@/shared/data/portfolioData";
import "./Projects.css";

export const Projects = () => {
  const { t } = useTranslation(); 
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3));
  const cardsRef = useRef([]);
  const [sectionRef, isVisible] = useOnScreen();

  const handleSeeMore = () => {
    if (visibleProjects.length === 3) {
      const newProjects = projects.slice(3);
      setVisibleProjects((prev) => [...prev, ...newProjects]);
    } else {
      setVisibleProjects(projects.slice(0, 3));
    }
  };

  useEffect(() => {
    let startIndex = 0;
    if (visibleProjects.length > 3) {
      startIndex = 3;
    }
    const cardsToAnimate = cardsRef.current.slice(startIndex, visibleProjects.length);

    gsap.fromTo(
      cardsToAnimate,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );
  }, [visibleProjects]);

  return (
    <section className="projects" id="projects">
      <div
        ref={sectionRef}
        className={`projects-bx ${isVisible ? "animate__animated animate__fadeIn" : ""}`}
      >
        <h2>{t("projects.title")}</h2>
        <p>{t("projects.description")}</p>

        <div className="row">
          {visibleProjects.map((project, index) => (
            <div
              className="col-md-4 mb-4"
              key={project.id} // Используем id из данных
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="project-card">
                <img src={project.imgUrl} alt={t(`projects_data.${project.id}.title`)} />
                <div className="content">
                  <h3>{t(`projects_data.${project.id}.title`)}</h3>
                  <p>{t(`projects_data.${project.id}.description`)}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">{t("projects.github")}</a>
                    <a href={project.netlify} target="_blank" rel="noreferrer">{t("projects.netlify")}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 mt-4 text-center">
            <button onClick={handleSeeMore} className="cosmic-button">
              {visibleProjects.length === 3 ? t("projects.seeMore") : t("projects.seeLess")}
            </button>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};