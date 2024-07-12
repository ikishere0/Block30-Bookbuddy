import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAccount } from "../slices/accountSlice";

function Account() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }
        console.log("Token:", token);
        const response = await fetch(`${API_URL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          dispatch(setAccount(data)); // Redux 상태에 계정 정보 저장
        } else {
          throw new Error("Failed to fetch account data: " + data.message);
        }
        console.log("Response Data:", data);
      } catch (error) {
        setError(error.message);
        console.error("Fetch Error:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchAccount();
  }, [dispatch, navigate]);

  return (
    <div className="account-container">
      <div className="account">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {account && (
          <div>
            <h2>Account Details</h2>
            <p>ID: {account.ID}</p>
            <p>Username: {account.username}</p>
            <p>Email: {account.email}</p>
            {account.books && account.books.length > 0 ? (
              <div>
                <h3>Books</h3>
                <ul>
                  {account.books.map((book) => (
                    <li key={book.ID}>{book.title}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No books found, add some now!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
