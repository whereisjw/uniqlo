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
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const category = ["women", "men", "kids", "baby"];
  const [card, setCard] = useState([]);
  let displayItems = () => {
    axios.get(`/clothes/men.json`).then((res) => {
      console.log(res.data.men);
      setCard(res.data.men);
    });
  };

  useEffect(() => {
    displayItems();
  }, []);

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);
  return (
    <>
      <Navi category={category} authenticate={authenticate} />

      <Routes>
        <Route
          path="/"
          element={<All card={card} category={category} />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<Detail card={card} />}></Route>
      </Routes>
    </>
  );
}

export default App;
