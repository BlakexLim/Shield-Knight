import { Link } from 'react-router-dom';

export function Quit() {
  function onQuit() {
    alert('COWARD');
  }
  return (
    <div className="flex justify-center p-1">
      <Link to="/">
        <button
          onClick={onQuit}
          className="text-white hover:text-yellow-500 drop-shadow-2xl">
          Quit
        </button>
      </Link>
    </div>
  );
}
