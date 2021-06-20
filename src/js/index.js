import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import { Home } from "./component/home.js";

import { Navbar } from "./component/Navbar.js";
import { Jumbotron } from "./component/Jumbotron";
import { Cards } from "./component/Cards";
import { Footer } from "./component/Footer";

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<div className="container">
			<Jumbotron />
			<div className="d-flex flex-sm-row flex-column">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
		<Footer />
	</React.Fragment>,
	document.querySelector("#app")
);
