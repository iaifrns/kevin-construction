import Testimony from "../../../components/Testimony";
import { testimonies } from "../../../constants/testimonies";

const Testimonies = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-600 text-2xl font-poppins font-bold">
          Témoignage
        </p>
        <p className="text-titletext text-[56px] max-[800px]:text-3xl  font-poppins font-bold min-[1035px]:w-[70%] text-center">
          De la Confiance des Familles, des Entreprises et des Communautés
        </p>
        <p className="text-subtext text-lg text-center min-[1035px]:w-[50%]">
          Depuis plus de 15 ans, nous bâtissons des ouvrages qui améliorent la
          vie quotidienne, soutiennent les entreprises et renforcent les
          communautés. Chaque projet est réalisé avec sérieux, transparence et
          engagement, gages de la confiance durable de nos partenaires.
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
