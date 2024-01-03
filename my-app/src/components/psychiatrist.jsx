import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function psychiatrist() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div class="container">
					<div class="text">
						<h2>
							Why Choose DOC Pro Clinic For <br />
							Psychiatrist?
						</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Psychiatrist center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Comprehensive Personal History:</a>
							</b>
							Provide a detailed personal history, including any significant
							life events, changes in mood or behavior, and specific symptoms
							you've experienced.
						</p>

						<p>
							<b>
								<a href="#">Medication and Treatment History:</a>
							</b>
							Share your experiences with previous medications, noting their
							effectiveness and any side effects.
						</p>
					</div>
					<div class="image">
						<img src="/img/Psychiatrist.png" alt="Your Image" />
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
						</p>{" "}
						<br />
						<p>
							Should you wish to consult with a doctor before or after your lab
							test, we have a team of full- time doctors available at the
							clinic. Our doctors are fluent in both English and Thai, ensuring
							effective communication and personalized care.
						</p>
					</div>

					<div class="text">
						<h2>Preparation before taking the service.</h2>
						<li>
							Gather information about your personal history, including major
							life events.
						</li>
						<li>
							Keep a journal documenting your symptoms, including the frequency,
							intensity.
						</li>
						<li>
							Make a comprehensive list of all medications you are currently
							taking.
						</li>
						<li>
							Provide details about any previous therapy or counseling
							experiences.
						</li>
						<li>
							Be prepared to discuss your daily routines, sleep patterns,
							exercise habits.
						</li>
						<li>
							Wear comfortable clothing to ensure ease during the appointment.
						</li>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default psychiatrist;
