import React from "react";
import "./form.css";

export const Form = () => {
  return (
    <div className="main__form form">
      <form id="order_form" action="/order/cpa/" method="POST">
        <input
          type="text"
          id="input-name"
          name="name"
          required="required"
          placeholder="Ваше имя"
        />
        <input
          type="text"
          id="input-phone"
          name="phone"
          required="required"
          placeholder="Ваш телефон"
        />

        <input
          type="submit"
          className="submit-form"
          value="ПОЛУЧИТЬ БЕСПЛАТНО"
        />
      </form>
    </div>
  );
};
