import { useAnswers } from '../Context/useAnswers'

export default function Start() {
	const { start, setStart } = useAnswers()

	return (
		<div
			className={`text-center w-[550px] h-[550px] flex flex-col items-center justify-center `}
		>
			<h1 className='font-bold text-4xl mb-2 text-[#293264]'>Quizzical</h1>
			<p className='text-base mb-7 text-[#293264]'>
				How many questions can you get right?
			</p>
			<button
				className='w-48 h-12 rounded-2xl bg-[#4D5B9E]'
				onClick={() => setStart(!start)}
			>
				Start quiz
			</button>
		</div>
	)
}
