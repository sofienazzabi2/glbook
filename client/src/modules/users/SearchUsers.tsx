import Tippy from "@tippyjs/react";
import IUser from "../../interfaces/IUser";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { userImageUrl } from "../../services/api";
import { useGetUsers } from "./apiClient";
import "./SearchUsers.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchUsers = () => {
  const [search, setSearch] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [innerSearch, setInnerSearch] = useState("");

  const { data: users = [] } = useGetUsers(search === "" ? null : search);

  const inputRef = useRef<HTMLInputElement>(null);

  const hideDropdown = useCallback(() => {
    setIsDropdownVisible(false);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const debouncedOnChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
    },
    500
  );

  const onInnerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInnerSearch(e.target.value);
      debouncedOnChange(e);
    },
    [debouncedOnChange]
  );

  useEffect(() => {
    if (search === "") {
      hideDropdown();
    } else {
      setIsDropdownVisible(true);
    }
  }, [hideDropdown, search]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="search-users-form flex-grow relative max-w-xl"
    >
      <Tippy
        interactive={true}
        visible={isDropdownVisible}
        theme="transparent"
        appendTo="parent"
        placement="bottom"
        onClickOutside={() => {
          hideDropdown();
        }}
        className="w-full text-black"
        maxWidth="none"
        content={<DropdownContent hideDropdown={hideDropdown} users={users} />}
      >
        <div className="relative">
          <div className="absolute text-xl top-[9px] left-[10px]">
            <AiOutlineSearch />
          </div>
          <input
            ref={inputRef}
            onChange={onInnerChange}
            value={innerSearch}
            onFocus={() => {
              if (!search) return;
              setIsDropdownVisible(true);
            }}
            className="bg-dark text-black placeholder:text-gray-500 pe-4 ps-10 py-2 rounded-full border-black text-md w-full p-1 appearance-none focus:ring-1 ring-secondary outline-none "
            placeholder="Search for users..."
          />
        </div>
      </Tippy>
    </form>
  );
};

export default SearchUsers;
type DropdownContentProps = {
  users: IUser[];
  hideDropdown: () => void;
};

const DropdownContent: React.FC<DropdownContentProps> = ({
  users,
  hideDropdown,
}) => {
  return (
    <div
      className="bg-primary-darker rounded-md
     text-black p-5 max-h-[300px] overflow-auto shadow-md shadow-primary"
    >
      {users.length === 0 && <p>No results found</p>}
      <ul className="space-y-3">
        {users.map((user) => (
          <UserItem key={user._id} user={user} hideDropdown={hideDropdown} />
        ))}
      </ul>
    </div>
  );
};

const UserItem = ({
  user,
  hideDropdown,
}: {
  user: IUser;
  hideDropdown: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => {
        hideDropdown();
        navigate(`/profile/${user._id}`);
      }}
    >
      <img
        className="w-8 h-8 rounded-full"
        src={userImageUrl(user._id)}
        alt="profile"
      />
      <p>{user.fullName}</p>
    </div>
  );
};
