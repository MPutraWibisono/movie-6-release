import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import DetailsMovie from "./Pages/DetailMovie";
import Footer from "./Components/Footer";
import PopularMovies from "./Pages/PopularMovies";
import SearchMovies from "./Pages/SearchMovie";
import TrailerMovie from "./Pages/TrailerMovie";
import NoAccessToken from "./Components/NoAccessToken";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyProfile from "./Pages/MyProfile";
import Protected from "./Components/Protected";
import Id from "./Pages/Id";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="dark:bg-slate-800">
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/id" element={<Id />} />
              <Route
                path="/"
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
              <Route
                path="/details/:movieId"
                element={
                  <Protected>
                    <DetailsMovie />
                  </Protected>
                }
              />
              <Route
                path="/popular-movies"
                element={
                  <Protected>
                    <PopularMovies />
                  </Protected>
                }
              />
              <Route
                path="/search"
                element={
                  <Protected>
                    <SearchMovies />
                  </Protected>
                }
              />
              <Route
                path="/trailer/:movieId"
                element={
                  <Protected>
                    <TrailerMovie />
                  </Protected>
                }
              />
              <Route
                path="/myprofile"
                element={
                  <Protected>
                    <MyProfile />
                  </Protected>
                }
              />

              {/* Authentication */}
              <Route
                path="/login"
                element={
                  <NoAccessToken>
                    <Login />
                  </NoAccessToken>
                }
              />
              <Route
                path="/register"
                element={
                  <NoAccessToken>
                    <Register />
                  </NoAccessToken>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </div>
    </Provider>
  );
}

export default App;
