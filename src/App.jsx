import { useState } from "react";
import "./App.css";
import { Button } from "@mantine/core";
import RenderTime from "./components/Timer/RenderTime";
import styles from "./app.module.css";
import NavBar from "./components/Timer/NavBar/NavBar";

const STATUS = {
  RUNNING: "RUNNING",
  PAUSED: "PAUSED",
  STOPPED: "STOPPED",
  IDLE: "IDLE",
};

let intervalId;

function App() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(STATUS.IDLE);
  let buttonText;

  if (status === STATUS.IDLE) {
    buttonText = "START";
  } else if (status === STATUS.RUNNING) {
    buttonText = "PAUSE";
  } else if (status === STATUS.PAUSED) {
    buttonText = "RESUME";
  }

  function handleStart() {
    setStatus(STATUS.RUNNING);
    intervalId = setInterval(() => {
      setTime((prevValue) => {
        return ++prevValue;
      });
    }, 10);
  }

  function handlePause() {
    setStatus(STATUS.PAUSED);
    clearInterval(intervalId);
  }

  function handleReset() {
    setTime(0);
    setStatus(STATUS.IDLE);
    clearInterval(intervalId);
  }

  let hours = Math.floor(time / 360000);
  let minutes = Math.floor((time % 36000) / 6000);
  let seconds = Math.floor((time % 6000) / 100);
  let milliseconds = time % 100;

  // Format each component to 2 digits
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  return (
    <>
      <div className={styles.appContainer}>
        <NavBar />
        <div style={{ position: "relative" }}>
          <RenderTime
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            milliseconds={milliseconds}
          />

          <Button
            aria-label="start"
            variant="filled"
            className={`${styles.timerButton} ${styles.start}`}
            onClick={() => {
              status === STATUS.IDLE
                ? handleStart()
                : status === STATUS.RUNNING
                ? handlePause()
                : status === STATUS.PAUSED
                ? handleStart()
                : null;
            }}
          >
            {buttonText}
          </Button>
          <Button
            aria-label="reset"
            className={`${styles.timerButton} ${styles.reset}`}
            onClick={() => {
              handleReset();
            }}
          >
            RESET
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
