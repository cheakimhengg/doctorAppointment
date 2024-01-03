import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TopBar() {
	return (
		<nav id="topbar" class="d-flex align-items-center">
			<div class="container d-flex justify-content-center justify-content-md-between">
				<div class="contact-info d-flex align-items-center">
					<i class="bi bi-envelope-fill"></i>
					<a href="">info@example.com</a>
					<i class="bi bi-phone-fill phone-icon"></i> +885 1234567
				</div>
				<div class="social-links d-none d-md-block">
					<a href="" class="twitter">
						<i class="bi bi-twitter"></i>
					</a>
					<a href="" class="facebook">
						<i class="bi bi-facebook"></i>
					</a>
					<a href="" class="instagram">
						<i class="bi bi-instagram"></i>
					</a>
					<a href="" class="linkedin">
						<i class="bi bi-linkedin"></i>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default TopBar;
