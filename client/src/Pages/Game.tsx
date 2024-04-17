import { Link } from 'react-router-dom';

export function Game() {
  return (
    <>
      <div>Game Map</div>
      <div>
        <div>Time</div>
        <div>
          <div>Pause</div>
          <div>
            <Link to="/">
              <button>Quit</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
