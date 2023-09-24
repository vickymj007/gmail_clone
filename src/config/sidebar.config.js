import {Inbox, StarOutline, SendOutlined, InsertDriveFileOutlined, DeleteOutlined, MailOutlined } from '@mui/icons-material';


export const SIDEBAR_DATA = [
    {
        name:"inbox",
        title:"Inbox",
        icon: Inbox,
        route:"/"
    },
    {
        name:"starred",
        title:"Starred",
        icon: StarOutline,
        route:"/starred"
    },
    {
        name:"sent",
        title:"Sent",
        icon: SendOutlined,
        route:"/sent"
    },
    {
        name:"drafts",
        title:"Drafts",
        icon: InsertDriveFileOutlined,
        route:"/drafts"
    },
    {
        name:"trash",
        title:"Trash",
        icon: DeleteOutlined,
        route:"/trash"
    },
    {
        name:"important",
        title:"Important",
        icon: MailOutlined,
        route:"/important"
    },
]