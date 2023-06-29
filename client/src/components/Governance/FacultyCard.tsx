//card component for faculty members

type FacultyCardProps = {
  image: string;
  name: string;
  designation: string;
  contact: string;
}

const FacultyCard = ({
  image,
  name,
  designation,
  contact
}: FacultyCardProps) => {
  return (
    <div className="">
      <div>
        <img src={image} alt="photo" />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{designation}</h4>
        <h4>{contact}</h4>
      </div>
    </div>
  )
}

export default FacultyCard