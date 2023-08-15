import { TrashIcon } from "@heroicons/react/24/solid";
import { NoticeType } from "./noticeSampleData";
import { base_url } from "../utils/api";

type NoticeProps = {
  noticeData: NoticeType[];
  noticeTitle: string;
};

const Notice = ({ noticeData, noticeTitle }: NoticeProps) => {

  const deleteNotice = async (id: string) => {
    try {
      const res = await fetch(`${base_url}/delete/notice/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error deleting notice:", err);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className=" border-b-2 border-gray-300 bg-[#082F49] rounded-t-3xl
        p-2"
      >
        <h1 className="text-center font-semibold text-gray-100 text-2xl">
          {noticeTitle}
        </h1>
      </div>
      <div className="bg-sky-100 max-h-[250px] md:max-h-[400px] overflow-y-scroll scrollbar-thin">
        {noticeData.map((notice) => {
          return (
            <div
              className="flex justify-between px-2 py-2 items-center"
              key={notice._id}
            >
              <div
                className="border-b-[1px] border-gray-300
                        px-4 py-1 cursor-pointer hover:bg-[#082F49]/10 transition duration-300
                        w-[90%] rounded-lg"
                onClick={() => {
                  notice.link ? window.open(notice.link, "_blank") : null;
                }}
              >
                <h1 className=" text-gray-950 text-md">{notice.title}</h1>
                <p className="text-end text-gray-600 text-sm">{notice.date}</p>
              </div>
              <TrashIcon
                className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-600 transition-all
              duration-300"
                onClick={() => {
                  deleteNotice(notice._id);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="bg-[#082F49] py-4 rounded-b-3xl"></div>
    </div>
  );
};

export default Notice;
