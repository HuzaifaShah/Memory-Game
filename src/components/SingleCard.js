import React from "react";
import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="Card Front" className="front" />
        <img
          src="/img/cover.png"
          alt="Card Back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
