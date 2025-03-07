import { FC } from "react";

import gitLogo from "/img/github-mark.svg";
import imgA from "/img/guru/A.png";
import imgB from "/img/guru/B.png";
import imgC from "/img/guru/C.png";

const Guru: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1>GURU: Question and Answer Platform</h1>
        <hr className="mt-5" />
      </div>
      <h2 className="flex">
        <div className="font-bold mr-1">Tools:</div>
        JavaScript, HTML, CSS, MongoDB, Amazon AWS
      </h2>
      <div>
        "GURU" is a website designed for asking, sharing, and exchanging
        knowledge. Users can post questions on the platform, allowing others to
        respond and engage in discussions. Everyone can view existing questions
        and answers, making it a collaborative space for knowledge exchange.
      </div>

      <div>
        <div className="font-bold text-xl mb-2">Main Page</div>
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-0">
          <img src={imgA} className="w-full sm:w-2/5 object-contain sm:pr-5" />
          <img src={imgB} className="w-full sm:w-3/5 h-auto object-contain" />
        </div>
      </div>

      <div>
        <div className="font-bold text-xl mb-2">
          How to View & Reply Question
        </div>
        <img src={imgC} className="w-full object-contain" />
      </div>

      <div>
        <a
          href="https://github.com/bpantan202/GURU-Question-and-Answer-Platform.git"
          target="_blank"
          className="flex flex-row items-center gap-1.5"
        >
          <img src={gitLogo} alt="Git logo" className="w-5 object-contain" />
          <div className="font-semibold text-sm underline underline-offset-1">
            https://github.com/bpantan202/GURU-Question-and-Answer-Platform.git
          </div>
        </a>
      </div>
    </div>
  );
};

export default Guru;
