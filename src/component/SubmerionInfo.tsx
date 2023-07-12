import { useState, useEffect } from "react";
import { t } from "i18next";
import RadioComponent from "./radioComponent/RadioComponent";
import InformationFormComponent from "./informationFormComponent/InformationFormComponent";
import { SobyBigButton } from "./buttons";

const SubmerionInfo = () => {
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
    <div className="h-full w-full flex items-center py-8 lg:px-0 px-8">
      <div
        dir={dir}
        className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 gap-y-5 w-full  ${fontFamily} animate-[spinner-grow_1s_ease-in-out]`}
      >
        <div className="md:mt-6 -mt-3 item-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          <div>
            <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
              {`${t("What is required")}`}
            </h5>
            <div className="bg-soby-light-1 shadow-md mb-28">
            <RadioComponent />
            </div>

            <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
              {`${t("Connect with")}`}
            </h5>
            <div className="bg-soby-light-1 shadow-md">
            <RadioComponent />
            </div>
            
          </div>
          <div>
            <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
              {`${t("Your information")}`}
            </h5>
            <InformationFormComponent />
          </div>
          <div>
            <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
              {`${t("Urgency Level")}`}
            </h5>
            <div className="bg-soby-light-1 shadow-md mb-40">
            <RadioComponent />
            </div>
            <div className="w-full flex justify-center">
            <SobyBigButton
              title={`${t("Send")}`}
              bgColor="bg-soby-gray-blue-gray"
              textColor="text-soby-light-1"
            />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmerionInfo;
