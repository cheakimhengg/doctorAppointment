import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";
import HealthInfoCard from "./ui/healthInfoCard";

function healthArticles() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<HealthInfoCard id={1} />
					</div>
					<div className="col-md-4">
						<HealthInfoCard id={2} />
					</div>
					<div className="col-md-4">
						<HealthInfoCard id={3} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<HealthInfoCard id={4} />
					</div>

					<div className="col-md-4">
						<HealthInfoCard id={5} />
					</div>

					<div className="col-md-4">
						<HealthInfoCard id={6} />
					</div>
					<div className="col-md-4">
						<HealthInfoCard id={7} />
					</div>
					<div className="col-md-4">
						<HealthInfoCard id={8} />
					</div>
					<div className="col-md-4">
						<HealthInfoCard id={9} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default healthArticles;
