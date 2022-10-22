import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMerchant from "../pages/CreateMerchantPage";
import Home from "../pages/Home";
import Merchant from "../pages/Merchant";

const SetupRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/merchant" element={<Merchant />} />
				<Route path="/createmerchant" element={<CreateMerchant />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouters;
