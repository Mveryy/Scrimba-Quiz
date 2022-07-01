import { useAnswers } from "../Context/useAnswers";
import Quiz from "./Quiz";
import Start from "./Start";

export default function Main() {
	const { start } = useAnswers();

	return (
		<div className="max-w-[800px] bg-[#F5F7FB] flex items-center justify-center py-10 sm:w-fit">
			{start ? <Start /> : <Quiz />}
		</div>
	);
}
