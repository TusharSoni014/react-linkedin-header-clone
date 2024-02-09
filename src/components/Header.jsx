import React from "react";
import { FaLinkedin, FaSearch, FaUserCircle } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { HiUsers } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { TbBellRinging2Filled } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  const headerIcons = [
    {
      name: "Home",
      icon: <TiHome />,
      notifications: 0,
    },
    {
      name: "My Network",
      icon: <HiUsers />,
      notifications: 99,
    },
    {
      name: "Jobs",
      icon: <BsFillBriefcaseFill />,
      notifications: 2,
    },
    {
      name: "Messaging",
      icon: <RiMessage2Fill />,
      notifications: 5,
    },
    {
      name: "Notifications",
      icon: <TbBellRinging2Filled />,
      notifications: 3,
    },
    {
      name: "Me ▼",
      icon: <FaUserCircle />,
      notifications: 3,
    },
  ];
  const business = {
    name: "For Business ▼",
    icon: <BsFillGrid3X3GapFill />,
    notifications: 0,
  };
  return (
    <div className="__header border-b-[1px] border-slate-700 h-[52px] bg-[#1B1F23] px-16 flex justify-between items-center">
      <div className="__left flex gap-2">
        <FaLinkedin className="text-4xl" />
        <div className="__search_box w-[280px] rounded bg-gray-700 flex justify-start items-center">
          <FaSearch className=" w-6 mx-2" />
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent outline-none w-full h-full"
          />
        </div>
      </div>
      <div className="__right_parent flex">
        <div className="flex justify-center items-center border-r-[1px] border-slate-700">
          {headerIcons.map((item) => {
            return <HeaderLinks item={item} />;
          })}
        </div>
        <div className="__extra px-4 flex gap-2">
          <HeaderLinks length={"90px"} item={business} />
          <div className="__premium text-yellow-600 text-xs w-[100px] flex justify-center items-center text-center underline cursor-pointer hover:text-yellow-400">
            Learn New Skills with Premium
          </div>
        </div>
      </div>
    </div>
  );
}
