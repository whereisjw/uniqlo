import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navi from "./components/Navi";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <Navi />
      <Button>버튼</Button>
      <Routes>
        <Route path="/" element={<div>홈화면</div>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
