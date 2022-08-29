import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useContext } from "react";
import basketContext from "../../contexts/basketContext";

function Product({ id, name, price, imgSrc, rating }) {
	const { addToBasket } = useContext(basketContext);

	return (
		<div className="product">
			<h5 className="product-name">{name}</h5>
			<p className="product-price">
				<span>$</span>
				{price}
			</p>
			<div className="product-stars">
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
			<img className="product-image" src={imgSrc} alt="" />

			<button className="product-button" onClick={() => addToBasket(id, name, price, imgSrc, rating)}>
				add to basket
			</button>
		</div>
	);
}

export default Product;
