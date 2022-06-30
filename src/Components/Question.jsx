import { nanoid } from "nanoid";
import { useAnswers } from "../Context/useAnswers";
import Answers from "./Answers";

export default function Question() {
	const { questions } = useAnswers();

	return questions.map((item, index) =>
		index <= 4 ? (
			<div key={item.id} className="px-[75px] text-[#293264]">
				<h1 className="font-bold text-base w-full">{item.question}</h1>
				<div className="flex items-center gap-4 mt-3 mb-0">
					<Answers
						correctAnswer={item.correctAnswer}
						incorrectAnswers={item.incorrectAnswers}
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
