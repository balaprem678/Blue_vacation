import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // HashRouter,
} from "react-router-dom";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

export default function Routeslist() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
