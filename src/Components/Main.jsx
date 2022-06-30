import { useAnswers } from "../Context/useAnswers";
import Quiz from "./Quiz";
import Start from "./Start";

export default function Main() {
	const { start } = useAnswers();

	return (
		<div className="max-w-[800px] h-fit overflow-auto my-14 bg-[#F5F7FB] flex flex-col items-center justify-center py-10">
			{start ? <Start /> : <Quiz />}
		</div>
	);
}
