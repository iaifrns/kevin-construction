const Agent = ({
  image,
  name,
  title,
}: {
  image: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="relative flex-1 max-md:w-full max-[1035px]:mb-6">
      <div className="w-full min-[800px]:h-[95%] flex p-6 gap-6 items-center border-dotted border-secondary border-3 rounded-2xl max-[800px]:flex-col">
        <div className="relative">
          <div className="w-full h-full bg-gradient-to-t from-primary absolute rounded-2xl max-[800px]:h-[450px]"></div>
          <img
            src={image}
            alt={image}
            className="object-cover w-full h-full rounded-2xl max-[800px]:h-[450px]"
          />
        </div>
      </div>
      <div className="max-[800px]:mt-4 absolute w-full -bottom-10">
        <div className="flex w-full justify-center items-center">
          <div className="bg-white rounded-xl p-3">
            <div className="p-4 bg-[rgb(230,230,220)] rounded-xl flex justify-center items-center flex-col">
              <p className="text-xl font-bold font-poppins">{name}</p>
              <p className="text-lg">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
