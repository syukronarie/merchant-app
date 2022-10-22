import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

import CONST from "../utils/constants";

const httpLink = new HttpLink({
	uri: CONST.BASE_URL_GRAPHQL,
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: CONST.BASE_URL_WS_GRAPHQL,
	})
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default client;
