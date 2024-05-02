import { Link } from 'react-router-dom';
import { useUser } from '../Components/useUser';
import { saveGuest } from '../lib/data';

export function Controls() {
  const { user } = useUser();
  if (!user) {
    saveGuest({ guestTime: 0 });
  }
  return (
    <div className="flex flex-col justify-center h-screen ">
      <div className="flex columns-2 justify-evenly h-80">
        <div className="bg-white rounded-xl text-center h-4/5 w-1/4 drop-shadow-2xl">
          <div className="md:text-5xl animate-pulse pt-1 tracking-wider">
            controls
          </div>
          <div className="flex-col justify-center">
            <div>
              <div className="text-4xl">
                <i className="fa-solid fa-square-caret-up"></i>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-4xl pr-1">
                <i className="fa-solid fa-square-caret-left"></i>
              </div>
              <div className="text-4xl">
                <i className="fa-solid fa-square-caret-down"></i>
              </div>
              <div className="text-4xl pl-1">
                <i className="fa-solid fa-square-caret-right"></i>
              </div>
            </div>
          </div>
          <div className="bg-zinc-600 h-0.5"></div>
          <div className="flex-col justify-center p-2">
            <div>
              <div className="flex justify-center text-center font-sans">
                <p className="text-xl bg-black text-white rounded-md w-8 h-8">
                  W
                </p>
              </div>
            </div>
            <div className="flex justify-center text-center font-sans md:p-2 sm:p-1">
              <div className="pr-1">
                <p className="text-xl bg-black text-white rounded-md w-8 h-8">
                  A
                </p>
              </div>
              <div>
                <p className="text-xl bg-black text-white rounded-md w-8 h-8">
                  S
                </p>
              </div>
              <div className="pl-1">
                <p className="text-xl bg-black text-white rounded-md w-8 h-8">
                  D
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl text-center h-4/5 w-1/4 drop-shadow-2xl">
          <div className="md:text-6xl animate-pulse pt-2 tracking-wider">
            Objective
          </div>
          <div className="flex justify-center text-2xl p-2">
            Reach the Dragon
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-1">
        <Link to="/intofire">
          <button className="text-3xl drop-shadow-2xl bg-yellow-300 hover:animate-pulse hover:bg-yellow-500 rounded-2xl h-12 w-64">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}
