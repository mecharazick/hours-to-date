import clsx from "clsx";
import styles from "../styles/Home.module.css";

// import { targetDate } from "../config";
// import useTimer from "@hooks/useTimer";

export default function Home() {
  const today = new Date(Date.now());
  // const end = targetDate;  

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <h1 className={clsx(styles["time-counter"], "text-9xl text-gray-300")}>
        00:00:00
      </h1>
    </div>
  );
}
