import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function cardiologistPage() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div class="container">
					<div class="text">
						<h2>Why Choose DOC Pro Clinic For Cardiologist</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Health Check-up center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#"> Comprehensive Tests: </a>
							</b>
							We partner with Thai labs to offer an extensive range of standard
							and specialized blood tests.
						</p>

						<p>
							<b>
								<a href="#"> Health Check-Up Center: </a>
							</b>
							In Cambodia, our Cardiologist enhance holistic health assessments,
							ensuring a comprehensive view of your well-being.
						</p>
					</div>
					<div class="image">
						<img src="/img/cordiologist.png" alt="Your Image" />
					</div>
				</div>
			</section>

			<section>
				<div class="container">
					<div class="text">
						<h2>We Provide A One-Stop Service</h2>
						<p>
							With our dedicated laboratory specialist boasting 30 years of
							experience, patients can simply walk in and have their lab tests
							done without the need to see a doctor first. Our specialist will
							provide professional advice and guidance to ensure you have a
							comprehensive understanding of your test results.
						</p>
						<br />

						<p>
							Should you wish to consult with a doctor before or after your lab
							test, we have a team of full- time doctors available at the
							clinic. Our doctors are fluent in both English and Thai, ensuring
							effective communication and personalized care.
						</p>
					</div>

					<div class="text">
						<h2>Preparation before taking the service</h2>
						<li>
							Make a list of symptoms, including when they occur and their
							intensity.
						</li>
						<li>
							Be ready to discuss diet, exercise, smoking, and alcohol habits.
						</li>
						<li>
							Provide information about your family history of heart disease.
						</li>
						<li>
							Bring relevant records such as EKGs, stress tests, and blood work.
						</li>
						<li>
							Write down any concerns or questions about your heart health.
						</li>
					</div>

					{/* End of blood test description */}

					{/* Footer Section */}
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default cardiologistPage;
