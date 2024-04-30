import { Dungeon } from '../Components/Dungeon';

export function Game() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-fit h-fit md:pl-2 md:pr-2 bg-gray-500 border-solid drop-shadow-2xl">
        <Dungeon />
      </div>
    </div>
  );
}
