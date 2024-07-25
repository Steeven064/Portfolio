import "semantic-ui-css/semantic.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Nav, 
         Footer, 
         FirstSection, 
         AboutMeSection,
         SkillsSection } from "../Sections";
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
      <header>
        <Nav />
      </header>
      <main>
        <FirstSection />
        <AboutMeSection />
        <SkillsSection/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
