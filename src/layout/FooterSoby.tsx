import logo from "../assets/svg/soby logo.svg";
import { NavLink } from "react-router-dom";
import SocialMenuLight from "../component/SocialMenuLight";
import { t } from "i18next";
import QuickMenu from "../component/QuickMenu";
const FooterSoby = () => {
    return (
        <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-18  bg-soby-gray-light-5 bg-opacity-20 py-10  xl:ps-24 xl:pe-11 pe-3 ps-3">
                <div className="flex flex-col gap-y-6">
                    <NavLink to="/">
                        <img src={logo} alt="logo" className="w-32" />
                    </NavLink>
                    <p className="xl:text-lg  text-xs  text-soby-dark-2  before:mx-1 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit voluptates, officia quam ratione mollitia sed possimus alias? Vitae delectus itaque rem et eum illo laudantium dolor, veniam error deleniti.
                    </p>
                </div>
                <div className="flex gap-y-6 flex-col items-start rtl:flex-end flex-col sm:ms-24 ms-0 mt-10 sm:mt-0">
                    <div>
                        <h5 className="md:text-l text-lg text-soby-yellow-light font-medium">
                            {`${t("QUICK LINKS")}`}
                        </h5>
                    </div>
                    <QuickMenu/>
                </div>
                <div className="flex flex-col gap-y-4  item-start rtl:flex-end mt-10 sm:mt-0">
                    <h5 className="md:text-l text-lg text-soby-yellow-light font-medium">
                        {`${t("CONTACT US")}`}
                    </h5>
                    <div className="flex flex-col gap-y-4">
                    <div className="xl:text-lg  text-xs  text-soby-dark-2  before:mx-1 ">
                   <span>{`${t("Phone:")}`}</span>
                   <span>Phone: ‭+971 52 994 5335‬</span> 
                  
                  </div>
                    <p className="xl:text-lg  text-xs  text-soby-dark-2  before:mx-1 ">
                    hi@asksoby.com
                   </p>
                    <p className="xl:text-lg  text-xs  text-soby-dark-2  before:mx-1 ">
                    {`${t("Address: United Arabi Emirates, Dubai")}`}
                    
                   </p>
                    </div>
                    <div className="flex sm:gap-x-1 items-center gap-y-5 px-10 sm:pe-20 sm:ps-0 mt-10 flex-wrap sm:flex-nowrap ">
                        <SocialMenuLight />
                        {/* flex gap-y-5  items-center flex-wrap px-10 mt-20 */}
                        {/* flex  sm:items-center xl:ml-6 md:ml-0 xs:flex-wrap xs:gap-x-2 */}
                        {/* md:flex sm:gap-x-1 sm:items-center xl:ml-6 md:ml-0 */}
                        {/* flex flex-nowrap md:flex-nowrap sm:gap-x-2 sm:flex-wrap xs:sm:flex-wrap sm:items-center xl:ml-6 md:ml-0 */}
                    </div>
                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center bg-soby-gray-blue-gray py-10  xl:ps-24 xl:pe-11 pe-3 ps-3">
                <div></div>
                <div>
                    <span className="flex justify-center xl:text-xl  text-xs  text-soby-light-1">
                    {`${t("SOBY© 2023 COPYRIGHT")}`}                      
                        </span>
                </div>
                <div>
                    <span className="flex justify-end xl:text-l  text-xs  text-soby-light-1 mr-6">
                    {`${t("Privacy Policy")}`}     
                        </span>
                </div>
            </div>
        </div>
    );
};

export default FooterSoby;
