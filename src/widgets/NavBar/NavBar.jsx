import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import logo from "@/shared/assets/img/logo-s.png";
import './NavBar.css';

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        if (expanded) setExpanded(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, expanded]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className={`${scrolled ? 'scrolled' : ''} ${!visible ? 'navbar--hidden' : ''}`}
    >
      <Container className="d-flex align-items-center">
        <Navbar.Brand href="#home" onClick={() => setExpanded(false)}>
          <img src={logo} alt="Logo" style={{ width: '42px' }} />
          <span className="brand-text ms-2">
            <span className="brand-white">{t('navbar.brand.first')}</span>{' '}
            <span className="brand-accent">{t('navbar.brand.last')}</span>
          </span>
        </Navbar.Brand>

        <button
          type="button"
          className="lang-switcher"
          onClick={toggleLanguage}
          aria-label="Switch language"
        >
          {i18n.language === 'en' ? 'RU' : 'EN'}
        </button>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className="custom-toggler">
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to="home" spy smooth offset={-100} duration={500} className="nav-link navbar-link" activeClass="active" onClick={() => setExpanded(false)}>
              {t('navbar.home')}
            </Link>
            <Link to="skills" spy smooth offset={-100} duration={500} className="nav-link navbar-link" activeClass="active" onClick={() => setExpanded(false)}>
              {t('navbar.skills')}
            </Link>
            <Link to="projects" spy smooth offset={-100} duration={500} className="nav-link navbar-link" activeClass="active" onClick={() => setExpanded(false)}>
              {t('navbar.projects')}
            </Link>
            <Link to="contact" spy smooth offset={-100} duration={500} className="nav-link navbar-link" activeClass="active" onClick={() => setExpanded(false)}>
              {t('navbar.contact')}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};