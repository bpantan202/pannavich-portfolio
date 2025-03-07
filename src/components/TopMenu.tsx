import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="flex fixed top-0 left-0 w-full h-[50px] items-center shadow-md bg-white">
      <div>
        <TopMenuItem title="🏠 Home" pageRef="/" />
      </div>
      {/* <div>
        <TopMenuItem title="MeowLog" pageRef="/meowlog" />
      </div> */}
    </div>
  );
}
