// import { useState } from "react";

// export function Time() {
//   const [time, setTime] = useState(0);
// const [running, setRunning] = useState(false);

// useEffect(() => {
//   let intervalId;
//   if (running) {
//     intervalId = setInterval(() => {
//       setTime((prev) => prev + 10);
//     }, 10);
//   } else if (!running) {
//     clearInterval(intervalId);
//   }
//   return () => clearInterval(intervalId);
// }, [running]);
//   return (
//     <div className="flex justify-center text-center">
//       <div className="bg-yellow-300 p-8 animate-pulse ease-linear drop-shadow-2xl">
//         <span>{('0' + Math.floor((time / 60000) % 60))}:</span>
//         <span>{('0' + Math.floor((time / 1000) % 60))}:</span>
//         <span>{('0' + ((time / 10) % 100))}</span>
//       </div>
//     </div>
//   );
// }
