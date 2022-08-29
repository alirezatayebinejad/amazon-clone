import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";
import basketContext from "../../contexts/basketContext";
import { useAuth } from "../../firebase";

function Header() {
	const { basketItems } = useContext(basketContext);
	const currentUser = useAuth();

	return (
		<div className="header">
			<div className="header-container">
				<div className="header-logo">
					<Link to={"/"}>
						<img src="../../images/logo.png" alt="" className="header-logo" />
					</Link>
				</div>
				<div className="header-search">
					<input type="text" name="search" />
					<div>
						<SearchIcon />
					</div>
				</div>
				<div className="header-options">
					<div>
						<Link to={"/sign-in"}>
							<p className="header-signin">Hello {currentUser ? currentUser.email : "Guest"}</p>
							<span className="header-signin">{currentUser ? "Log out" : "Sign in"}</span>
						</Link>
					</div>
					<div>
						<p>Returns</p>
						<span>& Orders</span>
					</div>
					<div>
						<p>your</p>
						<span>Prime</span>
					</div>
					<Link to={"/checkout"}>
						<div className="header-basket">
							<ShoppingBasketIcon className="basketIcon" />
							<p className="header-basket-count">{basketItems?.length}</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
