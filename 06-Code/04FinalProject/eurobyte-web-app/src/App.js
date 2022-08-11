import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//admin
import Login from "./views/Auth-login";
import SignUp from "./views/Auth-signup";
import Home from "./components/MainLayout";
import About from "./views/home/About";
import Admin from "./views/AdminLayout";
//user routes
import User from "./views/users/User-Form";
import UserList from "./views/users/User-List";
//product routes
import Product from "./views/products/Product-Form";
import ProductList from "./views/products/Product-List";
//provider routes
import Provider from "./views/providers/Provider-Form";
import ProviderList from "./views/providers/Provider-List";
//clients routes
import Client from "./views/clients/Client-Form";
import ClientList from "./views/clients/Client-List";
//invoices routes
import InvoiceList from "./views/invoices/Invoices-List"
import Invoice from "./views/invoices/Invoices-Form"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homeAdmin" element={<Admin />} />
        <Route path="/addUser" element={<User />} />
        <Route path="/listUsers" element={<UserList />} />
        <Route path="/addProduct" element={<Product />} />
        <Route path="/listProducts" element={<ProductList />} />
        <Route path="/addProvider" element={<Provider />} />
        <Route path="/listProviders" element={<ProviderList />} />
        <Route path="/listClients" element={<ClientList />} />
        <Route path="/addClient" element={<Client />} />
        <Route path="/listInvoices" element={<InvoiceList />} />
        <Route path="/addInvoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
