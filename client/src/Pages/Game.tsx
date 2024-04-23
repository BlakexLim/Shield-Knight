import { Dungeon } from '../Components/Dungeon';

export function Game() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="w-fit h-fit bg-gray-500 border-solid drop-shadow-2xl">
        <Dungeon />
      </div>
    </div>
  );
}
