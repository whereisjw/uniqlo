import React from "react";
import styles from "./all.module.css";
import { Button, Container } from "react-bootstrap";
import Card from "../components/Card";
const All = ({ category, card }) => {
  return (
    <div>
      <div className={styles.main_bg}></div>
      <Container>
        <section className={styles.main_section}>
          <p>BEST</p>
          <div className={styles.btn_box}>
            {category.map((v) => (
              <Button className={styles.btn} type="button" variant="secondary">
                {v}
              </Button>
            ))}
            <Card card={card} />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default All;
