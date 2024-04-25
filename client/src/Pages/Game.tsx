import { Dungeon } from '../Components/Dungeon';

export function Game() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-fit h-fit pl-2 pr-2 bg-gray-500 border-solid drop-shadow-2xl">
        <Dungeon />
      </div>
    </div>
  );
}
