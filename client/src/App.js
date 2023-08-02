
import React, { Suspense, lazy } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
const GenrePage = lazy(()=> import("./view/Admin/GenreAdmin"));
const AddGenrePage = lazy(()=> import("./view/Admin/AddGenrePage"));
const EditGenrePage = lazy(()=> import("./view/Admin/EditGenrePage"));
const AddMoviePage = lazy(()=> import("./view/Admin/AddMoviePage"));
const EditMoviePage = lazy(()=> import("./view/Admin/EditMoviePage"));
const TvShowAdmin = lazy(()=> import("./view/Admin/TvShowAdmin"));
const MovieAdmin = lazy(()=> import("./view/Admin/MovieAdmin"));
const HomeAdmin = lazy(()=>import('./view/Admin/HomeAdmin'))
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

          <Route path="admin" element={<ProtectedRoutes />}>
            <Route
              path="/admin"
              exact
              element={<HomeAdmin />}
            />  
            <Route
              path="/admin/phim-le"
              element={<MovieAdmin/>}
            />
            <Route
              path="/admin/phim-bo"
              element={<TvShowAdmin/>}
            />
            <Route
              path="/admin/them-phim-le"
              element={<AddMoviePage/>}
            />
            <Route
              path="/admin/sua-phim-le"
              element={<EditMoviePage/>}
            />
            <Route 
              path="/admin/the-loai"
              element= {<GenrePage/>}
            />
            <Route 
              path="/admin/them-the-loai"
              element= {<AddGenrePage/>}
            />
            <Route 
              path="/admin/sua-the-loai"
              element= {<EditGenrePage/>}
            />
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
