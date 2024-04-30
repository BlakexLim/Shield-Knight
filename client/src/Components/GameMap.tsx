import { useCallback, useEffect, useState } from 'react';
import { Hero } from '../assets/Hero';
import { path } from '../assets/path';
import { mountain } from '../assets/mountain';
import { Dragon } from './Dragon';
// import { Bullets } from './Bullets';

type GameProps = {
  victory: () => void;
};

const mapDimensions = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1],
];

export function GameMap({ victory }: GameProps) {
  const [position, setPosition] = useState({ x: 4, y: 10 });
  const [bullets, setBullets] = useState({ x: 4, y: 1 });

  // move one cell per movement button click
  const speedX = 70;
  const speedY = 65.33;

  const handleBullets = useCallback(() => {
    setBullets(bullets);
  }, [bullets]);

  const checkOk = useCallback((x: number, y: number) => {
    if (mapDimensions[y][x] === 1) return false;
    else return true;
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      e.preventDefault();
      let newX = position.x;
      let newY = position.y;
      handleBullets();

      switch (e.keyCode) {
        // keyCodes for w a s d and arrow keys
        case 87:
        case 38:
          if (position.y > 0 && checkOk(position.x, position.y - 1)) {
            newY = position.y - 1;
          }
          if (newY === 0) {
            victory();
          }
          break;
        case 83:
        case 40:
          if (
            position.y < mapDimensions.length - 1 &&
            checkOk(position.x, position.y + 1)
          ) {
            newY = position.y + 1;
          }
          break;
        case 65:
        case 37:
          if (position.x > 0 && checkOk(position.x - 1, position.y)) {
            newX = position.x - 1;
          }
          break;
        case 68:
        case 39:
          if (
            position.x < mapDimensions[0].length - 1 &&
            checkOk(position.x + 1, position.y)
          ) {
            newX = position.x + 1;
          }
          break;
        default:
          break;
      }
      setPosition({ x: newX, y: newY });
    },
    [position, checkOk, victory, handleBullets]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // map game map elements
  function mapElement(y: number) {
    if (y === 0) return path;
    if (y === 1) return mountain;
  }

  return (
    <div className="flex flex-col relative">
      <Dragon />
      <div
        onKeyDown={handleBullets}
        className="absolute"
        style={{
          left: `${bullets.x * speedX + 20}px`,
          top: `${bullets.y * speedY + 20}px`,
        }}></div>
      {mapDimensions.map((x, i) => (
        <div className="flex" key={i}>
          {x.map((y, j) => (
            <span key={j}>{mapElement(y)}</span>
          ))}
        </div>
      ))}

      <div className="flex items-center justify-center">
        <div
          className="absolute"
          style={{
            left: `${position.x * speedX + 20}px`,
            top: `${position.y * speedY + 20}px`,
          }}>
          <Hero />
        </div>
      </div>
    </div>
  );
}
