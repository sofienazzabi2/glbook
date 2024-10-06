import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isLoggedInSelector } from "../../store/selectors/appSelectors";
import { isMobileDevice } from "../../store/selectors/uiSelectors";
import SearchUsers from "../../modules/users/SearchUsers";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const isMobile = useSelector(isMobileDevice);
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <div className="z-[999] sticky top-0 bg-dark">
      <div className="py-4 px-6 bg-primary">
        <div className="container flex justify-between items-center gap-3">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Link
                to={isLoggedIn ? "/" : "/home"}
                className="text-xl font-bold hidden sm:block"
              >
                GLBook
              </Link>
            </div>
            {isLoggedIn && <SearchUsers />}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-slate-300" />
    </div>
  );
};

export default Header;
