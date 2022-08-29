import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";

function Orders() {
	return (
		<div className="orders">
			<div className="orders-container">
				<h1>your have purchased your order successfully</h1>
				<Link to={"/"}>back to home</Link>
			</div>
		</div>
	);
}

export default Orders;
