import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navi from "./components/Navi";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import All from "./pages/All";
import axios from "axios";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const category = ["all", "women", "men", "kids", "baby"];
  axios.get(`/clothes/men.json`).then((res) => {
    console.log(res.data);
  });
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);
  return (
    <>
      <Navi category={category} authenticate={authenticate} />

      <Routes>
        <Route path="/" element={<All category={category} />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}></Route>
      </Routes>
    </>
  );
}

export default App;
