//card component containing a picture and a tile and designation

type PictureCardProps = {
    picture: string;
    title: string;
    designation: string;
}

const PictureCard = ({
    picture,
    title,
    designation
}: PictureCardProps ) => {
  return (
      <div className="p-2 space-y-2 bg-slate-100 rounded-lg h-max">
        <div className="">
          <img 
          src={picture} 
          alt={title} 
          loading="lazy" 
          className="max-h-[200px] md:max-h-[250px] w-full object-center rounded-lg]"
          />
        </div>
        <div className="space-y-1">
            <h1 className="text-sm font-semibold">{title}</h1>
            <h2 className="text-xs font-medium">{designation}</h2>
        </div>
      </div>
  );
};

export default PictureCard;
