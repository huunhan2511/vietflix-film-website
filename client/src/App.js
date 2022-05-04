
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import NotFound from "./view/NotFound";
const HomePage = lazy(()=>import("./view/HomePage"));
const WatchPage = lazy(()=>import("./view/WatchPage"));
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
