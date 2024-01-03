import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function healthCheckUp() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div className="container">
					<div className="text">
						<h2>Why Choose DOC Pro Clinic For Health Check-up</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Health Check-up center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Comprehensive Health Assessments:</a>
							</b>
							At DOC Pro Clinic, we offer comprehensive health check-ups that
							cover a wide range of medical examinations and tests.
						</p>

						<p>
							<b>
								<a href="#">Experienced Healthcare Professionals:</a>
							</b>
							Choose DOC Pro Clinic for health check-ups because of our team of
							experienced and qualified healthcare professionals.
						</p>
					</div>
					<div className="image">
						<img src="/img/health-check-up.png" alt="Your Image" />
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="text">
						<h2>We Provide A One-Stop Service</h2>
						<p>
							With our dedicated laboratory specialist boasting 30 years of
							experience, patients can simply walk in and have their lab tests
							done without the need to see a doctor first. Our specialist will
							provide professional advice and guidance to ensure you have a
							comprehensive understanding of your test results.
						</p>

						<p>
							Should you wish to consult with a doctor before or after your lab
							test, we have a team of full- time doctors available at the
							clinic. Our doctors are fluent in both English and Thai, ensuring
							effective communication and personalized care.
						</p>
					</div>

					<div className="text">
						<h2>Preparation before taking the service</h2>
						<ul>
							<li>Gather information about your medical history</li>
							<li>
								Make a detailed list of all the medications you are currently
								taking
							</li>
							<li>
								If you have any previous medical test results, such as blood
								tests.
							</li>
							<li>
								Provide details about your family's medical history and
								particularly
							</li>
							<li>
								Prepare a list of questions or concerns you have about your
								health.
							</li>
							<li>
								Follow the fasting instructions provided by the healthcare
								provider.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default healthCheckUp;
