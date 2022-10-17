import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Merchant from "../pages/Merchant";

const SetupRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Merchant />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouters;
