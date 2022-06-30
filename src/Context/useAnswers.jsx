import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AnswersContext = createContext({});

export function AnswersProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	const [responses, setResponses] = useState([]);
	const [sendResponses, setSendResponses] = useState([]);
	const [correctAnswers, setCorrectAnswers] = useState([]);
	const [sendedResponses, setSendedResponses] = useState(false);
	const [start, setStart] = useState(true);

	async function getData() {
		let response = await axios("https://the-trivia-api.com/api/questions/");
		setQuestions(response.data);
	}

	useEffect(() => {
		getData();
	}, []);

	const checkAnswers = (e) => {
		e.preventDefault();
		setSendResponses(responses);
		setSendedResponses(true);
	};

	return (
		<AnswersContext.Provider
			value={{
				checkAnswers,
				questions,
				setResponses,
				responses,
				sendResponses,
				correctAnswers,
				setCorrectAnswers,
				sendedResponses,
				start,
				setStart,
			}}
		>
			{children}
		</AnswersContext.Provider>
	);
}

export function useAnswers() {
	const context = useContext(AnswersContext);
	return context;
}
