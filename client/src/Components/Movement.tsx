import { useEffect, useState } from 'react';
import { Hero } from './Hero';

export function Movement() {
  const [position, setPosition] = useState({ x: 400, y: 800 });
  console.log(position);
  // speed is how many pixels the hero will move
  const speed = 15;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    e.preventDefault();
    console.log(e.keyCode);
    switch (e.keyCode) {
      // keyCodes for w a s d and arrow keys
      case 87:
      case 38:
        setPosition((prev) => ({ ...prev, y: prev.y - speed }));
        console.log('w');
        break;
      case 83:
      case 40:
        setPosition((prev) => ({ ...prev, y: prev.y + speed }));
        console.log('s');
        break;
      case 65:
      case 37:
        setPosition((prev) => ({ ...prev, x: prev.x - speed }));
        console.log('a');
        break;
      case 68:
      case 39:
        setPosition((prev) => ({ ...prev, x: prev.x + speed }));
        console.log('d');
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="absolute"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        <Hero />
      </div>
    </div>
  );
}
