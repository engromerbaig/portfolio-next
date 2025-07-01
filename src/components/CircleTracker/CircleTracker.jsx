import { useState, useEffect } from 'react';

const CircleTracker = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [lerpFactor, setLerpFactor] = useState(0.2);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const newCirclePosition = {
      x: lerp(circlePosition.x, cursorPosition.x, lerpFactor),
      y: lerp(circlePosition.y, cursorPosition.y, lerpFactor),
    };

    setCirclePosition(newCirclePosition);
  }, [cursorPosition, lerpFactor]);

  return (
    <div
      style={{
        left: `${circlePosition.x}px`,
        top: `${circlePosition.y}px`,
        pointerEvents: 'none', // Prevents the circle from interfering with mouse events
      }}
      className="fixed w-5 h-5 hidden lg:block z-50 border-4 border-theme-blue rounded-full transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CircleTracker;

