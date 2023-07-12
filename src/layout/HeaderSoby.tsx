import logo from "../assets/svg/soby logo.svg";
import MainMenu from "../component/MainMenu";
import SocialMenu from "../component/SocialMenu";

import { t } from "i18next";
import { NavLink } from "react-router-dom";
import DrawerMenu from "../component/DrawerMenu";
import { SobyButton } from "../component/buttons";
import LangSwitcher from "../component/LangSwitcher";
const HeaderSoby = () => {
  return (
    <nav className="mx-auto xl:ps-24 xl:pe-11 pe-3 ps-3 bg-soby-light-2 sticky top-0 z-10 py-4 shadow-md">
      <div className="flex flex-1 items-center  justify-between ">
        <div className="flex flex-shrink-0 items-center md:justify-center w-auto ">
          <NavLink to="/">
            <img src={logo} alt="logo" className="lg:w-32 w-28" />
          </NavLink>
        </div>
        <div className="hidden  lg:flex xl:gap-x-6 md:gap-x-3 items-center xl:ml-6 md:ml-0">
          <MainMenu />
        </div>
        <div className="hidden  md:flex sm:gap-x-1 sm:items-center xl:ml-6 md:ml-0">
          <SocialMenu />
        </div>
        <div className="hidden  md:flex sm:gap-x-1 sm:items-center xl:ml-3 md:ml-0">
          <LangSwitcher />
        </div>
        <div className="hidden  md:flex justify-start items-center xl:ml-3 md:ml-0 ">
          <SobyButton
            title={`${t("Hire me!")}`}
            bgColor="bg-soby-yellow-light"
            textColor="text-soby-light-1"
          />
        </div>
        <div className="lg:hidden block ">
          <DrawerMenu />
        </div>
      </div>
    </nav>
  );
};

export default HeaderSoby;
