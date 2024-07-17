import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedTextRef} />;
}
