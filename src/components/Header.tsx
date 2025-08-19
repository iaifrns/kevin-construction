const Header = ({
  title,
  page,
  img,
}: {
  title: string;
  page: string;
  img: string;
}) => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full bg-gradient-to-r from-primary h-[50vh] py-12 px-24 flex flex-col gap-3 justify-center">
        <p className="text-[56px] font-bold font-poppins text-white">{title}</p>
        <div className="flex items-center">
          <p className="text-secondary text-xl font-semibold">Home</p>
          <p className="text-white text-xl font-semibold">/{page}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
