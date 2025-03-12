import { FC } from "react";

import mePic from "/img/ME.jpg";
import axonsPic from "/img/axons.png";
import cpfPic from "/img/cpf.png";
import gitLogo from "/img/github-mark.svg";
import mailIcon from "/img/mail.png";
import phoneIcon from "/img/phone.png";
import ProjectCard from "../components/ProjectCard";

const Home: FC = () => {
  interface Project {
    title: String;
    pageRef: string;
    imgSrc: string;
    detail: String;
    tools: String;
  }

  const projectList: Project[] = [
    {
      title: "HotelViz",
      pageRef: "/project/HotelViz",
      imgSrc: "img/hotelviz/B.png",
      detail: "Hotel Booking Platform",
      tools:
        "Tools: React, TypeScript, Next.js, Node.js, Express.js, Redux, Jest, Cypress, Docker, Mongoose",
    },
    {
      title: "SpaceRally",
      pageRef: "/project/SpaceRally",
      imgSrc: "img/space/B.png",
      detail: "Mini Game",
      tools: "Tools: Java",
    },
    {
      title: "Scopus Research",
      pageRef: "/project/ScopusRS",
      imgSrc: "img/scopus/X.png",
      detail: "Data Analytics",
      tools: "Tools: Python, Selenium, PySpark, Plotly, Streamlit, K-Means Clustering, Power BI, Streamlit",
    },
    {
      title: "GURU",
      pageRef: "/project/Guru",
      imgSrc: "img/guru/B.png",
      detail: "Question and Answer Platform",
      tools: "Tools: JavaScript, HTML, CSS, MongoDB, Amazon AWS",
    },
  ];

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

      <div className="flex flex-col">
        <div className="text-2xl font-bold underline underline-offset-2 pb-2">
          Project
        </div>
        <div className="flex flex-nowrap gap-5 overflow-x-scroll w-full py-3">
          {projectList.map(
            ({ title, pageRef, imgSrc, detail, tools }, index) => (
              <ProjectCard
                key={index}
                title={title}
                pageRef={pageRef}
                imgSrc={imgSrc}
                detail={detail}
                tools={tools}
              />
            )
          )}
        </div>

        {/* <Link
          to="/project/HotelViz"
          className="transition-transform duration-200 hover:-translate-y-0.5"
        >
          ▪️ HotelViz 🏨
        </Link>
        <Link
          to="/project/SpaceRally"
          className="transition-transform duration-200 hover:-translate-y-0.5"
        >
          ▪️ SpaceRally 🚀
        </Link> */}
        {/* <Link to="/project/ScopusRS" className="transition-transform duration-200 hover:-translate-y-0.5">▪️ Scopus Research 📚</Link> */}
        {/* <Link
          to="/project/Guru"
          className="transition-transform duration-200 hover:-translate-y-0.5"
        >
          ▪️ Guru 🔎
        </Link> */}
      </div>

      <div className="flex flex-col gap-4 text-sm font-semibold">
        <a
          href="mailto:pannavich.tan@gmail.com"
          target="_blank"
          className="flex items-center gap-2 w-fit"
        >
          <img src={mailIcon} alt="Git logo" className="w-5" />
          <div className="underline">pannavich.tan@gmail.com</div>
        </a>
        <a
          href="https://github.com/bpantan202/"
          target="_blank"
          className="flex items-center gap-2 w-fit"
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
