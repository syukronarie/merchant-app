import { ApolloProvider } from "@apollo/client";
import SetupRouters from "./routes/SetupRoutes";
import client from "./config/graphqlConfig";
import "./App.css";

function App() {
	return (
		<ApolloProvider client={client}>
			<SetupRouters />
		</ApolloProvider>
	);
}

export default App;
