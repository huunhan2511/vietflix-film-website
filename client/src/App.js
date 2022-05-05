
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
const NotFound = lazy(()=>import("./view/NotFound"));
const MoviePage = lazy(()=>import("./view/MoviePage"));
const TvShowPage = lazy(()=>import("./view/TvShowPage"));
const HomePage = lazy(()=>import("./view/HomePage"));
const WatchPage = lazy(()=>import("./view/WatchPage"));
const SearchPage = lazy(()=>import("./view/SearchPage"));
function App() {
  return (
    <Router>
        <Suspense
              fallback={
                  <Loading/>
              }
            >
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<HomePage/>}
                />
                <Route
                  path="/phim-le"
                  element={<MoviePage/>}
                />
                <Route
                  path="/tim-kiem"
                  element={<SearchPage/>}
                />
                <Route
                  path="/phim-bo"
                  element={<TvShowPage/>}
                />
                <Route
                  path="/watch/:id"
                  element={<WatchPage/>}
                />
                <Route
                  path="*"
                  element={<NotFound/>}
                />

              </Routes>
          </Suspense>
    </Router>
  );
}

export default App;
