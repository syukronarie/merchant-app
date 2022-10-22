import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h2>Home Page</h2>
			<Link to="/merchant">Go to Merchant Page</Link>
			<Link to="/createmerchant">Go to Create Merchant Page</Link>
		</div>
	);
};

export default Home;
