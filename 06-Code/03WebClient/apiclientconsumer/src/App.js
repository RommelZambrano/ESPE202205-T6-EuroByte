import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiList from "./views/api_public/Api-List.js";
import Information_list from "./views/api_information/Information_List"
const App =() => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiList />} />
        <Route path="/informationClient" element={<Information_list />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
