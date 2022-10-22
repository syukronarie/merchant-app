import React from "react";
import { useQuery } from "@apollo/client";
import { AllMerchant, GetMerchant } from "../config/graphqlTypeDefs/merchants";

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
	const { data, loading, refetch } = useQuery(AllMerchant, {
		variables: {
			allMerchantfilterOptions: {
				...FILTER_OPTIONS,
			},
		},
	});

	const { data: merchantById } = useQuery(GetMerchant, {
		variables: {
			getMerchantId: 12,
		},
	});

	// const [allMechant, { data, loading, refetch }] = useLazyQuery(AllMerchant, {
	// 	variables: {
	// 		allMerchantfilterOptions: {
	// 			...FILTER_OPTIONS,
	// 		},
	// 	},
	// });

	const handleFilterOptions = (currPage, isNext) => {
		refetch({
			allMerchantfilterOptions: {
				limit: 5,
				page: isNext ? currPage + 1 : currPage - 1,
			},
		});
	};

	if (loading) return <p>loading...</p>;

	return (
		<div>
			{!!data && (
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
					<button
						onClick={() => {
							handleFilterOptions(data.allMerchant.currentPage, true);
						}}
					>
						Next Page
					</button>
					<button
						onClick={() => {
							handleFilterOptions(data.allMerchant.currentPage, false);
						}}
					>
						Back Page
					</button>
				</div>
			)}
			{JSON.stringify({ merchantById })}
			{/* <button onClick={() => allMechant()}>Fetch All Merchant</button> */}
		</div>
	);
};

export default Merchant;
