import { Dungeon } from '../Components/Dungeon';

export function Game() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="w-3/5 h-full bg-gray-500 border-solid drop-shadow-2xl">
        <Dungeon />
      </div>
    </div>
  );
}
