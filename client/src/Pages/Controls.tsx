import { Link } from 'react-router-dom';

export function Controls() {
  return (
    <>
      <div>
        <div>
          controls
          <div>arrow keys</div>
          <div>w a s d</div>
        </div>
        <div>
          Obj
          <div>Objective</div>
          <div>Reach the Dragon</div>
        </div>
      </div>
      <div>
        <Link to="/intofire">
          <button>Start</button>
        </Link>
      </div>
    </>
  );
}
