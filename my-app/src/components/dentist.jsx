import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function dentist() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div className="container">
					<div className="text">
						<h2>Why Choose DOC Pro Clinic For Dentist</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Dentist center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Comprehensive Dental Care</a>
							</b>
							: At DOC Pro Clinic, our mental health services are delivered by a
							team of experienced and highly qualified psychiatrists,
							psychologists, therapists, and counselors.
						</p>

						<p>
							<b>
								<a href="#">Holistic and Patient-Centered Approach</a>
							</b>
							: DOC Pro Clinic is committed to a holistic and patient-centered
							approach to mental health care. We prioritize the individual needs
							and preferences of our patients, involving them in the
							decision-making process.
						</p>
					</div>
					<div className="image">
						<img src="/img/dentist.png" alt="Your Image" />
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
							<li>
								Gather information about your dental history, including previous
								treatments, surgeries, and any ongoing dental issues.
							</li>
							<li>
								Make a list of all medications you are currently taking,
								including prescription drugs, over-the-counter medications, and
								supplements.
							</li>
							<li>Bring your dental insurance card and any necessary forms.</li>
							<li>
								Document any current symptoms or concerns you have related to
								your oral health.
							</li>
							<li>
								If you have previous dental X-rays or records, bring them with
								you.
							</li>
							<li>Prepare a list of questions you have for the dentist.</li>
						</ul>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default dentist;
