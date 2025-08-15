import Agent from "../../../components/Agent";
import { team } from "../../../constants/team";

const Teams = () => {
  return (
    <div className="flex flex-col items-center w-full p-8">
      <p className="text-xl font-poppins font-bold text-gray-600">Team</p>
      <p className="text-titletext text-[56px] font-bold font-poppins">
        Hands Behind the Hard Hats
      </p>
      <p className="text-subtext text-lg text-center md:w-[60%] w-full">
        Proin orci arcu, egestas sit amet nulla ut, semper volutpat risus.
        Nullam vehicula sitae amet eros et semper. Proin ligula metus, placerat
        eu felis tempus eu, port titor eget neque et congue.
      </p>
      <div className="mt-4 flex justify-between items-center w-[90%] gap-4">
        {team.map((d, i) => (
          <Agent
            name={d.name}
            title={d.title}
            image={d.image}
            key={i + d.name + d.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
