import { FC } from "react";

import gitLogo from "/img/github-mark.svg";
import imgA from "/img/hotelviz/A.png";
import imgB from "/img/hotelviz/B.png";
import imgC from "/img/hotelviz/C.png";
import imgD from "/img/hotelviz/D.png";
import imgE from "/img/hotelviz/E.png";
import imgF from "/img/hotelviz/F.png";
import imgG from "/img/hotelviz/G.png";
import imgH from "/img/hotelviz/H.png";

const HotelViz: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex">
        <h1>HotelViz: Hotel Booking Platform</h1>
      </div>
      <h2 className="flex">
        <div className="font-bold mr-1">Tools:</div>
        React, TypeScript, Next.js, Node.js, Express.js, Redux, Jest, Cypress,
        Docker, Mongoose
      </h2>
      <div>
        HotelViz is a hotel booking system designed for travelers and members,
        providing a seamless experience from registration to booking management.
        Users can register, log in, and book hotels for up to three nights while
        accessing a list of available accommodations with details such as name,
        address, and contact information. The system allows users to filter
        hotels by location, price range, amenities, and user ratings to find the
        best options for their needs.
        <span className="block mb-4" />
        Members enjoy exclusive benefits, including discounts based on
        membership tiers or coupons, the ability to earn points with each
        booking, and the opportunity to upgrade their membership status for
        additional perks. A dedicated admin panel enables administrators to
        manage hotel bookings efficiently.
        <span className="block mb-4" />
        This platform allowing travelers to customize their search, manage
        reservations, and maximize rewards, making hotel booking convenient and
        rewarding.
      </div>

      <div>
        <div className="font-bold text-xl mb-2">Front Page</div>
        <img src={imgA} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Main Page</div>
        <img src={imgB} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Create Booking</div>
        <img src={imgC} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Manage Booking Page</div>
        <img src={imgD} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Manage Hotel Page (For Admin)</div>
        <img src={imgE} className="w-full object-contain" />
        <div className="flex flex-col gap-5 pt-5 sm:flex-row sm:gap-0">
          <img src={imgF} className="w-full sm:w-1/2 object-contain sm:pr-3" />
          <img src={imgG} className="w-full sm:w-1/2 object-contain sm:pl-3" />
        </div>
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Member Page</div>
        <img src={imgH} className="w-full object-contain" />
      </div>

      <div className="w-12">
        <a
          href="https://github.com/bpantan202/HotelViz.git"
          target="_blank"
          className="w-8"
        >
          <img src={gitLogo} alt="Git logo" />
        </a>
      </div>
    </div>
  );
};

export default HotelViz;
