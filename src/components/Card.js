import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";
const Card = ({ card }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        {" "}
        <Row>
          {card.map((v, i) => {
            return (
              <Col
                onClick={() => {
                  navigate(`/product/${v.id}`);
                }}
                xs="12"
                sm="6"
                md="4"
                lg="3">
                <div className={styles.card_box}>
                  {" "}
                  <figure>
                    <img src={v.img} alt="" />
                  </figure>
                  <figcaption>
                    <h4 className={styles.title}>{v.title}</h4>
                    <p>
                      <span className={styles.sale}>{v.sale}</span>
                      <span className={styles.price}>{v.cost}원</span>
                      <span className={styles.fake_price}>{v.price}원</span>
                    </p>
                  </figcaption>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Card;
