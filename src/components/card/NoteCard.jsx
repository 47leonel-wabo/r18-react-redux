import React, { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import style from "./card.module.css";

const NoteCard = ({
  title,
  subTitle,
  content,
  clickActionHandler,
  deleteActionHandler,
}) => {
  const [isMouseEnterCard, setMouseEnterCard] = useState(false);
  const [isMouseEnterDelete, setMouseEnterDelete] = useState(false);

  function handleDelete(event) {
    deleteActionHandler();
    event.stopPropagation();
  }
  return (
    <div
      className={`card ${style.container}`}
      style={{
        width: "18rem",
        height: "15rem",
        boxShadow: isMouseEnterCard ? "2px 4px 4px rgba(0,0,0,.25)" : "none",
      }}
      onClick={clickActionHandler}
      onMouseEnter={() => setMouseEnterCard(true)}
      onMouseLeave={() => setMouseEnterCard(false)}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">
            {title.length > 25 ? `${title.slice(0, 24)}...` : title}
          </h5>
          {isMouseEnterCard && (
            <Trash
              size={24}
              onClick={handleDelete}
              color={isMouseEnterDelete ? "tomato" : "lightgrey"}
              onMouseEnter={() => setMouseEnterDelete(true)}
              onMouseLeave={() => setMouseEnterDelete(false)}
            />
          )}
        </div>
        <h6 className={`card-subtitle mb-3 text-muted ${style.sub}`}>
          {subTitle}
        </h6>
        <p className={`card-text ${style.content}`}>{content}</p>
      </div>
    </div>
  );
};

export default NoteCard;
