import React, { useState } from "react";

export function Navbar() {
	const [navCollapsed, setNavCollapsed] = useState(true);

	const handleNavCollapse = () => setNavCollapsed(!navCollapsed);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand text-light font-weight-bolder" href="/">
				Start Bootstrap
			</a>
			<button
				className="custom-toggler navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarsExample09"
				aria-controls="navbarsExample09"
				aria-expanded={!navCollapsed ? true : false}
				aria-label="Toggle navigation"
				onClick={handleNavCollapse}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<ul
				className={`${
					navCollapsed ? "collapse nav justify-content-end" : ""
				} navbar-collapse`}
				id="navbarsExample09">
				<a className="nav-link text-white" href="/home">
					Home
				</a>

				<a className="nav-link text-secondary" href="/about">
					About
				</a>

				<a className="nav-link text-secondary" href="/services">
					Services
				</a>

				<a className="nav-link text-secondary" href="/contact">
					Contact
				</a>
			</ul>
		</nav>
	);
}
