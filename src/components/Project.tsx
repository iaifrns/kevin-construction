const Project = ({
  img,
  title1,
  title2,
  desc,
  active
}: {
  img: string;
  title1: string;
  title2: string;
  desc: string;
  active:boolean
}) => {
  const num = new Array(5).fill("");
  return (
    <div className="flex-1 border-dotted border-3 border-secondary p-6 rounded-2xl">
      <div
        className="w-full h-[500px] max-[1035px]:w-full max-[1035px]:h-[400px] max-[800px]:h-[300px] min-[1600px]:h-[600px] bg-cover bg-no-repeat rounded-2xl"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={`h-full w-full rounded-2xl ${active && 'bg-primary/50'} bg-gradient-to-t from-primary/95  hover:bg-primary/50 flex flex-col justify-end overflow-hidden`}>
          <div className={`flex w-full h-fit p-4 flex-col ${!active && 'translate-y-28'} max-[1035px]:translate-0 hover:translate-0 transition-all duration-500 ease-out`}>
            <p className="text-white font-poppins font-semibold max-[800px]:text-[14px] text-xl">
              {title1}
            </p>
            <p className="text-white font-poppins font-bold text-[36px] max-[800px]:text-2xl">
              {title2}
            </p>
            <p className="text-gray-300 text-lg max-[800px]:text-sm">{desc}</p>
            <div className="gap-2 flex mt-2">
              {num.map((_, ind) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  key={"star-" + ind}
                >
                  <g fill="none">
                    <path
                      fill="url(#SVGKG1LDe8x)"
                      d="M7.194 2.102a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.494a.9.9 0 0 1 .5 1.535l-2.462 2.4l.581 3.387a.9.9 0 0 1-1.306.948L8.001 12.35l-3.042 1.6A.9.9 0 0 1 3.653 13l.58-3.387l-2.46-2.399a.9.9 0 0 1 .499-1.535l3.4-.494z"
                    />
                    <defs>
                      <linearGradient
                        id="SVGKG1LDe8x"
                        x1="14.5"
                        x2="1.125"
                        y1="14.332"
                        y2="1.72"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#ff6f47" />
                        <stop offset="1" stop-color="#ffcd0f" />
                      </linearGradient>
                    </defs>
                  </g>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
