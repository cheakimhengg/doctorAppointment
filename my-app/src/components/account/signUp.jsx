import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const history = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	async function submit(e) {
		e.preventDefault();

		try {
			await axios
				.post("http://localhost:8000/signup", {
					email,
					password,
					confirmPassword,
				})
				.then((res) => {
					if (res.data === "exist") {
						alert("User already exist");
					} else if (res.data === "notexist") {
						history("/");
					} else if (res.data === "notmatch") {
						alert("password not match");
					}
				})
				.catch((e) => {
					alert("Email or Password is incorrect");
					console.log(e);
				});
		} catch (e) {
			console.log(e);
		}
	}

	function showPassword() {
		var x = document.getElementById("password");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

	function showConPassword() {
		var x = document.getElementById("con_password");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

	// const handleSignup = (e) => {
	// 	e.preventDefault();

	// 	// Add your signup logic here
	// 	console.log("Signup button clicked");
	// 	console.log("First Name:", firstName);
	// 	console.log("Last Name:", lastName);
	// 	console.log("Email:", email);
	// 	console.log("Password:", password);
	// 	console.log("Confirm Password:", confirmPassword);
	// };

	return (
		<div className="signup-container">
			<div className="form-container">
				<h2 className="text-center mb-4">Signup</h2>
				<form action="POST">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<div className="password-input">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								id="password"
							/>
							<span
								onClick={showPassword}
								class="material-symbols-outlined"
								id="eye_icon"
							>
								visibility
							</span>
						</div>
					</div>
					<div className="form-group">
						<div className="password-input">
							<input
								type="password"
								className="form-control"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								id="con_password"
							/>
							<span
								onClick={showConPassword}
								class="material-symbols-outlined"
								id="eye_icon"
							>
								visibility
							</span>
						</div>
					</div>
					<div className="form-group">
						<button
							type="submit"
							onClick={submit}
							className="btn btn-success btn-block"
						>
							Signup
						</button>
					</div>
				</form>

				<div className="text-center mb-3">
					<span>Already have an account?</span>
					<a href="login" className="text-decoration-none">
						Login
					</a>
				</div>
				<div className="or-separator mb-4 d-flex align-items-center">
					<hr className="flex-grow-1 mx-3" />
					<span className="or-text">OR</span>
					<hr className="flex-grow-1 mx-3" />
				</div>

				<div className="social-login">
					<button className="btn btn-primary btn-block mb-2">
						Login with Facebook
					</button>
					<button className="btn btn-primary btn-block">
						Login with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
