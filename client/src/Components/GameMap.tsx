import { useCallback, useEffect, useState } from 'react';
import { Hero } from '../assets/Hero';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';
import { dragon } from '../assets/dragon';
import { path } from '../assets/path';
import { mountain } from '../assets/mountain';

const mapDimensions = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1],
];

export function GameMap() {
  const [position, setPosition] = useState({ x: 4, y: 10 });
  const [open, setOpen] = useState(false);

  // speed is how many pixels the hero will move
  const speedX = 70;
  const speedY = 65.33;

  const checkOk = useCallback((x: number, y: number) => {
    if (mapDimensions[y][x] === 1) return false;
    else return true;
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      e.preventDefault();
      let newX = position.x;
      let newY = position.y;

      switch (e.keyCode) {
        // keyCodes for w a s d and arrow keys
        case 87:
        case 38:
          if (position.y > 0 && checkOk(position.x, position.y - 1)) {
            newY = position.y - 1;
          }
          if (newY === 0) {
            setOpen(true);
          } else {
            setOpen(false);
          }
          console.log('w');
          break;
        case 83:
        case 40:
          if (
            position.y < mapDimensions.length - 1 &&
            checkOk(position.x, position.y + 1)
          ) {
            newY = position.y + 1;
          }
          console.log('s');
          break;
        case 65:
        case 37:
          if (position.x > 0 && checkOk(position.x - 1, position.y)) {
            newX = position.x - 1;
          }
          console.log('a');
          break;
        case 68:
        case 39:
          if (
            position.x < mapDimensions[0].length - 1 &&
            checkOk(position.x + 1, position.y)
          ) {
            newX = position.x + 1;
          }
          console.log('d');
          break;
        default:
          break;
      }
      console.log('newPosition', newX, newY);
      setPosition({ x: newX, y: newY });
    },
    [position, checkOk]
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
      {<div className="absolute">{dragon}</div>}
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
      <Modal onClose={() => setOpen(false)} isOpen={open}>
        <div className="flex flex-col items-center">
          <h1 className="lg:mt-5 w-3/5 h-1/5 text-center lg:text-5xl md:text-3xl sm:text-lg tracking-widest text-blue-700 animate-pulse">
            V I C T O R Y
          </h1>
          <div className="flex justify-center items-center lg:text-6xl md:text-4xl sm:text-lg bg-yellow-500 w-2/5 h-40 rounded-2xl">
            <p>00:00:00</p>
          </div>
          <button className="pt-1 lg:mt-12 w-1/5 rounded-2xl bg-slate-700 text-white tracking-wider">
            <Link to="/newgame">OK</Link>
          </button>
        </div>
      </Modal>
    </div>
  );
}
