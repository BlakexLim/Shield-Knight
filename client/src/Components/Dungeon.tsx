import { GameMap } from './GameMap';
import { Pause } from './Pause';
import { Quit } from './Quit';
import { Time } from './Time';

export function Dungeon() {
  return (
    <div className="flex flex-col">
      <Time />
      <GameMap />
      <Pause />
      <Quit />
    </div>
  );
}
