//images for events
import aki1 from "../../assets/life/Aikido/img1.webp";
import aki2 from "../../assets/life/Aikido/img2.webp";
import aki3 from "../../assets/life/Aikido/img3.webp";
import aki4 from "../../assets/life/Aikido/img4.webp";
import aki5 from "../../assets/life/Aikido/img5.webp";
import aki6 from "../../assets/life/Aikido/img6.webp";
import exec1 from "../../assets/life/EXECUTIVE COUNCIL MEETING/firstecmeeting.webp"
import exec2 from "../../assets/life/EXECUTIVE COUNCIL MEETING/vc in pre fc meet with gp upadhya.webp"
import exec3 from "../../assets/life/EXECUTIVE COUNCIL MEETING/3rd ec meeting.webp";
import exec4 from "../../assets/life/EXECUTIVE COUNCIL MEETING/staff n officials.webp"
import dept1 from "../../assets/life/M.A. SANSKRIT FAREWELL/dept1.webp";
import dept2 from "../../assets/life/M.A. SANSKRIT FAREWELL/dept2.webp";
import dept3 from "../../assets/life/M.A. SANSKRIT FAREWELL/dept3.webp";
import swach1 from "../../assets/life/Swach Bharat Abhiyan1/img1.webp";
import swach2 from "../../assets/life/Swach Bharat Abhiyan1/img2.webp";

export type carouselImgData = {
    id: number,
    title: string,
    link: string
}

const AikidoData: carouselImgData[] = [
    {
        id: 1,
        title: "Akido",
        link: aki1
    },
    {
        id: 2,
        title: "Akido",
        link: aki2
    },
    {
        id: 3,
        title: "Akido",
        link: aki3
    },
    {   
        id: 4,
        title: "Akido",
        link: aki4
    },
    {
        id: 5,
        title: "Akido",
        link: aki5
    },
    {
        id: 6,
        title: "Akido",
        link: aki6
    }
]

const execMeetingData: carouselImgData[] = [
    {
        id: 1,
        title: "Exec Meeting",
        link: exec1
    },
    {
        id: 2,
        title: "Exec Meeting",
        link: exec2
    },
    {
        id: 3,
        title: "Exec Meeting",
        link: exec3
    },
    {
        id: 4,
        title: "Exec Meeting",
        link: exec4
    }
]

const deptData: carouselImgData[] = [
    {
        id: 1,
        title: "Dept",
        link: dept1
    },
    {
        id: 2,
        title: "Dept",
        link: dept2
    },
    {
        id: 3,
        title: "Dept",
        link: dept3
    }
]

const swachData: carouselImgData[] = [
    {
        id: 1,
        title: "Swach",
        link: swach1
    },
    {
        id: 2,
        title: "Swach",
        link: swach2
    }
]

export {
    AikidoData,
    execMeetingData,
    deptData,
    swachData
}