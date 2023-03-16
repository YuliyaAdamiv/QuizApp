import {useEffect, useState} from 'react';

export default function Timer(questionNumber, setStop) {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) return setStop(true);
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);
  useEffect(() => {
    setTimer(30);
  }, []);
  return timer;
}
