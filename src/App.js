import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CONST from "./utils/constants";
import SetupRouters from "./routes/SetupRoutes";

const client = new ApolloClient({
	uri: CONST.BASE_URL_GRAPHQL,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<SetupRouters />
		</ApolloProvider>
	);
}

export default App;
