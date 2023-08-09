import { useEffect, useState } from "react";
import { base_url } from "../../utils/api";
import Notice from "../Notice";
import { NoticeType } from "../noticeSampleData";

const NoticeSection = () => {
  const [noticeData, setNoticeData] = useState<NoticeType[]>([]);
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

  useEffect(() => {
    fetchNoticeData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="relative flex flex-col md:flex-row justify-center gap-6 lg:gap-20 ">
          <Notice noticeData={noticeData} noticeTitle="Latest Notifications" />

          <Notice noticeData={noticeData} noticeTitle="Quick Links" />
        </div>
      )}
    </>
  );
};

export default NoticeSection;
