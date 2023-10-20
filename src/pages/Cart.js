import React from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store.js";

const Cart = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {state.bucket.map((data, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    style={{}}
                    onClick={() => {
                      dispatch(addCount(state.bucket[idx].id));
                    }}>
                    추가
                  </button>
                  <button style={{ margin: "0 10px" }}>제거</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Cart;
