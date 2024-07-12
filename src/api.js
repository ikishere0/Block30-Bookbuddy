const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

async function fetchAllBooks() {
  try {
    const response = await fetch(`${API_URL}/books`);
    const result = await response.json();
    console.log(result.books);
    return result.books;
  } catch (error) {
    console.error(error);
  }
}

const Base_Url = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export const registerUser = (userData) => {
  const url = `${Base_Url}/users/register`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        console.log(data.token);
        return data.token;
      } else {
        throw new Error(data.message || "failed to register new user");
      }
    });
};

const api = {
  fetchAllBooks,
  registerUser,
};

export default api;
