import React from "react";
import { FaLinkedin, FaSearch, FaUserCircle } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { HiUsers } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { TbBellRinging2Filled } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import HeaderLinks from "./HeaderLinks";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotifications,
} from "../atoms";

export default function Header() {
  const networkNotifications = useRecoilValue(networkAtom);
  const jobsNotifications = useRecoilValue(jobsAtom);
  const notificationsNotifications = useRecoilValue(notificationsAtom);
  const [messagingNotifications, setMessagingNotifications] =
    useRecoilState(messagingAtom);
  const totalNotificationsCount = useRecoilValue(totalNotifications);

  const headerIcons = [
    {
      name: "Home",
      icon: <TiHome />,
      notifications: 0,
    },
    {
      name: "My Network",
      icon: <HiUsers />,
      notifications: networkNotifications,
    },
    {
      name: "Jobs",
      icon: <BsFillBriefcaseFill />,
      notifications: jobsNotifications,
    },
    {
      name: "Messaging",
      icon: <RiMessage2Fill />,
      notifications: notificationsNotifications,
    },
    {
      name: "Notifications",
      icon: <TbBellRinging2Filled />,
      notifications: messagingNotifications,
    },
    {
      name: "Me ▼",
      icon: <FaUserCircle />,
      notifications: totalNotificationsCount,
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
          {headerIcons.map((item, index) => {
            return <HeaderLinks key={index} length={80} item={item} />;
          })}
        </div>
        <div className="__extra px-4 flex gap-2">
          <div
            className={`__header_link flex justify-center items-center w-[90px] h-[52px] cursor-pointer relative flex-col text-white/60 transition hover:text-white`}
          >
            {business.notifications > 0 &&
              (business.notifications < 100 ? (
                <div className="__notifications absolute top-1 right-4 px-[5px] py-[1px] rounded-full bg-red-700 text-white text-[11px]">
                  {business.notifications}
                </div>
              ) : (
                <div className="__notifications absolute top-1 right-3 px-[5px] py-[1px] rounded-full bg-red-700 text-white text-[11px]">
                  99+
                </div>
              ))}
            <div className="__icon text-[22px]">{business.icon}</div>
            <small className="">{business.name}</small>
          </div>
          <div
            onClick={() => setMessagingNotifications((val) => val + 1)}
            className="__premium text-yellow-600 text-xs w-[100px] flex justify-center items-center text-center underline cursor-pointer hover:text-yellow-400"
          >
            Learn New Skills with Premium
          </div>
        </div>
      </div>
    </div>
  );
}
