
type LinkType = {
    _id: string;
    title: string;
    link: string;
    createdAt: string;
    updatedAt: string;
};

type NoticeType = {
    _id: string;
    title: string;
    link?: string;
    date?: string;
};

export type { LinkType, NoticeType };