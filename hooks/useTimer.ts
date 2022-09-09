import { useState, useRef, useEffect } from "react";

// interface Timer {
//   run: boolean;
//   counter: number;
// }

interface TimerOptions {
  start: Date;
  end: Date;
}

type TimerType = "increment" | "decrement";

export default function useTimer(type: TimerType, options: TimerOptions) {
  const interval_time = 1000;
  const [counter, setCounter]: any = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    const delta = options.end.valueOf() - options.start.valueOf();
    setCounter(delta < 0 ? 0 : delta);
  }, []);
  useEffect(() => {
    running && counter > 0 && setTimeout(() => updateCounter(), interval_time);
  }, [counter]);
  const reduceCounter = () => {
    setCounter((prev) => prev - interval_time);
  };
  const increaseCounter = () => {
    setCounter((prev) => prev + interval_time);
  };
  const updateCounter = () => {
    type === "decrement" ? reduceCounter() : increaseCounter();
  };
  const startTimer = () => {
    setRunning(true);
  };
  const stopTimer = () => {
    setRunning(false);
  };
  return { counter, startTimer, stopTimer };
}
