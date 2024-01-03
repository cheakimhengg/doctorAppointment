import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";
import DoctorCard from "./ui/doctorCard";

const HomePage = () => {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div className="home-page-img-doctor1">
					<div>
						<img src="/img/homepage_doc.jpeg" alt="HomePage_Doctor1" />
					</div>
				</div>
				<div className="appoinment-button">
					<a href="bookingappointment">
						<button type="button" className="btn btn-success btn-lg">
							Appoinment
						</button>
					</a>
					<a href="service">
						<button type="button" className="btn btn-light btn-lg">
							Services
						</button>
					</a>
				</div>
				<div className="trustd-medical-clinic-in-cambodia">
					<p>Trusted Medical Clinic in Cambodia</p>
					<div id="verman-hospital">
						<h1>DOCPRO</h1>
					</div>
				</div>
			</section>
			<section className="pageket-section">
				<div id="pageket-title-section">
					<h1>PAGEKET</h1>
					<p>Professional. So quality. So friendly.</p>
				</div>
				<div className="wrapper">
					<div className="container">
						<div className="product">
							<div className="product-container">
								<DoctorCard />
								<DoctorCard />
								<DoctorCard />
								<DoctorCard />
								<DoctorCard />
								<DoctorCard />
								<DoctorCard />
								<DoctorCard />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default HomePage;
