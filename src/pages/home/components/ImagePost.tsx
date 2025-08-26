const ImagePost = ({ img }: { img: string }) => {
  return (
    <div className="w-[95%] p-6 border-dotted border-3 border-secondary rounded-2xl">
      <img
        src={img}
        alt={img}
        className="w-full rounded-2xl min-[1035px]:h-[700px] object-cover"
      />
    </div>
  );
};

export default ImagePost;
