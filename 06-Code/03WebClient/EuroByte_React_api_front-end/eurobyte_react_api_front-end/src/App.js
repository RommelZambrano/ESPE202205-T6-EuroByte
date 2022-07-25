import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//admin
import Login from "./components/Auth-login";
import Admin from "./views/AdminLayout";
import SignUp from "./views/Auth-signup";
//user routes
import User from "./views/users/User-Form";
import UserList from "./views/users/User-List";
//product routes
import ProductList from "./views/products/Product-List";
//provider routes
import ProviderList from "./views/providers/Provider-List";
//journals routes
import ApiList from "./views/api_public/Api-List";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homeAdmin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addUser" element={<User />} />
        <Route path="/listUsers" element={<UserList />} />
        <Route path="/listProducts" element={<ProductList />} />
        <Route path="/listProviders" element={<ProviderList />} />
        <Route path="/listDocs" element={<ApiList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
