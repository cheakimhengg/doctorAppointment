import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./ui/topBar";
import NavBar from "./ui/navBar";
import Footer from "./ui/footer";

function healthArticles() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 1"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 1 content...</p>
						</div>
					</div>

					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 2"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 2 content...</p>
						</div>
					</div>

					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 3"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 3 content...</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 4"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 4 content...</p>
						</div>
					</div>

					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 5"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 5 content...</p>
						</div>
					</div>

					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 6"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 6 content...</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 6"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 7 content...</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 6"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 8 content...</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="article-container">
							<img
								className="article-img"
								src="/img/Psychiatrist.png"
								alt="Article Image 6"
							/>
							<h2 className="article-title">Cardiologist</h2>
							<p className="article-author">By. Piseth Chuon</p>
							<p className="article-date">06-Dec-23</p>
							<p className="article-content">Article 9 content...</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default healthArticles;
