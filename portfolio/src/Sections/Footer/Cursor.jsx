import { useEffect, useState } from "react";
import "./CustomCursor.css";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
