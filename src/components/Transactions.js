import React from "react";
import "./Transactions.css"

const transactions = [
  { id: 1, name: "Ahmed Khan", amount: "₹5,000", date: "01 Mar 2025", status: "Success" },
  { id: 2, name: "Fatima Begum", amount: "₹2,500", date: "28 Feb 2025", status: "Pending" },
  { id: 3, name: "Rahul Sharma", amount: "₹7,000", date: "25 Feb 2025", status: "Success" },
  { id: 4, name: "Zainab Sheikh", amount: "₹3,000", date: "22 Feb 2025", status: "Failed" },
];

const TransactionComponent = () => {
  return (
    <div className="transaction-container">
      <h3 className="transaction-title">Recent Transactions</h3>
      
      <div className="table-responsive">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Donor Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.id} className="transaction-row">
                <td>{index + 1}</td>
                <td>{txn.name}</td>
                <td className="fw-bold">{txn.amount}</td>
                <td>{txn.date}</td>
                <td>
                  <span className={`status-badge ${txn.status.toLowerCase()}`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionComponent;
