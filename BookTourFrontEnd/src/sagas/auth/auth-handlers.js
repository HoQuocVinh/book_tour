import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "~/utils/auth";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-requests";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 200) {
      toast.warning(response.data.message, { autoClose: 1000 });
    }
    if (response.status === 201) {
      toast.success(response.data.message, { autoClose: 1000 });
      document.location = "/sign-in";
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
      toast.success("Login success!", {
        autoClose: 500,
      });
    }
  } catch (error) {
    const response = error.response.data;
    if (!response.success) {
      toast.error(response.message);
      return;
    }
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {}
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, {
        payload: response.data.accessToken,
      });
    } else {
      yield handleAuthLogOut();
    }
  } catch (error) {}
}

function* handleAuthLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  toast.success("Logout success!", { autoClose: 500 });
  logOut();
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuthLogOut,
};
