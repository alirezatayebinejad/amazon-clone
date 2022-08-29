import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import SignInBox from "../../components/SignInBox/SignInBox";

function SignIn() {
	return (
		<div className="sign-in">
			<Link to={"/"}>
				<img className="sign-in-logo" src="../../images/logoblack.png" alt="amazon logo png black" />
			</Link>

			<SignInBox />
		</div>
	);
}

export default SignIn;
