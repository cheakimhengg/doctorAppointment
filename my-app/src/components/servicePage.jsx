import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function ServicePage() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section class="header">
				<div class="header-content">
					<h1>Welcome to DOC Pro Hospital</h1>
					<p>Your Partner in Comprehensive Healthcare</p>
				</div>
			</section>

			<section class="services">
				<a href="cardiologist">
					<div class="service" id="nursing">
						<h2>Cardiologist</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="familyDoctor">
					<div class="service" id="family-doctor">
						<h2>Family Doctor</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="bloodTest">
					<div class="service" id="corporate-test">
						<h2>Blood Test</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="mentalHealth">
					<div class="service" id="mental-health">
						<h2>Mental Health</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="healthCheckUp">
					<div class="service" id="vaccination">
						<h2>Health Check-Up</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="vaccination">
					<div class="service" id="wound-care">
						<h2>Vaccination</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="pediatrician">
					<div class="service" id="wound-care">
						<h2>Pediatrician</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="neurologist">
					<div class="service" id="wound-care">
						<h2>Neurologist</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>

				<a href="psychiatrist">
					<div class="service" id="wound-care">
						​​​
						<h2>Psychiatrist</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>
				<a href="dentist">
					<div class="service" id="wound-care">
						<h2>Dentist</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</a>
			</section>
			<Footer />
		</div>
	);
}

export default ServicePage;
