import axios, { Axios } from "axios";

const API_KEY = "AIzaSyC64wuZ7gQ1mRt4zh1MHh-Bpj7li4WLW-I";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}