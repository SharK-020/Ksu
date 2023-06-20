type Programs2Props = {
  url: string;
  title: string;
  desc: string;
};

const Programs2 = ({ url, title, desc }: Programs2Props) => {
  return (
    <div
      className="flex flex-col md:flex-row md:space-x-4 md:space-y-0
    space-y-2 bg-slate-400/20 hover:bg-slate-400/30 rounded-3xl p-6 md:p-10 max-w-[600px] 
    transition-all duration-500 ease-in-out hover:-translate-y-2"
    >
      {/* image */}
      <div className="space-y-2">
        <div className="w-32 md:w-full">
          <img src={url} height={300} width={300} alt={title} />
        </div>

        <h1 className="text-xl font-bold">{title}</h1>
        <div className="h-1 bg-teal-400 w-[30%] "></div>
      </div>
      {/* description */}
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Programs2;
