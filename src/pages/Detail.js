import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";
const Detail = ({ card }) => {
  const { id } = useParams();
  console.log(id);
  let findItem = card.find((v, i) => v.id == id);

  return (
    <Container className={styles.container}>
      <Row>
        <Col md="6">
          <figure>
            <img src={findItem.img} alt="" />
          </figure>
        </Col>
        <Col md="6">
          <div>
            <p>{findItem.title}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
