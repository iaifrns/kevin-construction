import Testimony from "../../../components/Testimony";
import { testimonies } from "../../../constants/testimonies";

const Testimonies = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-600 text-2xl font-poppins font-bold">
          Testimonial
        </p>
        <p className="text-titletext text-[56px] max-[800px]:text-3xl  font-poppins font-bold min-[1035px]:w-[70%] text-center">
          Trusted by Families, Businesses & Communities
        </p>
        <p className="text-subtext text-lg text-center min-[1035px]:w-[50%]">
          Proin orci arcu, egestas sit amet nulla ut, semper volutpat risus.
          Nullam vehicula sitae amet eros et semper. Proin ligula metus,
          placerat eu felis tempus eu, port titor eget neque et congue.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {testimonies.map((testimony, ind) => (
          <Testimony
            key={testimony.title + ind}
            img={testimony.img}
            title={testimony.title}
            message={testimony.message}
            name={testimony.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
