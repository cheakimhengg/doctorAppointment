import React from "react";

function healthInfoCard(props) {
	return (
		<div>
			<div className="article-container">
				<img
					className="article-img"
					src="/img/Psychiatrist.png"
					alt="Article"
				/>
				<h2 className="article-title">Cardiologist</h2>
				<p className="article-author">By. Piseth Chuon</p>
				<p className="article-date">06-Dec-23</p>
				<p className="article-content">Article {props.id} content...</p>
			</div>
		</div>
	);
}

export default healthInfoCard;
