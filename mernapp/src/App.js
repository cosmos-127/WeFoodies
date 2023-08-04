/* eslint-disable no-unused-vars */
import "./App.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Error from "./screens/Error";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createuser" element={< SignUp/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
