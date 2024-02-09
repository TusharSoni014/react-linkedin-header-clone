import React from "react";
import { FaLinkedin, FaSearch } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { HiUsers } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { TbBellRinging2Filled } from "react-icons/tb";
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
  ];
  return (
    <div className="__header h-[52px] bg-[#1B1F23] px-16 flex justify-between items-center">
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
      <div className="__right flex justify-center items-center">
        {headerIcons.map((item) => {
          return <HeaderLinks item={item} />;
        })}
      </div>
    </div>
  );
}
