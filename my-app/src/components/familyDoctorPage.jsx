import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function familyDoctorPage() {
	return (
		<div>
			<TopBar />
			<NavBar />
			{/* ======Blood section====== */}
			<section className="header">
				<div className="header-content">
					<h1>Family Doctor</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
				</div>
			</section>
			{/* End of blood section */}

			{/* ======Blood Test description====== */}
			<section>
				<div className="container">
					<div className="text">
						<h2>
							Why Choose DOC Pro Clinic For <br />
							Family Doctor
						</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Family Doctor center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Comprehensive Family Care:</a>
							</b>
							Emphasize DOC Pro Clinic's commitment to providing comprehensive
							healthcare for the entire family.
						</p>

						<p>
							<b>
								<a href="#">Experienced and Caring Physicians:</a>
							</b>
							Showcase the experience and compassionate nature of the physicians
							at DOC Pro Clinic.
						</p>
					</div>
					<div className="image">
						<img src="/img/family-doctor.png" alt="Your Image" />
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
							test, we have a team of full- time doctors available at the
							clinic. Our doctors are fluent in both English and Thai, ensuring
							effective communication and personalized care.
						</p>
					</div>

					<div className="text">
						<h2>Preparation before taking the service</h2>
						<ul>
							<li>
								Compile a detailed medical history for yourself and family
								members.
							</li>
							<li>Make a list of all current medications.</li>
							<li>Provide information about your family's medical history.</li>
							<li>
								Write down any specific health concerns for family doctor.
							</li>
							<li>
								Bring your insurance information and any necessary forms or
								cards.{" "}
							</li>
						</ul>
					</div>

					{/* End of blood test description */}

					{/* Footer Section */}
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default familyDoctorPage;
