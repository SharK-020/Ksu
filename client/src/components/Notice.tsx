import {
  CheckIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { base_url } from "../utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../state/rootRecucer";
import toast from "react-hot-toast";
import { useState } from "react";
import { NoticeType } from "../utils/typings";

type NoticeProps = {
  noticeData: NoticeType[];
  noticeTitle: string;
};

const Notice = ({ noticeData, noticeTitle }: NoticeProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newDate, setNewDate] = useState("");

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.token !== null
  );

  //add notice
  const addNotice = async () => {
    if (!newTitle || !newDate) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch(`${base_url}/create/notice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title: newTitle, date: newDate}),
        
      });
      const data = await res.json();
      console.log(data);
      toast.success("Notice added successfully");
    } catch (err) {
      console.error("Error adding notice:", err);
      toast.error("Error adding notice");
    }
  };


//delete notice
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
      toast.success("Notice deleted successfully");
    } catch (err) {
      console.error("Error deleting notice:", err);
      toast.error("Error deleting notice");
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className=" border-b-2 border-gray-300 bg-[#082F49] rounded-t-3xl
        p-2"
      >
        <div className="flex justify-between px-1 relative">
          <h1 className="text-center font-semibold text-gray-100 text-2xl mx-auto">
            {noticeTitle}
          </h1>
          { isLoggedIn && (
          <button>
            <PlusIcon
              className={`h-8 w-8 cursor-pointer transition-all duration-300 text-white
            rounded-lg select-none ${
              isEditing ? "rotate-45 bg-red-600" : "bg-green-600 "
            }
          `}
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            />
          </button>
          )}
          {isEditing && isLoggedIn && (
            <div
              className="absolute w-fit block bg-slate-700 px-6 pb-6 pt-2 rounded-lg
            top-12 left-[20%]"
            >
              <h1 className="text-gray-100 text-lg font-semibold mb-2">
                Add Notice
              </h1>
              <form className="w-min space-y-4">
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-lg p-1"
                  placeholder="Title"
                  value={newTitle}
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-lg p-1"
                  placeholder="Link"
                  value={newLink}
                  onChange={(e) => {
                    setNewLink(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-lg p-1"
                  placeholder="Date"
                  value={newDate}
                  onChange={(e) => {
                    setNewDate(e.target.value);
                  }}
                />
                <button type="submit"
                onClick={()=>{
                  addNotice();
                  isEditing && setIsEditing(false);
                }}
                >
                  <CheckIcon className="h-8 w-8 text-gray-100 bg-green-600" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="bg-sky-100 max-h-[250px] md:max-h-[400px] overflow-y-scroll scrollbar-thin">
        {noticeData.map((notice) => {
          return (
            <div
              className="flex justify-between items-center px-2 py-2"
              key={notice._id}
            >
              <div
                className={`border-b-[1px] border-gray-300
                        px-4 py-1 cursor-pointer hover:bg-[#082F49]/10 transition duration-300
                        rounded-lg ${isLoggedIn ? "w-[90%]" : "w-full"}`}
                onClick={() => {
                  notice.link ? window.open(notice.link, "_blank") : null;
                }}
              >
                <h1 className=" text-gray-950 text-md">{notice.title}</h1>
                <p className="text-end text-gray-600 text-sm">{notice.date}</p>
              </div>
              {isLoggedIn && (
                <TrashIcon
                  className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-600 transition-all
              duration-300"
                  onClick={() => {
                    deleteNotice(notice._id);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-[#082F49] py-4 rounded-b-3xl"></div>
    </div>
  );
};

export default Notice;
