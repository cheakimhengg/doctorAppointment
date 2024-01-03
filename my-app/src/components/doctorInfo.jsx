import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function doctorInfo() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section class="doctor-info-container">
				<div class="doctor-img">
					<img src="/img/Doctor-sample.png" alt="Doctor Image" />
				</div>
				<div class="doctor-details">
					<h2 class="doctor-name">Dr. Piseth Chuon</h2>
					<p class="specialization">Cardiologist</p>
					<p class="location">Location: City, Country</p>
					<p class="contact">Contact: +1 234 567 890</p>
					<p class="about">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<a
						href="http://127.0.0.1:3000/appointmentCalendar/bookingappointment.html"
						class="appointments-btn"
					>
						Appointments
					</a>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default doctorInfo;
