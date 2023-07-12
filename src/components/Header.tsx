import React from "react";
import Image from "next/image";
import facebook from "../assets/facebook1.png";
import { MdHome, MdGroups } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage, AiOutlineShop } from "react-icons/ai";
import sheva from "../assets/sheva .png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between border-b px-4">
      {/* left  */}
      <div className="flex items-center mr-2">
        <div className="w-10 h-10">
          <Image src={facebook} alt={"facebook logo"} />
        </div>
        <div className="ml-2 ">
          <input
            type="text"
            placeholder="Search Facebook"
            className="outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4 hidden sm:block"
          />
        </div>
      </div>
      {/* middle */}
      <div className="mr-24 flex items-center [&>*]:w-28 [&>*]:h-14 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-slate-500 [&>*]:cursor-pointer ">
        <div>
          <MdHome className="w-9 h-9" />
        </div>
        <div>
          <FiPlayCircle className="w-7 h-7" />
        </div>
        <div>
          <AiOutlineShop className="w-9 h-9" />
        </div>
        <div>
          <FiFlag className="w-7 h-7" />
        </div>
        <div>
          <MdGroups className="w-9 h-9" />
        </div>
      </div>
      {/* right */}
      <div className="flex space-x-6 items-center ml-0">
        <div className="md:flex space-x-6 hidden  ">
          <GrAppsRounded className="w-7 h-7" />
          <AiOutlineMessage className="w-7 h-7" />
          <FaBell className="w-7 h-7" />
        </div>

        <div className="w-10 h-10 ">
          <Image src={sheva} className="rounded-full" alt={"profile picture"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
