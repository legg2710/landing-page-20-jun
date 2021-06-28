import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron m-2">
			<div className="container">
				<h1 className="display-4">A Warm Welcome</h1>
				<p className="lead">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur.
				</p>

				<p className="lead">
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<a
					className="btn btn-primary btn-lg font-weight-bold"
					href="#"
					role="button">
					Call to Action!
				</a>
			</div>
		</div>
	);
}
