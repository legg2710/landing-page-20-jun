import React from "react";

export function Card() {
	return (
		<div className="card m-2">
			<img
				src="https://i.picsum.photos/id/468/500/325.jpg?hmac=OisEqhUlWSlq90n5FNzSclAmHOuacDhwXvyv-_6ve_U"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h3 className="card-title text-center font-weight-bold">
					Card title
				</h3>
				<p className="card-text text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<div className="card-footer bg-white d-flex justify-content-center">
					<a href="#" className="btn btn-primary btn-lg">
						Find out More!
					</a>
				</div>
			</div>
		</div>
	);
}
