import { useEffect, useState } from 'react'
import { useAnswers } from '../Context/useAnswers'

export default function Answers({ correct_answer, incorrect_answers, question }) {
	const [answers, setAnswers] = useState([])
	const {
		setResponses,
		responses,
		sendResponses,
		correctAnswers,
		setCorrectAnswers,
		sendedResponses
	} = useAnswers()

	useEffect(() => {
		setAnswers(shuffleAnswers([correct_answer, ...incorrect_answers]))
		setCorrectAnswers(values => [...values, correct_answer])
	}, [])

	function validateResponse(value) {
		if (value === correct_answer) {
			const existResponse = responses.find(item => item === value)
			if (!existResponse) {
				setResponses(values => [...values, value])
			}
		} else {
			const existResponse = responses.find(item => item === correct_answer)
			if (existResponse) {
				setResponses(values => values.filter(item => item !== correct_answer))
			}
		}
	}

	function returnResponses(value) {
		const existResponse = sendResponses.find(item => item === value)
		if (existResponse) {
			return 'correct border-0'
		} else if (!existResponse && sendedResponses) {
			return 'incorrect'
		}
	}

	function compareResponse(value) {
		const findCorrectAnswer = correctAnswers.find(item => item === value)
		if (findCorrectAnswer && sendedResponses) {
			return 'correct border-0'
		}
	}

	function shuffleAnswers(a) {
		return a.sort(() => Math.random() - 0.5)
	}

	return (
		<>
			{answers.map((item, index) => (
				<div key={`${item}${index}`} className=''>
					<input
						disabled={sendedResponses}
						type='radio'
						name={question}
						id={item}
						className={`hidden ${
							compareResponse(item) !== 'correct border-0' ? 'disabled' : ''
						}`}
						required
						onClick={e => validateResponse(e.target.id)}
					/>
					<label
						htmlFor={item}
						key={item}
						className={`${compareResponse(
							item
						)} font-medium border-[1px] rounded-xl border-[#4D5B9E] px-6 py-[3px] cursor-pointer inline-block text-center select-none ${returnResponses(
							item
						)} `}
						
					>
						<p dangerouslySetInnerHTML={{ __html: item}} />
					</label>
				</div>
			))}
		</>
	)
}
