import { useCallback, useEffect, useState } from 'react';
import { Hero } from './Hero';
type Props = {
  playerPosition: number[][];
};

export function Movement({ playerPosition }: Props) {
  const [position, setPosition] = useState({ x: 9, y: 10 });
  // speed is how many pixels the hero will move
  const speed = 22;
  // function handlePosition() {
  //   if (position.x >= x) {

  //   }
  // }

  const handleKeyPress = useCallback(
    (e) => {
      e.preventDefault();
      let x = position.x;
      let y = position.y;

      switch (e.keyCode) {
        // keyCodes for w a s d and arrow keys
        case 87:
        case 38:
          y = position.y - speed;
          console.log('w');
          break;
        case 83:
        case 40:
          y = position.y + speed;
          console.log('s');
          break;
        case 65:
        case 37:
          x = position.x - speed;
          console.log('a');
          break;
        case 68:
        case 39:
          x = position.x + speed;
          console.log('d');
          break;
        default:
          break;
      }
      console.log('newPosition', x, y);
      setPosition({ x: x, y: y });
    },
    [position]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="absolute"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        {playerPosition}
        <Hero />
      </div>
    </div>
  );
}
