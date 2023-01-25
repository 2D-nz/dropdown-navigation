import { AppContainer } from "./components/AppContainer.styles";
import { GlobalStyles } from "./components/GlobalStyles.styles";
import HeadlineContainer from "./components/HeadlineContainer";
import Nav from "./components/Nav";

function App() {
	return (
		<AppContainer>
			<GlobalStyles />
			<Nav />
			<HeadlineContainer />
		</AppContainer>
	);
}

export default App;
