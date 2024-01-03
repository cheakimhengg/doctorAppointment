import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function bloodTest() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section className="header">
				<div className="header-content">
					<h1>Blood Tests</h1>
					<p>Accurate & timely blood tests for comprehensive health.</p>
				</div>
			</section>
			{/* End of bloode section */}

			{/* Bloode Test description */}
			<section>
				<div className="container">
					<div className="text">
						<h2>
							Why Choose DOC Pro Clinic For <br />
							Blood Tests?
						</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading health check-up center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Comprehensive Tests:</a>
							</b>
							We partner with Thai labs to offer an extensive range of standard
							and specialized blood tests.
						</p>
						<p>
							<b>
								<a href="#">Health Check-Up Center:</a>
							</b>
							In Cambodia, our blood tests enhance holistic health assessments,
							ensuring a comprehensive view of your well-being.
						</p>
					</div>
					<div className="image">
						<img src="/img/Blood-test.png" alt="Your Image" />
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
						</p>{" "}
						<br />
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
							<li>Get enough sleep, about 6-8 hours.</li>
							<li>
								Abstain from food and beverages at least 6 hours before the
								service, but can drink steel water. For example, you can eat
								breakfast and
							</li>
							<li>come for the check up after 6 hours (in the afternoon).</li>
							<li>
								Abstain from any alcoholic beverages at least 24 hours prior to
								the medical examination.
							</li>
							<li>
								Avoid checking during your menstrual period. You should wait at
								least 7 days after your period has passed.
							</li>
							<li>
								Should wear loose and comfortable clothing to facilitate the
								examination.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default bloodTest;
