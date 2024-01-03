import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
	return (
		<footer
			className="text-center text-lg-start text-white"
			style={{ backgroundColor: "#1c2331" }}
		>
			{/* Section: Social media */}
			<section
				className="d-flex justify-content-between p-4"
				style={{ backgroundColor: "#707872" }}
			>
				{/* Left */}
				<div className="me-5">
					<span>Cambodia</span>
				</div>
				{/* Left */}

				{/* Right */}
				<div>
					<a href="" className="text-white me-4">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="" className="text-white me-4">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="" className="text-white me-4">
						<i className="fab fa-google"></i>
					</a>
					<a href="" className="text-white me-4">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="" className="text-white me-4">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="" className="text-white me-4">
						<i className="fab fa-github"></i>
					</a>
				</div>
				{/* Right */}
			</section>
			{/* Section: Social media */}

			{/* Section: Links  */}
			<section>
				<div className="container text-center text-md-start mt-5">
					{/* Grid row */}
					<div className="row mt-3">
						{/* Grid column */}
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							{/* Content */}
							<h6 className="text-uppercase fw-bold">Web Pro</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
								tenetur, molestiae fugiat commodi vero explicabo odit ipsa nihil
								incidunt reiciendis ex, neque magni dicta in amet asperiores
								sequi officia qui.
							</p>
						</div>
						{/* Grid column */}

						{/* Grid column */}
						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold">Web Pro</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
						</div>
						{/* Grid column */}

						{/* Grid column */}
						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold">Web Pro</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Artificial
								</a>
							</p>
						</div>
						{/* Grid column */}

						{/* Grid column */}
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							{/* Links */}
							<h6 className="text-uppercase fw-bold">Contact</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								<i className="fas fa-home mr-3"></i> Cambodia, Phnom Pnnh
							</p>
							<p>
								<i className="fas fa-envelope mr-3"></i> info@example.com
							</p>
							<p>
								<i className="fas fa-phone mr-3"></i> + 01 234 567 88
							</p>
							<p>
								<i className="fas fa-print mr-3"></i> + 01 234 567 89
							</p>
						</div>
						{/* Grid column */}
					</div>
					{/* Grid row */}
				</div>
			</section>
			{/* Section: Links  */}

			{/* Copyright */}
			<div
				className="text-center p-3"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
			>
				© 2023 Copyright:
				<a
					className="text-white"
					href="http://127.0.0.1:5500/index.html#contact"
				>
					Dr.Appoinment.com
				</a>
			</div>
			{/* Copyright */}
		</footer>
	);
}

export default Footer;
