import React from "react";
import Home from "./Website/Pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import About from "./Website/Pages/About";
import Propertylist from "./Website/Pages/Propertylist";
import Propertytype from "./Website/Pages/Propertytype";
import Propertyagent from "./Website/Pages/Propertyagent";
import Testimonial from "./Website/Pages/Testimonial";
import Contact from "./Website/Pages/Contact";
import Notfound from "./Website/Pages/Notfound";
import Dashbaord from "./Admin/Apages/Dashbaord";
import PropertyManage from "./Admin/Apages/PropertyManage";
import Propertytypemanage from "./Admin/Apages/Propertytypemanage";
import Propertyagentmanage from "./Admin/Apages/Propertyagentmanage";
import AddPropertyList from "./Admin/Apages/AddPropertyList";
import AddPropertytype from "./Admin/Apages/AddPropertytype";
import Alogin from "./Admin/Apages/Alogin";
import { ToastContainer, toast } from "react-toastify";
import Login from "./Website/Pages/Login";
import Register from "./Website/Pages/Register";
import UserList from "./Admin/Apages/UserList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/propertylist" element={<Propertylist />} />
          <Route path="/propertytype" element={<Propertytype />} />
          <Route path="/propertyagent" element={<Propertyagent />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Notfound */}
          <Route path="*" element={<Notfound />} />

          {/* admin routes */}
          <Route path="/dashboard" element={<Dashbaord />} />
          <Route path="/propertymanage" element={<PropertyManage />} />
          <Route path="/addpropertylist" element={<AddPropertyList />} />
          <Route path="/propertytypemanage" element={<Propertytypemanage />} />
          <Route path="/addpropertytype" element={<AddPropertytype />} />
          <Route
            path="/propertyagentmanage"
            element={<Propertyagentmanage />}
          />
          <Route path="/addpropertytype" element={<AddPropertytype />} />
          <Route path="/alogin" element={<Alogin />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
