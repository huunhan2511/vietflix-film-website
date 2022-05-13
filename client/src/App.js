
import React, { Suspense, lazy } from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
const HomeAdmin = lazy(()=> import("./view/Admin/HomeAdmin"));
const MovieAdmin = lazy(()=>import("./view/Admin/MovieAdmin"));
const TvShowAdmin = lazy(()=>import("./view/Admin/TvShowAdmin"));
const AddTvShowAdmin = lazy(()=>import("./view/Admin/AddTvShow"));
const AddMovieAdmin = lazy(()=>import("./view/Admin/AddMovie"));
const LoginAdminPage = lazy(()=>import("./view/Admin/LoginPage"));
const NotFound = lazy(()=>import("./view/NotFound"));
const MoviePage = lazy(()=>import("./view/MoviePage"));
const TvShowPage = lazy(()=>import("./view/TvShowPage"));
const HomePage = lazy(()=>import("./view/HomePage"));
const WatchPage = lazy(()=>import("./view/WatchPage"));
const SearchPage = lazy(()=>import("./view/SearchPage"));
const ViewAll = lazy(()=>import("./view/ViewAll"));
function App() {
  React.useEffect(() => {
    localStorage.removeItem('filmId')
  }, [])
  
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
                    path="/tat-ca"
                    element={<ViewAll/>}
                  />
                  <Route
                    path="*"
                    element={<NotFound/>}
                  />
                  
                  <Route path="/admin" element={<ProtectedRoutes/>}>
                    <Route path="/admin" element={<HomeAdmin/>}/>
                    <Route path="phim-le" element={<MovieAdmin/>}/>
                    <Route path="them-phim-le" element={< AddMovieAdmin/>} />
                    <Route path='phim-bo' element={<TvShowAdmin />}/>
                    <Route path='them-phim-bo' element={<AddTvShowAdmin />}/>               
                  </Route>

                  <Route
                    path="/login-admin"
                    element={<LoginAdminPage/>}
                  />
              </Routes>
          </Suspense>
    </Router>
  );
}

export default App;
