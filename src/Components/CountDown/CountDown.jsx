import { useState, useEffect } from "react";

const CountDown = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update seconds
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        // When seconds reach 0, decrement minutes
        setSeconds(59);
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
        } else {
          // When minutes reach 0, decrement hours
          setMinutes(59);
          if (hours > 0) {
            setHours((prevHours) => prevHours - 1);
          } else {
            // When hours reach 0, decrement days
            setHours(23);
            if (days > 0) {
              setDays((prevDays) => prevDays - 1);
            } else {
              // When days reach 0, clear the interval
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col items-center w-20 p-2 text-black bg-white border-2 rounded-box ">
          <span className="font-mono text-5xl countdown">{days}</span>
          days
        </div>
        <div className="flex flex-col items-center w-20 p-2 text-black bg-white border-2 rounded-box ">
          <span className="font-mono text-5xl countdown">{hours}</span>
          hours
        </div>
        <div className="flex flex-col items-center w-20 p-2 text-black bg-white border-2 rounded-box ">
          <span className="font-mono text-5xl countdown">{minutes}</span>
          min
        </div>
        <div className="flex flex-col items-center w-20 p-2 text-black bg-white border-2 rounded-box ">
          <span className="font-mono text-5xl countdown">{seconds}</span>
          sec
        </div>
      </div>
    </div>
  );
};

export default CountDown;
