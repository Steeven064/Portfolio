import "semantic-ui-css/semantic.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Nav, Footer, FirstSection, AboutMeSection } from "../Sections";
import { useEffect } from "react";

export function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset:0,
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
