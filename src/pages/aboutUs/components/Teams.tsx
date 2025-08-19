import Agent from "../../../components/Agent";
import { team } from "../../../constants/team";

const Teams = () => {
  return (
    <div className="flex flex-col items-center w-full md:p-8">
      <p className="text-xl font-poppins font-bold text-gray-600">
        Notre Équipe
      </p>
      <p className="text-titletext max-[500px]:text-2xl max-[1035px]:text-[40px] max-[1035px]:text-center text-[56px] font-bold font-poppins">
        Les Mains Derrière les Casques
      </p>
      <p className="text-subtext text-lg text-center min-[1035px]:w-[60%] w-full max-[500px]:text-[15px]">
        Derrière chaque projet réussi se trouve une équipe passionnée
        d’ingénieurs, de techniciens et d’ouvriers qualifiés. Ensemble, nous
        mettons notre savoir-faire, notre rigueur et notre créativité au service
        de vos ambitions, pour bâtir des ouvrages solides, esthétiques et
        durables.
      </p>
      <div className="mt-4 flex justify-between items-center w-[90%] gap-4 max-[1035px]:flex-col">
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
