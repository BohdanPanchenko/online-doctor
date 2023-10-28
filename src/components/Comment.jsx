import React from "react";
import "./comment.css";

export const Comment = ({ name, imageSrc, value }) => {
  return (
    <li className="comments__list-item item-comment">
      <div className="item-comment__head">
        <div className="item-comment__image">
          <img
            src={require(`../images/${imageSrc}`)}
            alt="avatar"
            width={50}
            height={50}
          />
        </div>
        <h3 className="item-comment__name">{name}</h3>
      </div>
      <div className="item-comment__body">
        <p className="item-comment__text">
          {value}
          <br />
          <br />
        </p>
      </div>
    </li>
  );
};
