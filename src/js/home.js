import React from "react";
import { Navbar } from "./component/Navbar.js";
import { Jumbotron } from "./component/Jumbotron";
import { Card } from "./component/Card";
import { Footer } from "./component/Footer";
//create your first component
export function Home() {
	return (
		<div className="container-fluid m-0 p-0">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex flex-sm-row flex-column">
					<Card
						image={
							"https://i.picsum.photos/id/468/500/325.jpg?hmac=OisEqhUlWSlq90n5FNzSclAmHOuacDhwXvyv-_6ve_U"
						}
					/>
					<Card
						image={
							"https://i.picsum.photos/id/445/500/325.jpg?hmac=sDk81XHpp_SxSGnrGNgOlZGoYzjRcv2gZ4FFAaSXMbg"
						}
					/>
					<Card
						image={
							"https://i.picsum.photos/id/989/500/325.jpg?hmac=hjDpr2eneZvIMEJQGqXzqXy3k7DkASv9FtHEysRzGAg"
						}
					/>
					<Card
						image={
							"https://i.picsum.photos/id/156/500/325.jpg?hmac=ovlxk56938LMdmG9gAVo2Ozgb7IOplgN7CkhdY_zpxE"
						}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
