import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1>404 Not Found 😿</h1>
      <Link to="/">
        <button className="px-6 py-2 border bg-white text-gray-800 rounded hover:bg-gray-800 hover:text-white font-bold">
          Back to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
