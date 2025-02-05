import React from "react";

export default function IconWithNotification({
  Icon,
  number,
  showNotification,
}) {
  return (
    <div className="relative">
      <Icon />
      {number === undefined ? (
        ""
      ) : (
        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
          {number}
        </div>
      )}
    </div>
  );
}
