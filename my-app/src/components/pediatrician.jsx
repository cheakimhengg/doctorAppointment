import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function pediatrician() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div class="container">
					<div class="text">
						<h2>Why Choose DOC Pro Clinic For Pediatrician</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Pediatrician center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Specialized Pediatric Care:</a>
							</b>
							DOC Pro Clinic is dedicated to providing specialized care for
							children, ensuring that our pediatricians have the expertise
							needed to address the unique healthcare needs of infants,
							children, and adolescents.
						</p>

						<p>
							<b>
								<a href="#">Experienced and Compassionate Pediatricians:</a>
							</b>
							Choose DOC Pro Clinic for pediatrician services because our team
							consists of experienced and highly qualified pediatricians.
						</p>
					</div>
					<div class="image">
						<img src="/img/pediatrician.png" alt="Your Image" />
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

						<p>
							Should you wish to consult with a doctor before or after your lab
							test, we have a team of full- time doctors available at the
							clinic. Our doctors are fluent in both English and Thai, ensuring
							effective communication and personalized care.
						</p>
					</div>

					<div class="text">
						<h2>Preparation before taking the service.</h2>
						<ul>
							<li>
								Create a list of any medications your child is currently taking.
							</li>
							<li>
								Be prepared to discuss your child's developmental milestones.
							</li>
							<li>
								Prepare a list of questions or concerns you may have about your
								child's health.
							</li>
							<li>
								If your child has comfort items, such as a favorite toy or
								blanket.
							</li>
							<li>
								Bring your child's insurance information and any necessary forms
								or cards.
							</li>
							<li>
								Bring important documents, such as your child's birth
								certificate.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default pediatrician;
