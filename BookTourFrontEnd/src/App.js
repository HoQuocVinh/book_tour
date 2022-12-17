import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { authRefreshToken, authUpdateUser } from "./sagas/auth/auth-slice";
import { getToken, logOut } from "./utils/auth";

const LayoutDefault = lazy(() => import("~/layouts/LayoutDefault"));
const LayoutSearch = lazy(() => import("~/layouts/LayoutSearch"));
const LayoutSetting = lazy(() => import("~/layouts/LayoutSetting"));

const HomePage = lazy(() => import("~/pages/HomePage"));
const FlightPage = lazy(() => import("~/pages/FlightPage"));
const SignInPage = lazy(() => import("~/pages/SignInPage"));
const SignUpPage = lazy(() => import("~/pages/SignUpPage"));
const NotFoundPage = lazy(() => import("~/pages/NotFoundPage"));
const ProfilePage = lazy(() => import("~/pages/ProfilePage"));

const SearchPage = lazy(() => import("~/pages/SearchPage"));
const TourDetailPage = lazy(() => import("~/pages/TourDetailPage"));
const TourPage = lazy(() => import("~/pages/TourPage"));
const ActivePage = lazy(() => import("~/pages/ActivePage"));
const TourBooking = lazy(() => import("~/pages/TourBooking"));
const ManageBookingPage = lazy(() => import("~/pages/ManageBookingPage"));

function App() {
  const { user } = useSelector((state) => state.auth);
  console.log("TCL: App -> user", user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="active" element={<ActivePage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route element={<LayoutSearch />}>
          <Route path="search-page" element={<SearchPage />} />
          <Route path="detail-page" element={<TourDetailPage />} />
          <Route path="booking" element={<TourBooking />} />
        </Route>
        <Route element={<LayoutSetting />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="manage-booking" element={<ManageBookingPage />} />
        </Route>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<HomePage />} />
          <Route path="flight" element={<FlightPage />} />
          <Route path="/tour" element={<TourPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
