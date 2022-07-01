import Question from './Question'
import { useAnswers } from '../Context/useAnswers'

export default function Quiz() {
	const { checkAnswers, questions, sendedResponses, sendResponses, getData } =
		useAnswers()

	return (
		<form className='flex flex-col w-100'>
			<Question questions={questions} />
			<div className='flex items-center gap-6 self-center mt-3 sm:flex-col'>
				<p className='text-[#293264] font-bold'>
					{sendedResponses && `Correct answers ${sendResponses.length}/5`}
				</p>
				<button
					className='px-6 py-3 bg-[#4D5B9E] rounded-lg w-fit self-center sm:'
					onClick={!sendedResponses ? checkAnswers : getData}
				>
					{!sendedResponses ? 'Check answers' : 'Play Again'}
				</button>
			</div>
		</form>
	)
}
