import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePoint from "./pages/CreatePoint";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CreatePoint />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
