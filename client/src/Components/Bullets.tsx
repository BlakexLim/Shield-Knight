import { useCallback, useEffect, useState } from 'react';

export type Projectile = {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
};

type BulletProp = {
  isFiring: boolean;
  speedX: number;
  speedY: number;
  mapW: number;
  mapH: number;
};

const projectiles = [
  { x: 4, y: 1, speedX: 0, speedY: 1 },
  { x: 3, y: 1, speedX: -1, speedY: 1 },
  { x: 5, y: 1, speedX: 1, speedY: 1 },
];

export function Bullets({ isFiring, speedX, speedY, mapH, mapW }: BulletProp) {
  const [bullets, setBullets] = useState<Projectile[]>([]);

  function renderBullet() {
    if (isFiring === false) {
      const projectiles = bullets.map((bullet, i) => (
        <div
          key={i}
          className="absolute flex justify-center items-center bg-red-800 w-8 h-8 rounded-full"
          style={{
            left: `${bullet.x * speedX + 20}px`,
            top: `${bullet.y * speedY + 20}px`,
          }}></div>
      ));
      return <div>{projectiles}</div>;
    }
  }

  const moveBullets = useCallback(() => {
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
  }, [bullets, mapH, mapW]);

  useEffect(() => {
    const newInt = setInterval(moveBullets, 200);
    return () => clearInterval(newInt);
  }, [moveBullets]);

  const addBullet = useCallback(() => {
    setBullets((prev) => [...prev, projectiles[Math.floor(Math.random() * 3)]]);
  }, []);

  useEffect(() => {
    const newInt = setInterval(addBullet, 1000);
    return () => clearInterval(newInt);
  }, [addBullet]);

  return <div> {renderBullet()} </div>;
}
