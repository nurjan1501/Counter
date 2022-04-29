import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import Ingredients from "../components/Ingredients/Ingredients";
import Receipts from "../components/Receipts/Receipts";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/ingr" element={<Ingredients />} />
        <Route path="/rec" element={<Receipts />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
