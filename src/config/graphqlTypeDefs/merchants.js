import { gql } from "@apollo/client";

export const AllMerchant = gql`
	query AllMerchant($allMerchantfilterOptions: AllMerchantFilterOptions) {
		allMerchant(allMerchantfilterOptions: $allMerchantfilterOptions) {
			total
			limit
			offset
			currentPage
			lastPage
			merchants {
				id
				isActive
				latitude
				longitude
				merchantName
				phoneNumber
				recordedDateTime
			}
		}
	}
`;

export const CreateMerchant = gql`
	mutation CreateMerchant($merchant: InputMerchant!) {
		createMerchant(merchant: $merchant) {
			code
			success
			message
			merchant {
				id
				isActive
				latitude
				longitude
				merchantName
				phoneNumber
				recordedDateTime
			}
		}
	}
`;

export const GetMerchant = gql`
	query GetMerchant($getMerchantId: Int!) {
		getMerchant(id: $getMerchantId) {
			id
			isActive
			latitude
			longitude
			merchantName
			phoneNumber
			recordedDateTime
		}
	}
`;

export const SearchMerchants = gql`
	query SearchMerchants($searchFilterOptions: SearchMerchantFilterOptions!) {
		searchMerchants(searchFilterOptions: $searchFilterOptions) {
			total
			limit
			offset
			currentPage
			lastPage
			merchants {
				id
				isActive
				latitude
				longitude
				merchantName
				phoneNumber
				recordedDateTime
			}
		}
	}
`;

export const MerchantCreatedSub = gql`
	subscription MerchantCreatedSub {
		merchantCreated {
			id
			merchantName
			phoneNumber
			latitude
			longitude
			isActive
			recordedDateTime
		}
	}
`;
