import Main from "./Components/Main";
import { AnswersProvider } from "./Context/useAnswers";

function App() {
	return (
		<AnswersProvider>
			<Main />
		</AnswersProvider>
	);
}

export default App;
