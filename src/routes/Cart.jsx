import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { changeName, changeCount } from "../store/store";

export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.product.map((data, i) => {
            return (
              <tr key={i}>
                <th>{state.product[i].id}</th>
                <th>{state.product[i].name}</th>
                <th>{state.product[i].count}</th>
                <th>
                  <button
                    onClick={() => {
                      console.log(
                        state.product.findIndex(
                          (a) => a.id === state.product[i].id
                        )
                      );
                      dispatch(changeCount(state.product[i].id));
                    }}
                  >
                    +
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
