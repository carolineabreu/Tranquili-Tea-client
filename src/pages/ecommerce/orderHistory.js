import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";

export function OrderHistory() {
  const [history, setHistory] = { history }; //state.userAPI.history;
  const [isAdmin] = { isAdmin }; //state.userAPI.isAdmin;
  const [token] = { token }; //state.token;

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await api.get("/api/payment", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        } else {
          const res = await api.get("/user/history", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        }
      };
      getHistory();
    }
  }, [token, isAdmin, setHistory]);

  return (
    <div className="history-page">
      <h2>History</h2>

      <h4>You have {history.length} order</h4>

      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Date of Purchased</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history.map((items) => (
            <tr key={items._id}>
              <td>{items.paymentID}</td>
              <td>{new Date(items.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/history/${items._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
