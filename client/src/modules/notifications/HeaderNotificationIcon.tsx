import Tippy from "@tippyjs/react";
import { useState } from "react";
import { AiTwotoneBell } from "react-icons/ai";
import useNotificationsContext from "./context/notificationsContext";
import NotificationsDropdown from "./NotificationsDropdown";

import "./NotificationsDropdown.scss";

const HeaderNotificationIcon = ({
  iconClassName,
  text,
}: {
  iconClassName?: string;
  text?: string;
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const { totalUnseen } = useNotificationsContext();

  return (
    <Tippy
      className="notifications-dropdown"
      theme="transparent"
      visible={isDropdownVisible}
      interactive
      placement="bottom-start"
      arrow={false}
      onClickOutside={() => {
        setIsDropdownVisible(false);
      }}
      content={
        <NotificationsDropdown
          closeDropdown={() => {
            setIsDropdownVisible(false);
          }}
        />
      }
    >
      <div
        className="flex gap-2"
        onClick={() => setIsDropdownVisible((prev) => !prev)}
      >
        <div className="relative">
          <div className="flex items-center justify-center rounded-full bg-red-600 h-4 w-4 absolute -top-2 -right-1">
            <span className="text-xs text-white">{totalUnseen}</span>
          </div>
          <AiTwotoneBell className={iconClassName} />
        </div>
        {text && <p>{text}</p>}
      </div>
    </Tippy>
  );
};

export default HeaderNotificationIcon;
