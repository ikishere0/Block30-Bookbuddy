import React from "react";
import Popup from "reactjs-popup";

function BookPopup({ book, showDetails, onClose }) {
  const { title, author, description, coverimage } = book;

  return (
    <>
      {showDetails && (
        <div className="popup-container">
          <div className="popup" style={{ visibility: "visible" }}>
            <div className="popup-content">
              <h2>{title}</h2>
              <p>Author: {author}</p>
              <p>Description: {description}</p>
              <img src={coverimage} alt={title} />
              <span id="close-popup" onClick={onClose}>
                X
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookPopup;
