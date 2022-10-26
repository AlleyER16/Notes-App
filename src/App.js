import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Preloader from "./components/Preloader";

import "./App.css";

const Main = lazy(() => import("./containers/Main"));
const NewNote = lazy(() => import("./containers/NewNote"));
const Favourites = lazy(() => import("./containers/Favourites"));
const Deleted = lazy(() => import("./containers/Deleted"));
const Settings = lazy(() => import("./containers/Settings"));

function App() {
  return (
    <div className="Layout">
      <BrowserRouter>
        <Sidebar />
        <section className="Main">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Preloader />}>
                  <Main />
                </Suspense>
              }
            />
            <Route
              path="/new-note"
              element={
                <Suspense fallback={<Preloader />}>
                  <NewNote />
                </Suspense>
              }
            />
            <Route
              path="/favourites"
              element={
                <Suspense fallback={<Preloader />}>
                  <Favourites />
                </Suspense>
              }
            />
            <Route
              path="/deleted"
              element={
                <Suspense fallback={<Preloader />}>
                  <Deleted />
                </Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <Suspense fallback={<Preloader />}>
                  <Settings />
                </Suspense>
              }
            />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
