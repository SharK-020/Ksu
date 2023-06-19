type Programs2Props = {
  url: string;
  title: string;
  desc: string;
};

const Programs2 = ({ url, title, desc }: Programs2Props) => {
  return (
    <div
      className="flex flex-col md:flex-row md:space-x-4 md:space-y-0
    space-y-2 bg-slate-400/30 rounded-3xl p-6 md:p-10 max-w-[600px] "
    >
      {/* image */}
      <div className="space-y-2">
        <div className="w-32 md:w-full">
          <img src={url} height={300} width={300} />
        </div>

        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      {/* description */}
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Programs2;
