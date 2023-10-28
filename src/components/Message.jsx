import React, { useEffect, useRef } from "react";
import "./message.css";
import { useMessageStore } from "./zustand/store";

export const Message = ({ message, setAmountToShow }) => {
  const timerId = useRef();
  const [messageValue, setMessage] = React.useState("");
  const [messageLength, setMessageLength] = React.useState(0);

  const increaseCurrentMessageIdx = useMessageStore(
    (state) => state.increaseCurrentMessageIdx
  );

  function printMessage() {
    if (messageLength >= message.value.length) {
      setAmountToShow((prev) => prev + 1);
      return () => {
        clearTimeout(timerId);
      };
    }
    timerId.current = setTimeout(() => {
      setMessage((prev) => prev + message.value[messageLength]);
      setMessageLength((prev) => prev + 1);
    }, 5);
  }
  React.useEffect(() => {
    printMessage();
  }, [messageLength]);
  return (
    <li className="chat__message-item">
      {message.isImage ? (
        <img
          src={require("../images/" + message.value)}
          style={{ maxWidth: message.maxWidth }}
          alt="healthcare"
        />
      ) : (
        <p>{messageValue}</p>
      )}
    </li>
  );
};
