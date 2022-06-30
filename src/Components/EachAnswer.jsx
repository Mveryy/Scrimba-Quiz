export default function EachAnswer() {
  return (
    <div key={`${item}${index}`} className="">
      <input type="radio" name={question} id={item} className="hidden" required onClick={(e) => setSelectedOption(e.target.id)} />
      <label 
        htmlFor={item} 
        key={item} 
        className={`font-medium border-[2px] rounded-xl border-[#4D5B9E] px-4 py-2 cursor-pointer inline-block correct`}>
        {item}
      </label>
    </div>
  )
}