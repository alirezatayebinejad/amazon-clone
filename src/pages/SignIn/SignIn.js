import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import SignInBox from "../../components/SignInBox/SignInBox";
import { jsonEval } from "@firebase/util";

function SignIn() {
	const [userCountry, setUserCountry] = useState();

	useEffect(() => {
		fetch("https://api.ipgeolocation.io/ipgeo?apiKey=845bdd7631384fae877a62eab02196b7&fields=country_code2,country_name")
			.then((res) => res.json())
			.then((data) => setUserCountry(data.country_name));
	}, []);
	return (
		<div className="sign-in">
			<Link to={"/"}>
				<img className="sign-in-logo" src="../../images/logoblack.png" alt="amazon logo png black" />
			</Link>
			<h5 className="sign-in-country-warning">
				{userCountry == "Iran" && "you are visiting from IRAN ! this sign up/in uses Firebase auth which not working in your country. use VPN to try it :)"}
			</h5>

			<SignInBox />
		</div>
	);
}

export default SignIn;
