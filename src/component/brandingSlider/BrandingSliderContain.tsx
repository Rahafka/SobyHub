import { t } from "i18next";
import videoIcon from '../../assets/svg/icon-video.svg'
import { SobyBigButton } from "../buttons";
import { useState ,useEffect } from "react";

const BrandingSliderContain: React.FC<unknown> = () => {
  const [fontFamily, setFontFamily] = useState<string>(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
  const [dir, setDir] = useState(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")
  useEffect(() => {
    setFontFamily(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
    setDir(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")

  }, [])
  console.log("Font",fontFamily);
  
  return (
    <div
      dir={dir}
      className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_2s_ease-in-out]`}
    >
      
      <div>
        <h2 className="md:text-4xl text-lg text-soby-yellow-light font-bold">
          {`${t("Unlock the Power of")}`}
        </h2>
      </div>
      <div className="md:-mt-6 -mt-3">
        <h2 className="md:text-7xl text-2xl text-soby-gray-blue-gray font-bold ">
          {`${t("Your Personal Brand")}`}
        </h2>
      </div>
      <div className="mt-6   md:block hidden">
        <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
          {`${t(
            "Discover how strong your personal brand really is and take it to the next level. Click here to evaluate your Personal Brand now.”"
          )}`}
        </h5>
       
      </div>
   
      <div className="xl:mt-16 mt-4">
        <SobyBigButton
          title={`${t("Get started now")}`}
          bgColor="bg-soby-yellow-light"
          textColor="text-soby-light-1"
        />
      </div>
    </div>
  );
};

export default BrandingSliderContain;
