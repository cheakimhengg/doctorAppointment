import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function vaccination() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div className="container">
					<div className="text">
						<h2>
							Why Choose DOC Pro Clinic For <br />
							Vaccination
						</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Health Check-up center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Expert Vaccination Services:</a>
							</b>
							DOC Pro Clinic offers expert vaccination services administered by
							qualified healthcare professionals.
						</p>

						<p>
							<b>
								<a href="#">Comprehensive Vaccine Selection:</a>
							</b>
							Choose DOC Pro Clinic for vaccination because we provide a wide
							range of vaccines, including routine vaccinations, travel
							vaccines, and specialized immunizations.
						</p>
					</div>
					<div className="image">
						<img src="/img/vaccination.png" alt="Your Image" />
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
							test, we have a team of full-time doctors available at the clinic.
							Our doctors are fluent in both English and Thai, ensuring
							effective communication and personalized care.
						</p>
					</div>

					<div className="text">
						<h2>Preparation before taking the service</h2>
						<ul>
							<li>Take a moment to review your vaccination history.</li>
							<li>
								If you have a record of your previous vaccinations, bring it to
								the appointment.
							</li>
							<li>Inform the healthcare provider about any allergies.</li>
							<li>
								If you are taking any medications, discuss them with the
								healthcare provider.
							</li>
							<li>
								Prepare any questions you may have about the vaccines being
								administered.
							</li>
							<li>Wear clothing that allows easy access to the upper arm.</li>
						</ul>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default vaccination;
