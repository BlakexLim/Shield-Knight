import { Link } from 'react-router-dom';

export function Controls() {
  return (
    <div className="pt-20 h-screen">
      <div className="flex columns-2 justify-evenly h-64">
        <div className="bg-white rounded-xl text-center h-3/4 w-1/3 drop-shadow-2xl">
          <div className="text-4xl">controls</div>
          <div className="flex-col justify-center">
            <div>
              <div className="text-2xl">
                <i className="fa-solid fa-square-caret-up"></i>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="text-2xl">
                <i className="fa-solid fa-square-caret-left"></i>
              </div>
              <div className="text-2xl">
                <i className="fa-solid fa-square-caret-down"></i>
              </div>
              <div className="text-2xl">
                <i className="fa-solid fa-square-caret-right"></i>
              </div>
            </div>
          </div>
          <div className="bg-zinc-600 h-0.5"></div>
          <div className="flex-col justify-center p-2">
            <div>
              <div className="flex justify-center font-sans">
                <p className="bg-black text-white w-5 rounded-md">W</p>
              </div>
            </div>
            <div className="flex justify-evenly font-sans p-2">
              <div>
                <p className="bg-black text-white w-5 rounded-md">A</p>
              </div>
              <div>
                <p className="bg-black text-white w-5 rounded-md">S</p>
              </div>
              <div>
                <p className="bg-black text-white w-5 rounded-md">D</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl text-center h-3/4 w-1/3 drop-shadow-2xl">
          <div className="text-4xl p-2">Objective</div>
          <div className="text-xl p-2">Reach the Dragon</div>
        </div>
      </div>
      <div className="flex justify-center pt-1">
        <Link to="/intofire">
          <button className="text-3xl/normal drop-shadow-2xl bg-yellow-300 hover:animate-pulse hover:bg-yellow-500 rounded-2xl h-10 w-64">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}
