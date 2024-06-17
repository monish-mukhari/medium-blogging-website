import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="p-4 pb-4 border-b w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
        
        <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
        
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="flex flex-col justify-center">
                <Circle />
            </div>
            <div className="text-slate-500 pl-1 text-sm"><div className="h-2 bg-gray-200 rounded-full mb-2.5"></div></div>
        </div>

        <div className="text-xl font-semibold ">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>

        <div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>

        <div className="text-slate-500 text-xs pt-7">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}