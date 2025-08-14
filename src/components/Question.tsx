const Question = ({
  question,
  answer,
  isdrop,
  onclick,
}: {
  question: string;
  answer: string;
  isdrop: boolean;
  onclick: () => void;
}) => {
  return (
    <div className="flex flex-col w-full">
      <div
        className={`p-4 transition-all duration-500 ease-out ${isdrop ? 'bg-secondary rounded-t-3xl' : 'rounded-3xl bg-primary'} flex justify-between items-center cursor-pointer`}
        onClick={onclick}
      >
        <p className="font-poppins font-semibold text-white min-[500px]:text-xl">
          {question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className={isdrop ? "rotate-180" : ""}
        >
          <path
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 10l5 5m0 0l5-5"
          />
        </svg>
      </div>
      <div
        className={`p-4 bg-gray-200 rounded-b-3xl max-[500px]:text-sm transition-all duration-500 ease-out ${
          !isdrop
            ? "h-0 opacity-0"
            : "h-fit opacity-100 mb-2"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default Question;
