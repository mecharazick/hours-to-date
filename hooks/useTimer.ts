import { useState, useEffect } from "react";

interface TimerOptions {
  start: Date;
  end: Date;
}

enum TimerType {
  increment,
  decrement,
}

export default function useTimer(type: TimerType, options: TimerOptions) {
  const [counter, setCounter] = useState();
  const [run, setRun] = useState();
  const stopTimer = () => {};
}
