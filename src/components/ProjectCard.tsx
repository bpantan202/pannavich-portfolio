import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  pageRef,
  imgSrc,
  detail,
  tools,
}: {
  title: String;
  pageRef: string;
  imgSrc: string;
  detail: String;
  tools: String;
}) {
  return (
    <Link to={pageRef} className="w-[250px] h-[350px] flex-shrink-0">
      <div className=" w-full h-full bg-gray-100 transition-transform duration-200 hover:-translate-y-0.5">
        <div className="h-[150px]">
          <img
            src={`${import.meta.env.BASE_URL}/${imgSrc}`}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="px-3 pt-2 pb-3 flex flex-col justify-between h-[200px]">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-gray-800 text-lg">{title}</div>
            <div className="text-gray-500 text-xs">{detail}</div>
            <div className="text-gray-500 text-xs">{tools}</div>
          </div>
          <button className="w-fit px-2 py-1 border  text-gray-800  hover:bg-gray-800 hover:text-[#f3f3f3] font-semibold text-xs">
            More detail ↗
          </button>
        </div>
      </div>
      ={" "}
    </Link>
  );
}
