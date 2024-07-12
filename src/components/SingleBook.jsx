import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookPopup from "./BookPopup";

function SingleBook({ book }) {
  const [showDetails, setShowDetails] = useState(false);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const goToAccounts = () => {
    navigate("/account");
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="single-book">
      <h2>{book.title}</h2>
      <img src={book.coverimage} alt={book.title} className="book-image" />
      <button onClick={handleToggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <BookPopup
        book={book}
        showDetails={showDetails}
        onClose={handleToggleDetails}
      />
      {showDetails && (
        <button
          id="checkout-button"
          style={{ visibility: token ? "visible" : "hidden" }}
          onClick={goToAccounts}
        >
          Go To Account Checkout
        </button>
      )}
    </div>
  );
}

export default SingleBook;
