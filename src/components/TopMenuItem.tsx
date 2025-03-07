import { Link } from "react-router-dom";

export default function TopMeunItem({
  title,
  pageRef,
}: {
  title: String;
  pageRef: string;
}) {
  return (
    <Link
      to={pageRef}
      className="flex items-center px-5 h-full text-[#4d659c] font-[Copperplate,Papyrus,fantasy] text-[20px] hover:bg-[#4d659c25]"
    >
      {title}
    </Link>
  );
}
