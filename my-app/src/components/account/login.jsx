import React, { useState } from "react";
import "./login.css"; // Import the CSS file for styling

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		// Add your login logic here
		console.log("Login button clicked");
	};

	return (
		<div className="login-container">
			<div className="form-container">
				<h2 className="text-center mb-4">Login</h2>
				<form onSubmit={handleLogin}>
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
						<button type="submit" className="btn btn-success btn-block">
							Login
						</button>
					</div>
				</form>

				<div className="text-center mb-3">
					<span>Don't have an account? </span>
					<a href="Signup" className="text-decoration-none">
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
