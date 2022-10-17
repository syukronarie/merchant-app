import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { AllMerchant } from "../config/typeDefs";

const FILTER_OPTIONS = {
	page: 1,
	limit: 5,
};

const convertUTCDateToLocalDate = (UTCDate) => {
	if (!UTCDate) return null;
	const date = new Date(UTCDate);
	return date.toLocaleDateString({ region: "ID" });
};

const Merchant = () => {
	const [filterOptions, setFilterOptions] = useState(FILTER_OPTIONS);
	const { data, loading } = useQuery(AllMerchant, {
		variables: {
			allMerchantfilterOptions: {
				...filterOptions,
			},
		},
	});

	const handleFilterOptions = () => {
		setFilterOptions((state) => ({ ...state, page: state.page + 1 }));
	};

	return (
		<div>
			{loading ? (
				<p>loading...</p>
			) : (
				<div>
					{data.allMerchant.merchants.map((val) => (
						<div key={val.id}>
							<h3>Merchant Name: {val.merchantName}</h3>
							<p>Phone Number: {val.phoneNumber}</p>
							<p>
								Recorded Date: {convertUTCDateToLocalDate(val.recordedDateTime)}
							</p>
							<p>Status: {String(val.isActive)}</p>
						</div>
					))}
					<div>
						<p>Current Page: {data.allMerchant.currentPage}</p>
						<p>Last Page: {data.allMerchant.lastPage}</p>
						<p>Total Merchant: {data.allMerchant.total}</p>
					</div>
				</div>
			)}

			<button onClick={handleFilterOptions}>Next Page</button>
		</div>
	);
};

export default Merchant;
