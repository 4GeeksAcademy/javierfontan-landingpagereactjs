import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container fluid">
			<NavBar />
			<Jumbotron />
			<div className="Cards">
				<div className="card-group">
					<Card
						title="Quienes somos"
						description="Esta es una descripción de cuales son nuestros objetivos"
						imagen="https://img.freepik.com/fotos-premium/chica-sonriente-mirando-computadora-portatil-mientras-estudia-biblioteca_1048944-22474512.jpg?w=1380" />
					<Card
						title="Servicios"
						description="Aqui se describe cuales son nuestros servicios al cliente" />
					<Card
						title="Como lo hacemos"
						description="Aqui se puede observar cual es nuestro método de trabajo" />
					<Card
						title="Contacto"
						description="Información de contacto para clientes y proveedores" />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;