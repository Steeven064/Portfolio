import "semantic-ui-css/semantic.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cursor,
         Nav, 
         Footer, 
         FirstSection, 
         AboutMeSection,
         SkillsSection,
         ContactSection,
        ProjectSection } from "../Sections";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
      mirror: false,
    });
  }, []);

  return (
    <>
    <Cursor />
      <header>
        <Nav />
      </header>
      <main>
        <FirstSection />
        <AboutMeSection />
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
