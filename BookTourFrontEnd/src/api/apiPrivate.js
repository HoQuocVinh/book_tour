import { toast } from "react-toastify";
import { put } from "redux-saga/effects";
import { authUpdateUser } from "~/sagas/auth/auth-slice";
import { saveToken } from "~/utils/auth";
import axios from "./axios";
const { default: jwt_decode } = require("jwt-decode");

export function handleLogin(payload) {
  axios.post("/auth/login", payload).then((response) => {
    saveToken(response.data.accessToken, response.data.refreshToken);
    handleUpdateUser(response.data.accessToken);
  });
}

export function handleUpdateUser(payload) {
  const { sub: email } = jwt_decode(payload);
  axios
    .get(`user/${email}`, {
      headers: {
        Authorization: `Bearer ${payload}`,
      },
    })
    .then(async (response) => {
      authUpdateUser({
        user: response.data,
        accessToken: payload,
      });
      toast.success("Login success!", { autoClose: 500 });
    });
}
