import axios from "axios";

const API_KEY = "AIzaSyC7AANGuTjdePfBqXg9T5VahotcP1y7ank";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}