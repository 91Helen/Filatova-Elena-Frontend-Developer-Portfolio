import { Container, Row, Col } from "react-bootstrap";
import { FaTelegramPlane, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import logo from "@/shared/assets/img/logo-s.png";
import "./Footer.css";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-top me-2"
            />
            <span className="footer-brand-text">
              <span className="brand-white">{t('navbar.brand.first')}</span>{' '}
           <span className="brand-accent">{t('navbar.brand.last')}</span>
            </span>
          </Col>

          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icons">
              <a href="https://t.me/elenafeela" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane />
              </a>
              <a href="https://www.instagram.com/elena_feela_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=filatovae047@gmail.com" target="_blank" rel="noreferrer" >
                <FaEnvelope />
              </a>
            </div>
            <p className="footer-copy">© {currentYear}. {t("footer.rights")}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};