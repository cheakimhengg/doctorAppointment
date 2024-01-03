import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function neurologist() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<section>
				<div className="container">
					<div className="text">
						<h2>
							Why Choose DOC Pro Clinic For <br />
							Neurologist
						</h2>
						<p>
							Our commitment to quality and convenience sets us apart as a
							leading Neurologist Doctor center in Cambodia.
						</p>
						<p>
							<b>
								<a href="#">Specialized Neurological Care</a>
							</b>
							DOC Pro Clinic is your choice for specialized neurological care,
							dedicated to addressing a wide range of neurological disorders and
							conditions.
						</p>

						<p>
							<b>
								<a href="#">Experienced Neurologists and Advanced Technology</a>
							</b>
							Choose DOC Pro Clinic for neurology services because of our
							experienced neurologists who are equipped with the latest
							advancements in diagnostic technology.
						</p>
					</div>
					<div className="image">
						<img src="/img/neurologist.png" alt="Your Image" />
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
						<h2>Preparation before taking the service.</h2>
						<ul>
							<li>Provide information about other medical conditions.</li>
							<li>
								Prepare a list of all current medications, including
								prescription drugs.
							</li>
							<li>
								Bring any relevant previous test results, such as MRI or CT
								scans.
							</li>
							<li>
								Bring your insurance information and any necessary forms or
								cards.
							</li>
							<li>
								Consider bringing a family member or friend to the appointment.
							</li>
							<li>
								Prepare a list of questions or concerns you have about your
								neurological.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default neurologist;
