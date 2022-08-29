import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {
	const scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0;
	};
	return (
		<div className="footer">
			<div className="footer-backToTop" onClick={scrollToTop}>
				<p>back to top</p>
			</div>
			<div className="footer-main">
				<div className="footer-main-lines footer-main-line1">
					<h3>Get to Know Us</h3>
					<ul>
						<li>Careers</li>
						<li>Amazon Newsletter</li>
						<li>About Amazon</li>
						<li>Sustainability</li>
						<li>Press Center</li>
					</ul>
				</div>
				<div className="footer-main-lines footer-main-line2">
					<h3>Make Money with Us</h3>
					<ul>
						<li>Sell products on Amazon</li>
						<li>Sell apps on Amazon</li>
						<li>Supply to Amazon</li>
						<li>Become a Delivery Driver</li>
						<li>Start a package delivery business</li>
					</ul>
				</div>
				<div className="footer-main-lines footer-main-line3">
					<h3>Amazon Payment Products</h3>
					<ul>
						<li>Amazon Rewards Visa Signature Cards</li>
						<li>Amazon Store Card</li>
						<li>Amazon Secured Card</li>
						<li>Amazon Business Card</li>
						<li>Shop with Points</li>
					</ul>
				</div>
				<div className="footer-main-lines footer-main-line4">
					<h3>Let Us Help You</h3>
					<ul>
						<li>Amazon and COVID-19</li>
						<li>Your Account</li>
						<li>Your Orders</li>
						<li>Shipping Rates & Policies</li>
						<li>Amazon Prime</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<Link to={"/"}>
					<img src="../../images/logo.png" alt="amazon logo white" />
				</Link>
			</div>
		</div>
	);
}

export default Footer;
