import { useEffect, useState } from "react";
import { base_url } from "../../utils/api";
import Notice from "../Notice";
import { LinkType, NoticeType } from "../../utils/typings";
import QuickLinks from "../QuickLinks";

const NoticeSection = () => {
  const [noticeData, setNoticeData] = useState<NoticeType[]>([]);
  const [linkData, setLinkData] = useState<LinkType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNoticeData = async () => {
    try {
      const res = await fetch(`${base_url}/get/notice`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setNoticeData(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching notices:", err);
    }
  };

  const fetchLinkData = async () => {
    try {
      const res = await fetch(`${base_url}/get/link`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setLinkData(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching links:", err);
    }
  };

  useEffect(() => {
    fetchNoticeData();
    fetchLinkData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="relative flex flex-col md:flex-row justify-center gap-6 lg:gap-20 ">
          <Notice noticeData={noticeData} noticeTitle="Latest Notifications" />

          <QuickLinks linkData={linkData} linkTitle="Quick Links" />
        </div>
      )}
    </>
  );
};

export default NoticeSection;
