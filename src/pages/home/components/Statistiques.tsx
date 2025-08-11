import { stats } from "../../../constants/data";

const Statistiques = () => {
  return (
    <div className="bg-white p-8 w-[95%] flex justify-evenly rounded-2xl items-center max-[1035px]:flex-col max-[1035px]:gap-8">
      {stats.map((dd, ind) => (
        <div
          className="flex flex-col items-center justify-center"
          key={ind + dd.text}
        >
          <p className="text-[52px] font-bold text-titletext font-poppins">
            {dd.number}
          </p>
          <p className="font-bold text-titletext font-poppins">{dd.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistiques;
