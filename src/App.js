import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateUser from "./components/User/CreateUser";
import UpdateUser from "./components/User/UpdateUser";
import ViewUser from "./components/User/ViewUser";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new-user" element={<CreateUser />} />
        <Route exact path="/update-user/:id" element={<UpdateUser />} />
        <Route exact path="/user/:id" element={<ViewUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
