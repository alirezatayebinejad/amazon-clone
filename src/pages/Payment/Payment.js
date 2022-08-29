import React from "react";
import basketContext from "../../contexts/basketContext";
import { useContext } from "react";
import ProductCheckout from "../../components/Product/ProductCheckout";
import "./Payment.css";
function Payment() {
	const { basketItems } = useContext(basketContext);

	return (
		<div className="payment">
			<h1 className="payment-title">Checkout ( {basketItems?.length} items )</h1>
			<div className="payment-container">
				<div className="payment-address payment-divs">
					<h3 className="payment-titles">Delivery Address</h3>
					<div className="payment-infos payment-address-info">
						<p>user gmail</p>
						<address>
							123 React Lane,
							<br /> Los Angeles, California
						</address>
					</div>
				</div>
				<div className="payment-items payment-divs">
					<h3 className="payment-titles">Review items and delivery</h3>
					<div className="payment-infos payment-items-info">
						{basketItems?.map((item, i) => (
							<ProductCheckout {...item} key={i} />
						))}
					</div>
				</div>
				<div className="payment-methods payment-divs">
					<h3 className="payment-titles ">Payment Methods</h3>
					<div className="payment-infos payment-methods-info">payment info</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
