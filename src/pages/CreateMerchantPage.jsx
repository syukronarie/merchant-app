import React from "react";
import {
	useMutation,
	useSubscription,
	//  useQuery
} from "@apollo/client";

import {
	// AllMerchant,
	CreateMerchant,
	MerchantCreatedSub,
	// GetMerchant,
} from "../config/graphqlTypeDefs/merchants";
import { Link } from "react-router-dom";

const CreateMerchantPage = () => {
	// const { data: merchant } = useQuery(AllMerchant);
	// const { data: merchantById } = useQuery(GetMerchant, {
	// 	variables: {
	// 		getMerchantId: 12,
	// 	},
	// });

	const [createMerchant, { data, loading, error, reset }] = useMutation(
		CreateMerchant
		// {
		// 	refetchQueries: [
		// 		{
		// 			query: AllMerchant,
		// 		}, // DocumentNode object parsed with gql
		// 		"AllMerchant", // Query name
		// 	],
		// }
	);

	const {
		data: merchantCreated,
		loading: loadingMerchantCreated,
		error: errorMerchantCreated,
	} = useSubscription(MerchantCreatedSub);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const merchantName = formData.get("merchantName");
		const latitude = Number(formData.get("latitude"));
		const longitude = Number(formData.get("longitude"));
		const phoneNumber = formData.get("phoneNumber");
		const recordedDateTime = new Date(formData.get("recordedDateTime"));
		createMerchant({
			variables: {
				merchant: {
					recordedDateTime,
					phoneNumber,
					longitude,
					latitude,
					merchantName,
				},
			},
		});
	};

	return (
		<div>
			<h2>Create Merchant</h2>
			<form onSubmit={handleOnSubmit} className="form-container">
				<label htmlFor="merchantName">
					merchantName
					<input type="text" name="merchantName" id="merchantName" />
				</label>
				<label htmlFor="latitude">
					latitude
					<input type="number" name="latitude" id="latitude" />
				</label>
				<label htmlFor="longitude">
					longitude
					<input type="number" name="longitude" id="longitude" />
				</label>
				<label htmlFor="phoneNumber">
					phoneNumber
					<input type="text" name="phoneNumber" id="phoneNumber" />
				</label>
				<label htmlFor="recordedDateTime">
					recordedDateTime
					<input type="date" name="recordedDateTime" id="recordedDateTime" />
				</label>
				<button type="sumbit">Create Merchant NOW!</button>
				<button type="button" onClick={reset}>
					reset
				</button>
			</form>
			<div>
				<h3>useMutation responses</h3>
				{JSON.stringify({ data, loading, error })}
			</div>

			<div>
				<h3>useSubscription responses</h3>
				{JSON.stringify({ merchantCreated })}
				{JSON.stringify({ loadingMerchantCreated })}
				{JSON.stringify({ errorMerchantCreated })}
			</div>

			<Link to="/merchant">Go To Merchant Page</Link>
		</div>
	);
};

export default CreateMerchantPage;
