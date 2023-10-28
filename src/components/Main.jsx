import React from "react";
import "./main.css";
import { MessageList } from "./MessageList";
import { CommentList } from "./CommentList";
import { Form } from "./Form";

export const Main = () => {
  return (
    <div className="main">
      <header className="main__header header">
        <div className="header__doctor">
          <div className="header__image">
            <img
              src={require("../images/vrach.png")}
              width={46}
              height={46}
              alt="doctor"
            />
          </div>
          <div className="header__info">
            <h2 className="header__name">Ольга Викторовна</h2>
            <p className="header__description">Бесплатная консультация</p>
          </div>
        </div>
        <div className="header__logo">
          <img src={require("../images/header-logo-b0e.arb.png")} width={55} />
        </div>
        <div className="header__status">
          <span>Онлайн</span>
        </div>
      </header>
      <main className="main__content">
        <div className="main__chat chat">
          <div className="chat__date">
            <p>Сегодня</p>
          </div>

          <MessageList />
        </div>
        <Form />
      </main>

      <CommentList />
    </div>
  );
};
