import { Dungeon } from '../Components/Dungeon';

export function Game() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-1/2 h-fit bg-gray-500 border-solid drop-shadow-2xl">
        <Dungeon />
      </div>
    </div>
  );
}
