import { React, useContext, useState, useEffect } from "react";
import "./Checkout.css";
import ProductCheckout from "../../components/Product/ProductCheckout";
import basketContext from "../../contexts/basketContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
	const { basketItems } = useContext(basketContext);
	const [totalPrice, setTotalPrice] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		let total = 0;
		basketItems?.forEach((item) => {
			total = total + item.price;
		});
		setTotalPrice(total);
	}, [basketItems]);

	return (
		<div className="checkout">
			<div className="checkout-left">
				<img className="checkout-banner" src="../../images/checkoutBanner.jpg" alt="" />
				<div className="checkout-list">
					<h2>Your Shopping Basket</h2>
					{basketItems?.map((item, i) => (
						<ProductCheckout {...item} key={i} />
					))}
				</div>
			</div>
			<div className="checkout-right">
				<div className="checkout-subtotal">
					<p>
						Subtotal {basketItems?.length} items: <span className="checkout-subtotal-price">${totalPrice}</span>
					</p>
					<div className="checkout-checkbox">
						<input type="checkbox" id="order-gift" />
						<label htmlFor="order-gift">This order contains a gift</label>
					</div>
					<button disabled={!basketItems.length} onClick={() => navigate("/payment")}>
						Proceed to Checkout
					</button>
				</div>
				<div className="checkout-ad">
					<img src="../../images/checkoutBanner2.jpg" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Checkout;
