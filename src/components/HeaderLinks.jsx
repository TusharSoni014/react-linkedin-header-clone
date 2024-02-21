import React from "react";

export default function HeaderLinks({ item, length }) {
  return (
    <div
      className={`__header_link flex justify-center items-center w-[80px] h-[52px] cursor-pointer relative flex-col text-white/60 transition hover:text-white`}
    >
      {item.notifications > 0 &&
        (item.notifications < 100 ? (
          <div className="__notifications absolute top-1 right-4 px-[5px] py-[1px] rounded-full bg-red-700 text-white text-[11px]">
            {item.notifications}
          </div>
        ) : (
          <div className="__notifications absolute top-1 right-3 px-[5px] py-[1px] rounded-full bg-red-700 text-white text-[11px]">
            99+
          </div>
        ))}
      <div className="__icon text-[22px]">{item.icon}</div>
      <small className="">{item.name}</small>
    </div>
  );
}
