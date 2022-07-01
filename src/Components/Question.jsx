import { nanoid } from "nanoid";
import { useAnswers } from "../Context/useAnswers";
import Answers from "./Answers";

export default function Question() {
	const { questions } = useAnswers();

	return questions.map((item, index) =>
		index <= 4 ? (
			<div key={item.id} className="px-20 text-[#293264]">
				 <h1 
					dangerouslySetInnerHTML={{ __html: item.question}} 
					className="font-bold text-base w-full sm:text-center">
				 </h1>
				<div className="flex items-center gap-4 mt-3 mb-0 sm:flex sm:flex-wrap sm:justify-center ">
					<Answers
						correct_answer={item.correct_answer}
						incorrect_answers={item.incorrect_answers}
						question={item.question}
						id={nanoid}
					/>
				</div>
				<hr className="w-100  my-4 border-[#DBDEF0]"></hr>
			</div>
		) : (
			""
		)
	);
}
