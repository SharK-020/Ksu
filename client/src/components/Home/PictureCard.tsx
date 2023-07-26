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
    <div>
      <div>
        <div>
          <img src={picture} alt={title} loading="lazy" />
        </div>
        <div>
            <h1>{title}</h1>
            <h2>{designation}</h2>
        </div>
      </div>
    </div>
  );
};

export default PictureCard;
