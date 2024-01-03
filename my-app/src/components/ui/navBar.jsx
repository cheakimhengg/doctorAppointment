import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function NavBar() {
	return (
		<header id="header" class="d-flex align-items-center">
			<div class="container d-flex align-items-center">
				<div class="logo me-auto">
					<a href="/">
						<img class="doctor-logo" src="/img/Doc Pro.png" alt="doctor" />
					</a>
				</div>
				<nav id="navbar" class="navbar">
					<ul>
						<li>
							<a class="nav-link scrollto active" href="/">
								Home
							</a>
						</li>
						<li>
							<a class="nav-link scrollto" href="service">
								Services
							</a>
						</li>
						<li>
							<a class="nav-link scrollto " href="/">
								Notifications
							</a>
						</li>
						<li>
							<a class="nav-link scrollto" href="healthArticles">
								Health Info
							</a>
						</li>
						<li>
							<a class="getstarted scrollto" href="login">
								Login
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
