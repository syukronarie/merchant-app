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
