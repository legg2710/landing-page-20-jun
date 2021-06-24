import React from "react";
import { Navbar } from "./component/Navbar.js";
import { Jumbotron } from "./component/Jumbotron";
import { Cards } from "./component/Cards";
import { Footer } from "./component/Footer";
//create your first component
export function Home() {
	return (
		<div className="container-fluid m-0 p-0">
			<React.Fragment>
				<Navbar />
				<div className="container">
					<Jumbotron />
					<div className="d-flex justify-content-between">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
				<Footer />
			</React.Fragment>
			,
		</div>
	);
}
