import { FC } from "react";
import { Link } from "react-router-dom";

import mePic from "/img/ME.jpg";
import axonsPic from "/img/axons.png";
import cpfPic from "/img/cpf.png";
import gitLogo from "/img/github-mark.svg";
import mailIcon from "/img/mail.png";
import phoneIcon from "/img/phone.png";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-15">
      <div className="flex flex-col gap-10 items-center md:flex-row">
        <img
          src={mePic}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover"
        />

        <div className="flex flex-col items-center md:items-start">
          <h1>Pannavich Tanyavichitkul</h1>
          <div className="font-semibold text-xl mt-6">
            Computer Engineering & Digital Technology
          </div>
          <div>Faculty of Engineering, Chulalongkorn University</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold underline underline-offset-2 pb-2">
          Experience
        </div>
        <div className="flex justify-between flex-col sm:flex-row gap-2">
          <div className="text-2xl font-bold">AXONS Corporate (CPF)</div>
          <div className="flex gap-3">
            <img
              src={axonsPic}
              alt="axons logo"
              className=" h-8 object-cover"
            />
            <img src={cpfPic} alt="cpf logo" className="h-8 object-cover" />
          </div>
        </div>
        <div className="text-lg font-semibold">Role : Frontend Developer</div>
        <div>June 2024 – July 2024</div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold underline underline-offset-2 pb-2">
          Project
        </div>
        <Link to="/project/HotelViz" className="transition-transform duration-200 hover:-translate-y-0.5">▪️ HotelViz 🏨</Link>
        <Link to="/project/SpaceRally" className="transition-transform duration-200 hover:-translate-y-0.5">▪️ SpaceRally 🚀</Link>
        {/* <Link to="/project/ScopusRS" className="transition-transform duration-200 hover:-translate-y-0.5">▪️ Scopus Research 📚</Link> */}
        <Link to="/project/Guru" className="transition-transform duration-200 hover:-translate-y-0.5">▪️ Guru 🔎</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm font-semibold">
        <a
          href="mailto:pannavich.tan@gmail.com"
          target="_blank"
          className="flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <img src={mailIcon} alt="Git logo" className="w-5" />
          <div className="underline">pannavich.tan@gmail.com</div>
        </a>
        <a
          href="https://github.com/bpantan202/"
          target="_blank"
          className="flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <img src={gitLogo} alt="Git logo" className="w-5" />
          <div className="underline">https://github.com/bpantan202/</div>
        </a>
        <div className="flex items-center gap-2">
          <img src={phoneIcon} alt="Git logo" className="w-5" />
          <div>098-824-7373</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
