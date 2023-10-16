import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./navi.module.css";
import { FaSearch, FaRegUser, FaShoppingCart } from "react-icons/fa";
const Navi = () => {
  return (
    <header>
      {" "}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div className={styles.gnb}>
            <div className={styles.menu_area}>
              <Navbar.Brand href="/">
                <img
                  width={40}
                  height={40}
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/all">All</Nav.Link>
                <Nav.Link href="/women">women</Nav.Link>
                <Nav.Link href="/men">men</Nav.Link>
                <Nav.Link href="/kids">Kids</Nav.Link>
                <Nav.Link href="/Baby">Baby</Nav.Link>
              </Nav>
            </div>
            <div className={styles.nav_icons}>
              <a>
                <FaSearch />
                <span>검색</span>
              </a>
              <a>
                <FaRegUser />
                <span>로그인</span>
              </a>
              <a>
                <FaShoppingCart />
                <span>장바구니</span>
              </a>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navi;
