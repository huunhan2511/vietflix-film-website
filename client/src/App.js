
import React, { Suspense, lazy } from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
const EditSeasonAdmin = lazy(() => import("./view/Admin/EditSeasonAdmin"))
const EditEpisodeAdmin = lazy(() => import("./view/Admin/EditEpisodeAdmin"))
const HomeAdmin = lazy(() => import("./view/Admin/HomeAdmin"));
const AllFilmAdmin = lazy(() => import("./view/Admin/AllFilmAdmin"));
const ViewAllFilmAdmin = lazy(() => import("./view/Admin/ViewAllFilm"));
const ViewFilmByCategoryAdmin = lazy(() => import("./view/Admin/ViewFilmByCategory"));
const ListMovieAdmin = lazy(() => import("./view/Admin/ListMovie"));
const ListTvShowAdmin = lazy(() => import("./view/Admin/ListTvShow"));
const AddTvShowAdmin = lazy(() => import("./view/Admin/AddTvShow"));
const AddCategoryAdmin = lazy(() => import("./view/Admin/AddCategory"));
const ListCategoryAdmin = lazy(() => import("./view/Admin/ListCategory"));
const AddMovieAdmin = lazy(() => import("./view/Admin/AddMovie"));
const LoginAdminPage = lazy(() => import("./view/Admin/LoginPage"));
const NotFound = lazy(() => import("./view/NotFound"));
const MoviePage = lazy(() => import("./view/MoviePage"));
const TvShowPage = lazy(() => import("./view/TvShowPage"));
const HomePage = lazy(() => import("./view/HomePage"));
const WatchPage = lazy(() => import("./view/WatchPage"));
const SearchPage = lazy(() => import("./view/SearchPage"));
const ViewAll = lazy(() => import("./view/ViewAll"));
function App() {
  React.useEffect(() => {
    console.log('3')
    localStorage.removeItem('filmId')
  }, [])

  return (
    <Router>
      <Suspense
        fallback={
          <Loading />
        }
      >
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/phim-le"
            element={<MoviePage />}
          />
          <Route
            path="/tim-kiem"
            element={<SearchPage />}
          />
          <Route
            path="/phim-bo"
            element={<TvShowPage />}
          />
          <Route
            path="/watch/:id"
            element={<WatchPage />}
          />
          <Route
            path="/tat-ca"
            element={<ViewAll />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />

          <Route path="/admin" element={<ProtectedRoutes />}>
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="tat-ca-phim" element={<AllFilmAdmin />} />
            <Route path="tat-ca-phim/:id" element={<ViewAllFilmAdmin />} />
            <Route path="phim-le" element={<ListMovieAdmin />} />
            <Route path="them-phim-le" element={< AddMovieAdmin />} />
            <Route path='phim-bo' element={<ListTvShowAdmin />} />
            <Route path='them-phim-bo' element={<AddTvShowAdmin />} />
            <Route path='them-the-loai' element={<AddCategoryAdmin />} />
            <Route path='the-loai' element={<ListCategoryAdmin />} />
            <Route path='season/:id' element={<EditSeasonAdmin />} />
            <Route path='season/episode/:id' element={<EditEpisodeAdmin />} />
            <Route path='episode/:id' element={<EditEpisodeAdmin />} />
            <Route path='the-loai/:id' element={<ViewFilmByCategoryAdmin />} />
          </Route>

          <Route
            path="/login-admin"
            element={<LoginAdminPage />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
