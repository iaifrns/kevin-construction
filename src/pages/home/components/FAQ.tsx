import { useState } from "react";
import Question from "../../../components/Question";
import { phone } from "../../../constants/data";
import { faq } from "../../../constants/faq";
import { images } from "../../../constants/images";

const FAQ = () => {
  const [isdrop, setIsdrop] = useState(0);
  return (
    <div className="flex min-[500px]:w-[80%] gap-8 max-[1035px]:flex-col">
      <div className="flex flex-col gap-6 flex-2">
        <div className="w-full py-8 px-6 flex flex-col gap-4 bg-[rgb(220,220,220)] rounded-2xl">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-white rounded-2xl w-full focus:border-0 font-poppins p-3"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="bg-white rounded-2xl w-full focus:border-0 font-poppins  p-3"
          />
          <textarea
            placeholder="Your Question"
            className="bg-white w-full rounded-2xl h-[170px] p-3"
          />
          <button className="bg-secondary hover:bg-primary transition-all duration-300 ease-in-out font-poppins p-4 rounded-full text-white font-semibold">
            Submit Message
          </button>
          <button className="bg-green-900 hover:bg-primary transition-all duration-300 ease-in-out font-poppins  p-4 rounded-full text-white font-semibold">
            Whatsapp
          </button>
        </div>
        <div className="p-4 border-dotted border-3 border-secondary rounded-2xl">
          <div
            className="rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${images.WHYUS2})` }}
          >
            <div className="p-8 h-full w-full bg-primary/80 rounded-2xl flex justify-center items-center flex-col">
              <p className="font-semibold min-[500px]:text-2xl font-poppins text-white">
                Need More Help? Contact Us
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="white"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      d="M41.78 20.607a13.1 13.1 0 0 0-.25-5.102a12.94 12.94 0 0 0-3.415-6.018a12.94 12.94 0 0 0-6.018-3.416a13.1 13.1 0 0 0-5.102-.249m7.195 13.982a5.99 5.99 0 0 0-1.692-5.132a5.99 5.99 0 0 0-5.132-1.692"
                    />
                    <path d="M14.376 8.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.541 6.37c2.859 2.858 6.359 3.53 6.359 3.53l4.712-2.357a2 2 0 0 1 1.867.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848z" />
                  </g>
                </svg>
                <p className="font-bold font-poppins max-[500px]:text-xl text-3xl text-white">
                  {phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-3 flex flex-col gap-8">
        <div className="flex flex-col">
          <p className="text-gray-600 text-xl font-poppins font-semibold">
            FAQ
          </p>
          <p className="font-poppins font-bold text-titletext max-[500px]:text-4xl text-[56px]">
            Start With Confidence
          </p>
          <p className="min-[500px]:text-lg text-subtext">
            Duis finibus aliquam erat, sed placerat nisl consec tetur elemen
            tum. Cras ac dapibus elit. In dolor am magna, imper diet sed varius
            in, accumsan id dui. Vivamus faucibus odio at faucibus congue.
          </p>
        </div>
        <div className="w-full h-full justify-between">
          {faq.map((quest, ind) => (
            <Question
              question={quest.question}
              answer={quest.answ}
              key={quest.question + quest.answ + ind}
              isdrop={isdrop == ind}
              onclick={() => setIsdrop(ind)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
