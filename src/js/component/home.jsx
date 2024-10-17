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
						description="Aqui se describe cuales son nuestros servicios al cliente"
						imagen="https://img.freepik.com/foto-gratis/personas-alto-angulo-aplaudiendo-trabajo_23-2149636269.jpg?t=st=1729159629~exp=1729163229~hmac=be346b42b13f33db0c74715a1f2dbfce01997ce45b0ab7768e60d18a7e33a943&w=1380" />
					<Card
						title="Como lo hacemos"
						description="Aqui se puede observar cual es nuestro método de trabajo"
						imagen= "https://img.freepik.com/fotos-premium/primer-plano-colegas-negocios-dandose-mano-oficina_1048944-29942241.jpg?w=1380" />
					<Card
						title="Contacto"
						description="Información de contacto para clientes y proveedores" 
						imagen="https://img.freepik.com/foto-gratis/mujer-sonriente-hablando-telefono-plano-medio_23-2149476757.jpg?t=st=1729159653~exp=1729163253~hmac=1b3305a9bedb3df9a4d0e6a55d1243c907146d86d132aa2ad0d6f99d144bf075&w=1380" />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;