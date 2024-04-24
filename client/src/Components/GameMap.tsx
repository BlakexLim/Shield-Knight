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
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export function GameMap() {
  const [position, setPosition] = useState({ x: 3, y: 10 });

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

  // const mountain = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width={3 * 19}
  //     viewBox="0 -0.5 19 22"
  //     shapeRendering="crispEdges">
  //     <metadata>
  //       Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
  //     </metadata>
  //     <path
  //       stroke="#595652"
  //       d="M0 0h19M0 1h19M0 2h19M0 3h5M6 3h6M13 3h6M0 4h5M7 4h5M13 4h6M0 5h5M7 5h4M14 5h5M0 6h5M8 6h3M14 6h5M0 7h5M8 7h3M15 7h4M0 8h5M8 8h3M15 8h4M0 9h4M8 9h3M15 9h4M0 10h4M9 10h2M15 10h4M0 11h3M9 11h1M15 11h4M0 12h3M9 12h1M15 12h4M0 13h3M15 13h4M0 14h2M16 14h3M0 15h2M17 15h2M0 16h2M17 16h2M0 17h19M0 18h19M0 19h19M0 20h19M0 21h19"
  //     />
  //     <path
  //       stroke="#000000"
  //       d="M5 3h1M12 3h1M5 4h2M12 4h1M5 5h2M11 5h1M13 5h1M5 6h1M7 6h1M11 6h1M13 6h1M5 7h1M7 7h1M11 7h1M14 7h1M5 8h1M7 8h1M11 8h1M14 8h1M4 9h1M7 9h1M11 9h1M14 9h1M4 10h1M8 10h1M11 10h1M14 10h1M3 11h1M8 11h1M10 11h1M14 11h1M3 12h1M10 12h1M14 12h1M3 13h1M14 13h1M2 14h1M15 14h1M16 15h1M16 16h1"
  //     />
  //     <path
  //       stroke="#323c39"
  //       d="M12 5h1M6 6h1M12 6h1M6 7h1M12 7h2M6 8h1M12 8h2M5 9h2M12 9h2M5 10h3M12 10h2M4 11h4M11 11h3M4 12h5M11 12h3M4 13h10M3 14h12M2 15h14M2 16h14"
  //     />
  //   </svg>
  // );
  const mountain = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={5 * 14}
      viewBox="0 -0.5 15 14"
      shapeRendering="crispEdges">
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#595652"
        d="M0 0h3M4 0h6M11 0h4M0 1h3M5 1h5M11 1h4M0 2h3M5 2h4M12 2h3M0 3h3M6 3h3M12 3h3M0 4h3M6 4h3M13 4h2M0 5h3M6 5h3M13 5h2M0 6h2M6 6h3M13 6h2M0 7h2M7 7h2M13 7h2M0 8h1M7 8h1M13 8h2M0 9h1M7 9h1M13 9h2M0 10h1M13 10h2M14 11h1"
      />
      <path
        stroke="#000000"
        d="M3 0h1M10 0h1M3 1h2M10 1h1M3 2h2M9 2h1M11 2h1M3 3h1M5 3h1M9 3h1M11 3h1M3 4h1M5 4h1M9 4h1M12 4h1M3 5h1M5 5h1M9 5h1M12 5h1M2 6h1M5 6h1M9 6h1M12 6h1M2 7h1M6 7h1M9 7h1M12 7h1M1 8h1M6 8h1M8 8h1M12 8h1M1 9h1M8 9h1M12 9h1M1 10h1M12 10h1M0 11h1M13 11h1M14 12h1M14 13h1"
      />
      <path
        stroke="#323c39"
        d="M10 2h1M4 3h1M10 3h1M4 4h1M10 4h2M4 5h1M10 5h2M3 6h2M10 6h2M3 7h3M10 7h2M2 8h4M9 8h3M2 9h5M9 9h3M2 10h10M1 11h12M0 12h14M0 13h14"
      />
    </svg>
  );
  // const path = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width={3 * 19}
  //     viewBox="0 -0.5 19 22"
  //     shapeRendering="crispEdges">
  //     <metadata>
  //       Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
  //     </metadata>
  //     <path
  //       stroke="#595652"
  //       d="M0 0h21M0 1h21M0 2h21M0 3h21M0 4h21M0 5h21M0 6h21M0 7h21M0 8h21M0 9h21M0 10h21M0 11h21M0 12h21M0 13h21M0 14h21M0 15h21M0 16h21M0 17h21M0 18h21M0 19h21M0 20h21M0 21h21M0 22h21M0 23h21"
  //     />
  //   </svg>
  // );
  const path = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={5 * 14}
      viewBox="0 -0.5 15 14"
      shapeRendering="crispEdges">
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#595652"
        d="M0 0h15M0 1h15M0 2h15M0 3h15M0 4h15M0 5h15M0 6h15M0 7h15M0 8h15M0 9h15M0 10h15M0 11h15M0 12h15M0 13h15"
      />
    </svg>
  );
  // const dragon = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width={4 * 112}
  //     height={50}
  //     viewBox="0 -0.5 112 22"
  //     shapeRendering="crispEdges">
  //     <metadata>
  //       Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
  //     </metadata>
  //     <path
  //       stroke="#595652"
  //       d="M0 0h13M38 0h15M64 0h16M107 0h14M0 1h14M37 1h16M64 1h17M106 1h15M0 2h15M36 2h17M54 2h1M62 2h1M64 2h18M105 2h16M0 3h16M35 3h18M64 3h19M104 3h17M0 4h17M34 4h19M54 4h1M62 4h1M64 4h20M103 4h18M0 5h55M62 5h59M0 6h55M62 6h59M0 7h55M62 7h59M0 8h56M61 8h60M0 9h57M60 9h61M0 10h58M59 10h62M0 11h121M0 12h121M0 13h121M0 14h121M0 15h121"
  //     />
  //     <path
  //       stroke="#4da681"
  //       d="M13 0h25M53 0h11M80 0h27M14 1h23M54 1h9M81 1h25M15 2h21M55 2h7M82 2h23M16 3h19M55 3h1M57 3h3M61 3h1M83 3h21M17 4h17M55 4h2M58 4h1M60 4h2M84 4h19M55 5h2M60 5h2M55 6h7M55 7h7M56 8h5M57 9h3M58 10h1"
  //     />
  //     <path
  //       stroke="#000000"
  //       d="M53 1h1M63 1h1M53 2h1M63 2h1M53 3h2M56 3h1M60 3h1M62 3h2M53 4h1M57 4h1M59 4h1M63 4h1M58 5h1"
  //     />
  //     <path stroke="#ac3232" d="M57 5h1M59 5h1" />
  //   </svg>
  // );
  const dragon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45 * 13}
      viewBox="0 -0.5 94 13"
      shapeRendering="crispEdges">
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#4da681"
        d="M0 0h25M40 0h11M67 0h27M1 1h23M41 1h9M68 1h25M2 2h21M42 2h7M69 2h23M3 3h19M42 3h1M44 3h3M48 3h1M70 3h21M4 4h17M42 4h2M45 4h1M47 4h2M71 4h19M42 5h2M47 5h2M42 6h7M42 7h7M43 8h5M44 9h3M45 10h1"
      />
      <path
        stroke="#595652"
        d="M25 0h15M51 0h16M0 1h1M24 1h16M51 1h17M93 1h1M0 2h2M23 2h17M41 2h1M49 2h1M51 2h18M92 2h2M0 3h3M22 3h18M51 3h19M91 3h3M0 4h4M21 4h19M41 4h1M49 4h1M51 4h20M90 4h4M0 5h42M49 5h45M0 6h42M49 6h45M0 7h42M49 7h45M0 8h43M48 8h46M0 9h44M47 9h47M0 10h45M46 10h48M0 11h94M0 12h94"
      />
      <path
        stroke="#000000"
        d="M40 1h1M50 1h1M40 2h1M50 2h1M40 3h2M43 3h1M47 3h1M49 3h2M40 4h1M44 4h1M46 4h1M50 4h1M45 5h1"
      />
      <path stroke="#ac3232" d="M44 5h1M46 5h1" />
    </svg>
  );

  function mapElement(y: number) {
    if (y === 0) return path;
    if (y === 1) return mountain;
  }

  return (
    <div className="flex flex-col relative">
      {<div className="absolute">{dragon}</div>}{' '}
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
