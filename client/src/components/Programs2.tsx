type Programs2Props = {
  url?: string;
  title: string;
  desc: string;
};

const Programs2 = ({ title, desc }: Programs2Props) => {
  return (
    <div
      className="flex flex-col md:flex-row md:space-x-4 md:space-y-0
    space-y-2 bg-slate-400/20 hover:bg-slate-400/30 rounded-3xl p-6 md:p-8 lg:p-10 max-w-[600px] 
    transition-all duration-500 ease-in-out hover:-translate-y-2 hover:cursor-pointer group"
    >
      {/* image (removed)*/}
      <div className="space-y-2 ">
        {/* <div className="w-32 md:w-full">
          <img src={url} height={300} width={300} alt={title} loading="lazy" />
        </div> */}

        <h1 className="text-2xl font-medium group-hover:font-semibold   ">{title}</h1>
        <div className="h-1 bg-teal-400 w-[30%] md:w-[45%] lg:w-[80%] transition-all duration-500 ease-in-out group-hover:w-[40%] md:group-hover:w-[90%] lg:group-hover:w-[90%]"></div>
      </div>
      {/* description */}
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Programs2;
