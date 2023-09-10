import s from "../style/app.module.scss";

import { useState } from "react";
import {
  Home,
  Error,
  Authorization,
  Registration,
  About,
  Basketpage,
} from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";


function App() {


  return (
    <div className={s.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authorization" element={<Authorization  />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/basketpage" element={<Basketpage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
