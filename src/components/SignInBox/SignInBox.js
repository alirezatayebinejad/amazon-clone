import React, { useRef, useState } from "react";
import "./SignInBox.css";
import { signup, useAuth, logout, login } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

function SignInBox() {
	const [loading, setLoading] = useState(false);
	const currentUser = useAuth();

	const emailRef = useRef();
	const passwordRef = useRef();

	const navigate = useNavigate();

	const checkValidation = () => {
		if (passwordRef.current.value.length < 6) {
			alert("your password should be at least 6 characters");
		} else {
			alert("invalid email type");
		}
	};
	async function handleSignup(e) {
		e.preventDefault();

		setLoading(true);
		await signup(emailRef.current.value, passwordRef.current.value)
			.then(() => {
				alert("you have been successfully registered");
				emailRef.current.value = "";
				passwordRef.current.value = "";
				navigate(-1);
			})
			.catch((err) => {
				console.log(err);
				checkValidation();
			});
		setLoading(false);
	}
	async function handleLogin(e) {
		e.preventDefault();

		setLoading(true);
		await login(emailRef.current.value, passwordRef.current.value)
			.then(() => {
				alert("you have been successfully signed in");
				emailRef.current.value = "";
				passwordRef.current.value = "";
				navigate(-1);
			})
			.catch((err) => {
				alert("Error - invalid information");
				console.log(err);
			});
		setLoading(false);
	}
	async function handleLogout() {
		setLoading(true);
		await logout()
			.then(() => {
				alert("you have been logged out");
				navigate(-1);
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
		setLoading(false);
	}
	return (
		<div className="sign-in-container">
			{(!currentUser && (
				<>
					<h1>Sign in</h1>
					<label htmlFor="sign-in-email-input">Enter Your Email:</label>
					<input ref={emailRef} type="email" name="email" id="sign-in-email-input" />
					<label htmlFor="sign-in-pass-input">Your Password:</label>
					<input ref={passwordRef} type="password" name="email" id="sign-in-pass-input" />
					<button disabled={loading || currentUser} onClick={(e) => handleLogin(e)} type="submit" className="sign-in-register">
						Sign in
					</button>
					<p className="sign-in-agreement">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
					<div className="sign-in-divider">new to Amazon?</div>

					<button disabled={loading || currentUser} onClick={(e) => handleSignup(e)} type="submit" className="sign-in-register">
						Create Your Amazon account
					</button>
					<div className="sign-in-back-home">
						<Link to={"/"}>back to home</Link>
					</div>
				</>
			)) ||
				(currentUser && (
					<>
						<p>you are already signed in as: {currentUser?.email}</p>
						<button disabled={loading || !currentUser} onClick={handleLogout} className="sign-in-register">
							click here to log out
						</button>
						<div className="sign-in-back-home">
							<Link to={"/"}>back to home</Link>
						</div>
					</>
				))}
		</div>
	);
}

export default SignInBox;
