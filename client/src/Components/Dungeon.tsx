import { GameMap } from './GameMap';
import { Movement } from './Movement';
import { Pause } from './Pause';
import { Quit } from './Quit';
import { Time } from './Time';

export function Dungeon() {
  return (
    <div className="flex-col items-center">
      <Time />
      <GameMap />
      <Pause />
      <Quit />
      <Movement />
    </div>
  );
}
