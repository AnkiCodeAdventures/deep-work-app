import { useState } from "react";
import "./App.css";
import { Button } from "@mantine/core";
import RenderTime from "./components/Timer/RenderTime";

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

  console.log(time);

  return (
    <>
      <RenderTime time="00:00:00:00" />
      <Button
        variant="filled"
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
    </>
  );
}

export default App;
