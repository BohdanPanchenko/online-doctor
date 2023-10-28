import React from "react";
import "./sideBar.css";

export const SideBar = () => {
  return (
    <aside className="side-bar">
      <section className="side-bar__about about">
        <div className="about__image">
          <img
            src={require("../images/vrach.png")}
            alt="doctor"
            width={180}
            height={180}
          />
        </div>
        <h2 className="about__name">Ольга Викторовна</h2>
        <div className="about__info">
          <ul className="about__list">
            <li className="about__list-item achievement">
              <div className="achievement__image">
                <img
                  src={require("../images/about-icon1-09f.arb.png")}
                  alt="achievement"
                />
              </div>
              <p className="achievement__description">
                Ведущий кардиолог Украины
              </p>
            </li>
            <li className="about__list-item achievement">
              <div className="achievement__image">
                <img
                  src={require("../images/about-icon2-1a4.arb.png")}
                  alt="achievement"
                />
              </div>
              <p className="achievement__description">Врач высшей категории</p>
            </li>
            <li className="about__list-item achievement">
              <div className="achievement__image">
                <img
                  src={require("../images/about-icon3-9ae.arb.png")}
                  alt="achievement"
                />
              </div>
              <p className="achievement__description">
                Кандидат медицинских наук
              </p>
            </li>
            <li className="about__list-item achievement">
              <div className="achievement__image">
                <img
                  src={require("../images/about-icon3-9ae.arb.png")}
                  alt="achievement"
                />
              </div>
              <p className="achievement__description">Стаж работы 18 лет</p>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};
