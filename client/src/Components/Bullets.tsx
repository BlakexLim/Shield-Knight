import { useCallback, useEffect, useState } from 'react';

type Projectile = {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
};

export type BulletProp = {
  isFiring: boolean;
  cellW: number;
  cellH: number;
  mapW: number;
  mapH: number;
  heroPosition: { x: number; y: number };
  onCollision: () => void;
};

const projectiles = [
  { x: 4, y: 1, speedX: 0, speedY: 1 },
  { x: 3, y: 1, speedX: -1, speedY: 1 },
  { x: 5, y: 1, speedX: 1, speedY: 1 },
];

export function Bullets({
  isFiring,
  cellW,
  cellH,
  mapH,
  mapW,
  heroPosition,
  onCollision,
}: BulletProp) {
  const [bullets, setBullets] = useState<Projectile[]>([]);

  const renderBullet = useCallback(() => {
    const projectiles = bullets.map((bullet, i) => (
      <div
        key={i}
        className="absolute flex justify-center items-center bg-red-800 w-8 h-8 rounded-full"
        style={{
          left: `${bullet.x * cellW + 20}px`,
          top: `${bullet.y * cellH + 20}px`,
        }}></div>
    ));
    return <div>{projectiles}</div>;
  }, [bullets, cellH, cellW]);

  // const collision = useCallback(() => {
  //   if (heroPosition === bullets) {
  //     console.log('collision detected!');
  //     onCollision();
  //   }
  // }, [bullets, heroPosition, onCollision]);

  const moveBullets = useCallback(() => {
    function collisionDetection() {
      console.log('detect', bullets, heroPosition);
      for (let i = 0; i < bullets.length; i++) {
        if (
          heroPosition.x === bullets[i].x &&
          heroPosition.y === bullets[i].y
        ) {
          onCollision();
          return true;
        }
      }
      return false;
    }
    if (!isFiring) return;
    if (collisionDetection()) return;
    const bulletTracker = [...bullets];
    bulletTracker.forEach((bullet) => {
      bullet.x += bullet.speedX;
      bullet.y += bullet.speedY;
    });
    const filterBullets = bulletTracker.filter((bullet) => {
      if (bullet.x < 0) return false;
      if (bullet.x >= mapW) return false;
      if (bullet.y < 0) return false;
      if (bullet.y >= mapH) return false;
      return true;
    });
    setBullets(filterBullets);
  }, [bullets, mapH, mapW, isFiring, heroPosition]);

  const addBullet = useCallback(() => {
    if (isFiring === false) return;
    const templateProjectile = projectiles[Math.floor(Math.random() * 3)];
    setBullets((prev) => [...prev, { ...templateProjectile }]);
  }, [isFiring]);

  useEffect(() => {
    const newInt = setInterval(moveBullets, 200);
    return () => clearInterval(newInt);
  }, [moveBullets]);

  useEffect(() => {
    const newInt = setInterval(addBullet, 500);
    return () => clearInterval(newInt);
  }, [addBullet]);
  return <div> {renderBullet()} </div>;
}
