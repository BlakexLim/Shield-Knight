import { useEffect } from 'react';

type Projectile = {
  id: number;
  onScreen: boolean;
};

type BulletProp = {
  bullets: Projectile[];
};

export function Bullets({ bullets }: BulletProp) {
  function renderBullet() {
    const projectile = bullets.map((fire) => <div key={fire.id}>bullets</div>);
    return (
      <div className="flex justify-center items-center bg-red-800 w-8 h-8 rounded-full">
        {projectile}
      </div>
    );
  }
  useEffect(() => {
    const newInt = setInterval(renderBullet, 2000);
    return () => clearInterval(newInt);
  });
  return <div onKeyDown={renderBullet}></div>;
}
