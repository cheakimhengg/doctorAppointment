import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const history = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function submit(e) {
		e.preventDefault();

		try {
			await axios
				.post("http://localhost:8000/login", {
					email,
					password,
				})
				.then((res) => {
					if (res.data == "exist") {
						history("/");
					} else if (res.data == "notexist") {
						alert("Invalid email or password");
					}
				})
				.catch((e) => {
					alert("wrong details");
					console.log(e);
				});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className="login-container">
			<div className="form-container">
				<h2 className="text-center mb-4">Login</h2>
				<form action="POST">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="form-group text-center">
						<a href="#" className="text-decoration-none">
							Forgot Password?
						</a>
					</div>
					<div className="form-group">
						<button
							type="submit"
							onClick={submit}
							className="btn btn-success btn-block"
						>
							Login
						</button>
					</div>
				</form>

				<div className="text-center mb-3">
					<span>Don't have an account? </span>
					<a href="signup" className="text-decoration-none">
						Signup
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

export default Login;
