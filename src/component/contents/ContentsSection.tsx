import { useState, useEffect } from "react";
import { t } from "i18next";
import ContentsImgText from "./ContentsImgText";

const ContentsSection = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 "></div>
      <div
        dir={dir}
        className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_1s_ease-in-out]`}
      >
        <div>
          <h2 className="md:text-4xl text-lg text-soby-yellow-light font-bold">
            {`${t("The")}`}
          </h2>
        </div>
        <div className="md:-mt-6 -mt-3">
          <h2 className="md:text-7xl text-2xl text-soby-gray-blue-gray font-bold ">
            {`${t("Contents")}`}
          </h2>
        </div>
        <div
          dir={dir}
          className={`flex flex-col bg-soby-light-1 py-20 my-10 items-center md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_1s_ease-in-out]`}
        >
          <div className="md:-mt-6 -mt-3">
            <h2 className="md:text-5xl text-2xl text-soby-gray-blue-gray font-bold text-center px-52 ">
              {`${t("What is Systematic Selling Strategies Training Program")}`}
            </h2>
            <h5 className="md:text-xl text-2xl text-soby-gray-blue-gray text-center px-52 mt-4">
              {`${t(
                "A complete training program with 10 lessons designed to enable you to achieve your full sales potential"
              )}`}
            </h5>
            <h5 className="md:text-xl text-2xl text-soby-gray-blue-gray text-center mt-10">
              {`${t("Learn how to:")}`}
            </h5>
          </div>
          <div className="md:mt-6 -mt-3 w-full px-20 item-center grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
            <ContentsImgText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsSection;
