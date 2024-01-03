import React, { useState } from "react";
import "./signUp.css"; // Import the CSS file for styling

const Signup = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignup = (e) => {
		e.preventDefault();

		// Add your signup logic here
		console.log("Signup button clicked");
		console.log("First Name:", firstName);
		console.log("Last Name:", lastName);
		console.log("Email:", email);
		console.log("Password:", password);
		console.log("Confirm Password:", confirmPassword);
	};

	return (
		<div className="signup-container">
			<div className="form-container">
				<h2 className="text-center mb-4">Signup</h2>
				<form onSubmit={handleSignup}>
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
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							placeholder="Confirm Password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-success btn-block">
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
