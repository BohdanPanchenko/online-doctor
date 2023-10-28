import React from "react";
import { Message } from "./Message";
import "./messageList.css";
import { useMessageStore } from "./zustand/store";

export const MessageList = () => {
  const messages = useMessageStore((state) => state.messages);
  const printNext = useMessageStore((state) => state.printNext);
  const setPrintNext = useMessageStore((state) => state.setPrintNext);
  const [messagesToShow, setMessagesToShow] = React.useState([messages[0]]);

  const [amountToShow, setAmountToShow] = React.useState(0);
  React.useEffect(() => {
    console.log("function called");
    if (amountToShow >= messages.length) {
      return () => {};
    }
    if (amountToShow > 0)
      setMessagesToShow((prev) => [...prev, messages[amountToShow]]);
  }, [amountToShow]);

  return (
    <div className="chat__messages">
      <ul className="chat__message-list">
        {messagesToShow.map((el, idx) => (
          <Message key={idx} message={el} setAmountToShow={setAmountToShow} />
        ))}
      </ul>
      <button className="main__btn btn-up">
        <span></span>
      </button>
    </div>
  );
};
