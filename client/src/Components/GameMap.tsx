import { useCallback, useEffect, useState } from 'react';
import { Hero } from './Hero';

const mapDimensions = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 0, 0, 1],
];

export function GameMap() {
  const [position, setPosition] = useState({ x: 3, y: 10 });

  // speed is how many pixels the hero will move
  const speedX = 57;
  const speedY = 66;

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

  const mountain = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={3 * 19}
      viewBox="0 -0.5 19 22"
      shapeRendering="crispEdges">
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#595652"
        d="M0 0h19M0 1h19M0 2h19M0 3h5M6 3h6M13 3h6M0 4h5M7 4h5M13 4h6M0 5h5M7 5h4M14 5h5M0 6h5M8 6h3M14 6h5M0 7h5M8 7h3M15 7h4M0 8h5M8 8h3M15 8h4M0 9h4M8 9h3M15 9h4M0 10h4M9 10h2M15 10h4M0 11h3M9 11h1M15 11h4M0 12h3M9 12h1M15 12h4M0 13h3M15 13h4M0 14h2M16 14h3M0 15h2M17 15h2M0 16h2M17 16h2M0 17h19M0 18h19M0 19h19M0 20h19M0 21h19"
      />
      <path
        stroke="#000000"
        d="M5 3h1M12 3h1M5 4h2M12 4h1M5 5h2M11 5h1M13 5h1M5 6h1M7 6h1M11 6h1M13 6h1M5 7h1M7 7h1M11 7h1M14 7h1M5 8h1M7 8h1M11 8h1M14 8h1M4 9h1M7 9h1M11 9h1M14 9h1M4 10h1M8 10h1M11 10h1M14 10h1M3 11h1M8 11h1M10 11h1M14 11h1M3 12h1M10 12h1M14 12h1M3 13h1M14 13h1M2 14h1M15 14h1M16 15h1M16 16h1"
      />
      <path
        stroke="#323c39"
        d="M12 5h1M6 6h1M12 6h1M6 7h1M12 7h2M6 8h1M12 8h2M5 9h2M12 9h2M5 10h3M12 10h2M4 11h4M11 11h3M4 12h5M11 12h3M4 13h10M3 14h12M2 15h14M2 16h14"
      />
    </svg>
  );
  const path = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={3 * 19}
      viewBox="0 -0.5 19 22"
      shapeRendering="crispEdges">
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#595652"
        d="M0 0h21M0 1h21M0 2h21M0 3h21M0 4h21M0 5h21M0 6h21M0 7h21M0 8h21M0 9h21M0 10h21M0 11h21M0 12h21M0 13h21M0 14h21M0 15h21M0 16h21M0 17h21M0 18h21M0 19h21M0 20h21M0 21h21M0 22h21M0 23h21"
      />
    </svg>
  );
  const dragon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={4 * 112}
      height={50}
      viewBox="0 -0.5 112 22"
      shapeRendering="crispEdges">
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#595652"
        d="M0 0h13M38 0h15M64 0h16M107 0h14M0 1h14M37 1h16M64 1h17M106 1h15M0 2h15M36 2h17M54 2h1M62 2h1M64 2h18M105 2h16M0 3h16M35 3h18M64 3h19M104 3h17M0 4h17M34 4h19M54 4h1M62 4h1M64 4h20M103 4h18M0 5h55M62 5h59M0 6h55M62 6h59M0 7h55M62 7h59M0 8h56M61 8h60M0 9h57M60 9h61M0 10h58M59 10h62M0 11h121M0 12h121M0 13h121M0 14h121M0 15h121"
      />
      <path
        stroke="#4da681"
        d="M13 0h25M53 0h11M80 0h27M14 1h23M54 1h9M81 1h25M15 2h21M55 2h7M82 2h23M16 3h19M55 3h1M57 3h3M61 3h1M83 3h21M17 4h17M55 4h2M58 4h1M60 4h2M84 4h19M55 5h2M60 5h2M55 6h7M55 7h7M56 8h5M57 9h3M58 10h1"
      />
      <path
        stroke="#000000"
        d="M53 1h1M63 1h1M53 2h1M63 2h1M53 3h2M56 3h1M60 3h1M62 3h2M53 4h1M57 4h1M59 4h1M63 4h1M58 5h1"
      />
      <path stroke="#ac3232" d="M57 5h1M59 5h1" />
    </svg>
  );

  function mapElement(y: number) {
    if (y === 0) return path;
    if (y === 1) return mountain;
  }

  return (
    <div className="flex-col relative">
      {<div className="absolute top-0 left-0 right-0">{dragon}</div>}{' '}
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
            left: `${position.x * speedX + 12}px`,
            top: `${position.y * speedY + 12}px`,
          }}>
          <Hero />
        </div>
      </div>
    </div>
  );
}
