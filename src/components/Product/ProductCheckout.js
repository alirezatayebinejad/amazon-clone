import React from "react";
import "./ProductCheckout.css";
import StarIcon from "@mui/icons-material/Star";
import { useContext } from "react";
import basketContext from "../../contexts/basketContext";

function ProductCheckout({ id, name, price, imgSrc, rating }) {
	const { removeFromBasket } = useContext(basketContext);

	return (
		<div className="product-checkout">
			<img className="product-checkout-image" src={imgSrc} alt="" />

			<div className="product-checkout-info">
				<div>
					<h5 className="product-checkout-name">{name}</h5>
					<div className="product-checkout-stars">
						<p>
							{Array(rating)
								.fill()
								.map((_, i) => (
									<span key={i}>
										<StarIcon />
									</span>
								))}
						</p>
					</div>
					<p className="product-checkout-price">
						<span>$</span>
						{price}
					</p>
				</div>

				<button className="product-checkout-button" onClick={() => removeFromBasket(id)}>
					Remove from basket
				</button>
			</div>
		</div>
	);
}

export default ProductCheckout;
