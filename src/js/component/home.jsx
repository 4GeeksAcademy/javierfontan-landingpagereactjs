import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<div className="Cards">
				<div className="card-group">
					<Card
						title="Quienes somos"/>
					<Card
						title="Servicios"/>
					<Card
						title="Como lo hacemos" />
					<Card
						title="contacto" />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;