
type CarouselCardProps = {
    image: string;
}

const CarouselCard = ({image}: CarouselCardProps) => {
  return (
    <div className="w-40 md:w-64 lg:w-96">
        <img 
        src={image}
        alt="image"
        className="object-cover w-full h-full"
        />
    </div>
  )
}

export default CarouselCard