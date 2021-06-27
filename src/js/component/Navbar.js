import React, { useState } from "react";

export function Navbar() {
	const [navCollapsed, setNaveCollapsed] = useState(true);

	const handleNavCollapse = () => setNaveCollapsed(!navCollapsed);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container d-flex">
				<a
					className="navbar-brand text-info font-weight-bolder"
					href="/">
					Start Bootstrap
				</a>
				<button
					className="custom-toggler avbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample09"
					aria-controls="navbarsExample09"
					aria-expanded={!navCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}>
					<span className="navbar-toggler-icon"></span>
				</button>

				<ul className="nav justify-content-end ml-auto">
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
