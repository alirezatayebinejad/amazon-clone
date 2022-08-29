import { useState, createContext, useEffect } from "react";

const basketContext = createContext();

export function BasketProvider({ children }) {
	const [basketItems, setBasketItems] = useState(() => {
		if (!JSON.parse(localStorage.getItem("basket"))) {
			localStorage.setItem("basket", JSON.stringify([]));
		}
		return JSON.parse(localStorage.getItem("basket"));
	});

	const addToBasket = (Id, Name, Price, ImgSrc, Rating) => {
		setBasketItems((prevState) => {
			localStorage.setItem("basket", JSON.stringify([...prevState, { id: Id, name: Name, price: Price, imgSrc: ImgSrc, rating: Rating }]));
			return [...prevState, { id: Id, name: Name, price: Price, imgSrc: ImgSrc, rating: Rating }];
		});
	};
	const removeFromBasket = (d, Id) => {
		setBasketItems(() => {
			let index = basketItems?.findIndex((item) => item.id === Id);
			let newItems = [...basketItems];
			newItems.splice(index, 1);
			localStorage.setItem("basket", JSON.stringify(newItems));
			return newItems;
		});
	};
	return <basketContext.Provider value={{ basketItems, addToBasket, removeFromBasket }}>{children}</basketContext.Provider>;
}

export default basketContext;
