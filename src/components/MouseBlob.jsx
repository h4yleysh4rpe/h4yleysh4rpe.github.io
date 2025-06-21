import { useEffect, useRef, useState } from "react";

export default function MouseBlob() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [scale, setScale] = useState(1);

  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;

      const dx = newX - lastPos.current.x;
      const dy = newY - lastPos.current.y;

      const angleRad = Math.atan2(dy, dx);
      const distance = Math.sqrt(dx * dx + dy * dy);

      setPosition({ x: newX, y: newY });
      setAngle((angleRad * 180) / Math.PI);
      setScale(Math.min(1 + distance / 100, 2));
      lastPos.current = { x: newX, y: newY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-36 h-36 bg-gradient-to-tr from-headerblue to-bgblue rounded-full opacity-70 transition-all duration-100 blur-lg ease-out"
      style={{
        transform: `
          translate(${position.x - 72}px, ${position.y - 72}px)
          rotate(${angle}deg)
          scale(${scale}, ${2 - scale})
        `,
      }}
    />
  );
}
