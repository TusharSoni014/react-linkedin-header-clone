import React from "react";

export default function HeaderLinks({ item, length }) {
  return (
    <div
      className={`__header_link flex justify-center items-center w-[${
        length ? length : "80px"
      }] h-[52px] cursor-pointer relative flex-col text-white/60 transition hover:text-white`}
    >
      <div className="__icon text-[22px]">{item.icon}</div>
      <small className="">{item.name}</small>
    </div>
  );
}
