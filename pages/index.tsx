import clsx from "clsx";
import styles from "../styles/Home.module.css";

import { targetDate } from "../config/index";
import useTimer from "../hooks/useTimer";
import { useEffect } from "react";

const addZero = (num) => num < 10 ? "0" + num : num;

export default function Home() {
  const today = new Date(Date.now());
  const end = targetDate;
  const { counter, startTimer } = useTimer("decrement", {
    start: today,
    end: end,
  });
  useEffect(() => {
    startTimer();
  }, []);
  const seconds = Math.floor((counter / 1000) % 60);
  const minutes = Math.floor((counter / (60 * 1000)) % 60);
  const hours = Math.floor(counter / (3600 * 1000));

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <h1 className={clsx(styles["time-counter"], "text-9xl text-gray-300")}>
        {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
      </h1>
    </div>
  );
}
