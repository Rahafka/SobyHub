import { useState, useEffect } from "react";
import { t } from "i18next";
import CollapseComponent from "./collapse/CollapseComponent";


const FrequentlyAsked = () => { 
    const [fontFamily, setFontFamily] = useState<string>(
    localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto"
  );
  const [dir, setDir] = useState(
    localStorage.getItem("lang") === "ar" ? "rtl" : "ltr"
  );
  useEffect(() => {
    setFontFamily(
      localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto"
    );
    setDir(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr");
  }, []);
  console.log("Font", fontFamily);

  return (
    <div className="h-full w-full flex items-center">
      <div
        dir={dir}
        className={`flex flex-col text-center items-center md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_1s_ease-in-out]`}
      >
        <div className="flex">
        <h5 className="md:text-4xl text-lg text-soby-gray-blue-gray font-bold mr-2">
            {`${t("Frequently Asked")}`}
          </h5>
          <h5 className="md:text-4xl text-lg text-soby-yellow-light font-bold">
            {`${t("Questions")}`}
          </h5>
        </div>

        <div
          dir={dir}
          className={`flex flex-col bg-soby-light-1 py-20 my-10 items-center md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_1s_ease-in-out]`}
        >
    
          <div className="h-full w-full px-8 ">
         < CollapseComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAsked;