import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiList from "./views/api_public/Api-List.js";

const App =() => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiList />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
