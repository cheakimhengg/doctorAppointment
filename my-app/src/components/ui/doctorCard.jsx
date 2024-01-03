import React from "react";

function doctorCard() {
	return (
		<div className="product-item">
			<div className="product-img">
				<a href="doctorInfo">
					<img src="/img/doctor-thumb-01.jpg" alt="doctor-img" />
				</a>
			</div>
			<div className="product-content">
				<a
					href="http://127.0.0.1:3000/doctorInfo/basic-doctor-info.html"
					className="doctor-title"
				>
					Dr. Kang Mo Jin
				</a>
				<p className="price">
					<a href="http://127.0.0.1:3000/doctorInfo/basic-doctor-info.html">
						Cardiologist
					</a>
				</p>
			</div>
		</div>
	);
}

export default doctorCard;
