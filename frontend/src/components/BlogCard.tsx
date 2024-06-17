import { Link } from "react-router-dom";
interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="p-4 pb-4 border-b w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
        
            <Avatar name={authorName} /> 
        
            <div className="px-1 text-sm">{authorName}</div>
            <div className="flex flex-col justify-center">
                <Circle />
            </div>
            <div className="text-slate-500 pl-1 text-sm">{publishedDate}</div>
        </div>

        <div className="text-xl font-semibold ">
            {title}
        </div>

        <div>
            {content.slice(0, 100) + "..."}
        </div>

        <div className="text-slate-500 text-xs pt-7">
            {`${Math.ceil(content.length/100)} min read`}
        </div>
    </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "small"? "w-6 h-6": "w-8 h-8"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className={`text-xs text-gray-600 dark:text-gray-300 ${size === "small"? "text-xs": "text-md"}`}>{name[0]}</span>
</div>
}

export function Circle() {
    return <div className="relative inline-flex items-center justify-center w-0.5 h-0.5 overflow-hidden bg-gray-100 rounded-full dark:b-slate-500">
    </div>
}