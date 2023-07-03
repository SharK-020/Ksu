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
    <div className="flex flex-col items-center p-4 space-y-2
    bg-slate-400/20 rounded-3xl w-48 hover:bg-teal-500/10
    transition duration-500">
      <div className="">
      <img className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover "
            src={image}
            alt="faculty image"
            loading="lazy"
            />
      </div>
      <div className="text-center leading-snug block">
        <h3 className="font-medium">{name}</h3>
        <h4 className="text-sm">{designation}</h4>
        <h4 className="text-xs text-blue-600">{contact}</h4>
      </div>
    </div>
  )
}

export default FacultyCard