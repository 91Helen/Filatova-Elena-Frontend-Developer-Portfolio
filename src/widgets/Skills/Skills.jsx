import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

import colorSharp from "@/shared/assets/img/color-sharp.png";
import { skillsData, certificates, experience } from "@/shared/data/portfolioData";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const { t } = useTranslation();
  const skillRef = useRef(null);

  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleWheel = () => {
      if (selectedCert) setSelectedCert(null);
    };

    if (selectedCert) {
      window.addEventListener("wheel", handleWheel);
    }
    return () => window.removeEventListener("wheel", handleWheel);
  }, [selectedCert]);

  useEffect(() => {
    if (skillRef.current) {
      gsap.fromTo(
        ".skill-grid-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="skill" id="skills">
      {/* Модальное окно */}
      {selectedCert && (
        <div className="modalOverlay" onClick={() => setSelectedCert(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setSelectedCert(null)}>×</button>
            <img src={selectedCert} alt="Certificate full view" />
          </div>
        </div>
      )}

      <div className="container" ref={skillRef}>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>{t("skills.title")}</h2>
              <h5>{t("skills.subtitle")}</h5>
              <p>{t("skills.description")}</p>

              <div className="skill-grid">
                {skillsData.map((skill, idx) => (
                  <div className="skill-grid-item" key={idx}>
                    <div className="icon-box">
                      <img src={skill.img} alt={skill.title} />
                    </div>
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>

              <h3 className="mt-5">{t("skills.certificates")}</h3>
              <div className="certificates-grid">
                {certificates.map((cert, idx) => (
                  <div
                    className="certificate-card"
                    key={idx}
                    onClick={() => setSelectedCert(cert.img)}
                  >
                    <img src={cert.img} alt={cert.title} />
                  </div>
                ))}
              </div>

              <h3 className="mt-5">{t("skills.experience")}</h3>
              <div className="experience-grid">
                {experience.map((job, idx) => (
                  <div className="experience-card" key={idx}>
                    <div className="experience-header">
                      <h4>{t(`skills.experience_items.${job.id}.role`)}</h4>
                      <span className="experience-period">{t(`skills.experience_items.${job.id}.period`)}</span>
                    </div>
                    <a href={job.link} target="_blank" rel="noreferrer" className="experience-company">
                      {t(`skills.experience_items.${job.id}.company`)} — {t(`skills.experience_items.${job.id}.location`)}
                    </a>
                    <ul className="experience-points">
                      {(t(`skills.experience_items.${job.id}.points`, { returnObjects: true }) || []).map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background-decoration" />
    </section>
  );
};