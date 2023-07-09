type CarouselCardProps = {
  image: string;
  altData?: string;
};

const CarouselCard = ({ image, altData }: CarouselCardProps) => {
  return (
    <div className="w-64 h-40 md:w-72 md:h-52 lg:w-96 lg:h-72">
      <img src={image} 
      alt={ altData || "image" }
      className="object-cover w-full h-full rounded-2xl" />
    </div>
  );
};

export default CarouselCard;
