import { useCallback, useEffect, useState } from 'react';
import { Hero } from '../assets/Hero';
import { path } from '../assets/path';
import { mountain } from '../assets/mountain';
import { Dragon } from './Dragon';
import { Bullets } from './Bullets';

type GameProps = {
  victory: () => void;
  gameOver: () => void;
  gameOn: boolean;
};

const mapDimensions = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 0, 1, 0],
];

export function GameMap({ victory, gameOn, gameOver }: GameProps) {
  const [position, setPosition] = useState({ x: 4, y: 11 });

  // move one cell per movement button click
  const cellW = 70;
  const cellH = 65.33;
  const mapHeight = mapDimensions.length;
  const mapWidth = mapDimensions[0].length;

  // check for obstruction
  const checkOk = useCallback((x: number, y: number) => {
    if (mapDimensions[y][x] === 1) return false;
    else return true;
  }, []);

  // hero movement
  const handleKeyPress = useCallback(
    (e) => {
      e.preventDefault();
      let newX = position.x;
      let newY = position.y;
      if (!gameOn) return;

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
            position.y < mapHeight - 1 &&
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
            position.x < mapWidth - 1 &&
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
    [position, checkOk, victory, mapWidth, mapHeight, gameOn]
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
      <Bullets
        isFiring={gameOn}
        cellW={cellW}
        cellH={cellH}
        mapH={mapHeight}
        mapW={mapWidth}
        heroPosition={position}
        onCollision={gameOver}
      />
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
            left: `${position.x * cellW + 20}px`,
            top: `${position.y * cellH + 20}px`,
          }}>
          <Hero />
        </div>
      </div>
    </div>
  );
}
