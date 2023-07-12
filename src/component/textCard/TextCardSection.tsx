import { useState, useEffect } from "react";
import { t } from "i18next";
import TextCard from "./TextCard";



const TextCardSection = () => {
    const [fontFamily, setFontFamily] = useState<string>(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
    const [dir, setDir] = useState(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")
    useEffect(() => {
        setFontFamily(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
        setDir(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")

    }, [])
    console.log("Font", fontFamily);

    return (
        <div className="h-full w-full flex items-center py-8">
            <div
                dir={dir}
                className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 gap-y-5 w-full  ${fontFamily} animate-[spinner-grow_1s_ease-in-out]`}
            >
                <div>
                    <h2 className="md:text-4xl text-lg text-soby-yellow-light font-bold">
                        {`${t("About")}`}
                    </h2>
                </div>
                <div className="md:-mt-6 -mt-3">
                    <h2 className="md:text-7xl text-2xl text-soby-gray-blue-gray font-bold ">
                        {`${t("Soby")}`}
                    </h2>
                </div>
                <div className="md:my-6 -mt-3 flex item-center  grid grid-cols-1 md:grid-cols-3 gap-10 ">
                    <TextCard />
                    <TextCard />
                    <TextCard />
                    <TextCard />
                    <TextCard />
                    <TextCard />                 
                </div>
            </div>
        </div>



    );
};

export default TextCardSection;