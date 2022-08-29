import React from "react";
import "./Home.css";
import Product from "../../components/Product/Product";

function Home() {
	const productInfos = [
		{
			id: "254544",
			name: "Legendary storyteller Stephen King goes into the deepest well of his imagination",
			price: 20.99,
			imgSrc: "../../images/product1.jpg",
			rating: 5,
		},
		{
			id: "598562",
			name: "SAMSUNG 15.6” Galaxy Book2 Pro Laptop Computer, i5 / 8GB / 512GB, 12th Gen Intel Core Processor",
			price: 949.99,
			imgSrc: "../../images/product2.jpg",
			rating: 5,
		},
		{
			id: "365952",
			name: "Apple iPhone 12 Mini (64GB, Blue) [Locked] + Carrier Subscription",
			price: 729.0,
			imgSrc: "../../images/product3.jpg",
			rating: 5,
		},
		{
			id: "158452",
			name: "SAMSUNG Galaxy Watch 5 44mm LTE Smartwatch w/Body, Health, Fitness and Sleep Tracker, Improved Battery",
			price: 359.0,
			imgSrc: "../../images/product4.jpg",
			rating: 5,
		},
		{
			id: "156548",
			name: "EDUPLINK Portable Bluetooth Speaker Waterproof IPX7 Wireless Speaker with 20W Louder Speakers",
			price: 39.99,
			imgSrc: "../../images/product5.jpg",
			rating: 5,
		},
		{
			id: "125493",
			name: 'AOC Agon PRO AG254FG 25" Tournament Gaming Monitor, FHD 1920x1080, 360Hz, 1ms, DisplayHDR 400, G-SYNC + Reflex, Console Ready, Light FX, Low Input Lag, Height-Adjustable',
			price: 1000.99,
			imgSrc: "../../images/product6.jpg",
			rating: 5,
		},
	];
	return (
		<div className="home">
			<div className="home-container">
				<div className="home-container">
					<img className="home-image" src="../../images/banner1.jpg" alt="" />
				</div>
				<div className="home-row">
					<Product {...productInfos[0]} />
					<Product {...productInfos[1]} />
				</div>
				<div className="home-row">
					<Product {...productInfos[2]} />
					<Product {...productInfos[3]} />
					<Product {...productInfos[4]} />
				</div>
				<div className="home-row">
					<Product {...productInfos[5]} />
				</div>
			</div>
		</div>
	);
}

export default Home;
