import React from "react";
import { Comment } from "./Comment";
import "./commentList.css";
import { useMessageStore } from "./zustand/store";

export const CommentList = () => {
  const comments = useMessageStore((state) => state.comments);

  return (
    <section className="main__comments comments">
      <div className="comments__title">
        <h3>Комментарии</h3>
      </div>
      <ul className="comments__list">
        {comments.map((el, idx) => (
          <Comment
            key={idx}
            name={el.name}
            imageSrc={el.image}
            value={el.value}
          />
        ))}
      </ul>

      <button className="comments__show-more">Show more</button>
    </section>
  );
};
