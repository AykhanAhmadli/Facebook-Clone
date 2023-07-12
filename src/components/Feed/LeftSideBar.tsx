import React from "react";

import guy from "../assets/guy7.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  AiOutlineDesktop,
  AiFillClockCircle,
  AiOutlineShop,
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import nouser from "../assets/nouser.png";
import { FiFlag, FiPlayCircle } from "react-icons/fi";
import sheva from "../../assets/sheva .png";

type Props = {};

const LeftSideBar = (props: Props) => {
  return (
    <div className="w-[13rem] hidden sm:block">
      <div className="flex flex-col pt-4 pl-4 align-center">
        <div className="space-y-6 [&>*]:flex [&>*]:items-center [&>*]:cursor-pointer  ">
          <div className="flex items-center ">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={sheva}
                className="rounded-full w-8 h-8"
                alt={"profile picture"}
              />
            </div>
            <p className="ml-2">Aykhan Ahmadli</p>
          </div>

          <div className="">
            <div className="w-10 h-10 flex items-center justify-center">
              <BsPeopleFill className="w-7 h-7 text-face-blue" />
            </div>
            <p className="ml-2">Friends</p>
          </div>
          <div className="">
            <div className="w-10 h-10 flex items-center justify-center">
              <MdGroups className="w-8 h-8 text-face-blue" />
            </div>
            <p className="ml-2">Groups</p>
          </div>
          <div className="">
            <div className="w-10 h-10 flex items-center justify-center">
              <AiOutlineShop className="w-9 h-9 text-face-blue" />
            </div>
            <p className="ml-2">Marketplace</p>
          </div>
          <div className="">
            <div className="w-10 h-10 flex items-center justify-center">
              <FiFlag className="w-7 h-7 text-face-blue" />
            </div>
            <p className="ml-2">Saved</p>
          </div>
          <div className="">
            <div className="w-10 h-10 flex items-center justify-center">
              <FiPlayCircle className="w-8 h-8 text-face-blue" />
            </div>
            <p className="ml-2">Watch</p>
          </div>
          {/* <div className="flex items-center">
          <AiFillClockCircle className="w-8 h-8" />
          <p className="ml-2 font-bold">Memories</p>
        </div> */}
          <div className="">
            <div className="w-10 h-10 flex items-center justify-center">
              <RiArrowDownSLine className="w-8 h-8" />
            </div>
            <p className="ml-2 ">See More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
