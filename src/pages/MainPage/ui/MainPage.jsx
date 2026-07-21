// src/pages/MainPage/ui/MainPage.jsx
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { IntroLogo } from '@/widgets/IntroLogo'; 
import { NavBar } from '@/widgets/NavBar';
import { Banner } from '@/widgets/Banner';
import { Skills } from '@/widgets/Skills';
import { Projects } from '@/widgets/Projects';
import { Contact } from '@/widgets/Contact';
import { Footer } from '@/widgets/Footer';
import { ScrollToTop } from "@/shared/ScrollToTop/ScrollToTop";
import styles from './MainPage.module.css'; 

export const MainPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (introRef.current) {
        gsap.to(introRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setShowIntro(false);
            setShowContent(true);
          },
        });
      }
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   
      {showIntro && (
        <div ref={introRef} className={styles.introContainer}>
          <IntroLogo />
        </div>
      )}

      {showContent && (
           <>
        <NavBar />
        <main>
          <section id="home" className="section-anchor">
            <Banner />
          </section>
          <Skills />
          <Projects />
            <Contact />
            <ScrollToTop />
        </main>
         <Footer />
         </>
      )}
    </>
  );
};

export default MainPage;