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
import { LinkType } from "../utils/typings";
  
  type LinkProps = {
    linkData: LinkType[];
    linkTitle: string;
  };
  
  const QuickLinks = ({ linkData, linkTitle }: LinkProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newLink, setNewLink] = useState("");

    const isLoggedIn = useSelector(
      (state: RootState) => state.auth.token !== null
    );

    const token = useSelector((state: RootState) => state.auth.token);
  
    //add link
    const addLink = async () => {
      if (!newTitle || !newLink) {
        toast.error("Please fill all the fields");
        return;
      }
      try {
        const res = await fetch(`${base_url}/create/link`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
          },
          body: JSON.stringify({title: newTitle, link: newLink}),
          
        });

        toast.success("Link added successfully");
      } catch (err) {
        console.error("Error adding Link:", err);
        toast.error("Error adding Link");
      }
    };
  
  
  //delete Link
    const deleteLink = async (id: string) => {
      try {
        const res = await fetch(`${base_url}/delete/link/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        toast.success("link deleted successfully");
      } catch (err) {
        console.error("Error deleting link:", err);
        toast.error("Error deleting link");
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
              {linkTitle}
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
            {isEditing && (
              <div
                className="absolute w-fit block bg-slate-700 px-6 pb-6 pt-2 rounded-lg
              top-12 left-[20%]"
              >
                <h1 className="text-gray-100 text-lg font-semibold mb-2">
                  Add Link
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
                    <h1>
                        Date: {new Date().toLocaleDateString()}
                    </h1>
                  <button type="button"
                  onClick={()=>{
                        addLink();
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
          {linkData.map((link) => {
            return (
              <div
                className="flex justify-between items-center px-2 py-2"
                key={link._id}
              >
                <div
                  className={`border-b-[1px] border-gray-300
                          px-4 py-1 cursor-pointer hover:bg-[#082F49]/10 transition duration-300
                          rounded-lg ${isLoggedIn ? "w-[90%]" : "w-full"}`}
                  onClick={() => {
                    link.link ? window.open(link.link, "_blank") : null;
                  }}
                >
                  <h1 className=" text-gray-950 text-md">{link.title}</h1>
                  <p className="text-end text-gray-600 text-sm">{link.createdAt.slice(0, 10)}</p>
                </div>
                {isLoggedIn && (
                  <TrashIcon
                    className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-600 transition-all
                duration-300"
                    onClick={() => {
                      deleteLink(link._id);
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
  
  export default QuickLinks;
  