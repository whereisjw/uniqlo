import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navi from "./components/Navi";

function App() {
  return (
    <>
      <Navi />
      <Button>버튼</Button>
      <Routes>
        <Route path="/" element={<div>홈화면</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
