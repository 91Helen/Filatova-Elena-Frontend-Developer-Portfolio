import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTelegramPlane, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "animate.css";
import headerImg from "@/shared/assets/img/photo_2025-08-18_12-29-00-modified-removebg-preview.png";
import styles from "./Banner.module.css";

export const Banner = () => {
  const { t, i18n } = useTranslation();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(40);
  const toRotate = useMemo(() => [t("banner.role")], [t]);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);
      setDelta(isDeleting ? 80 : 40);
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      }
    };
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);

  return (
    <section className={styles.banner} id="home">
      <Container>
        <Row className="align-items-center flex-md-row-reverse">
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Portrait of Elena" className={styles.avatarImg} width={450} height={450} />
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className={styles.tagline}>{t("banner.tagline")}</span>
              <h1>
                {t("banner.greeting")}
                <br />
                <span className={styles.txtRotate}>
                  <span className={styles.wrap}>{text}</span>
                </span>
              </h1>
              <p>{t("banner.description")}</p>
              <div className={styles.ctaGroup}>
                <a href={t("banner.resumeFile")} download={`Elena_Filatova_Resume_${i18n.language}.pdf`} className={styles.cvBtn}>
                  {t("banner.downloadCv")}
                </a>
                <a href="/Filatova-Elena-recommendation-letter.pdf" download className={`${styles.cvBtn} ${styles.cvBtnOutline}`}>
                  {t("banner.recommendationLetter")}
                </a>
              </div>
              <div className={`${styles.socialIcons} mt-3 d-flex gap-3`}>
                <a href="https://t.me/elenafeela" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <FaTelegramPlane size={20} />
                </a>
                <a href="https://www.instagram.com/elena_feela_/" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <FaInstagram size={20} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=filatovae047@gmail.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};