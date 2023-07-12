import { t } from "i18next";
import { useState, useEffect } from "react";
import VideoComponent from "../videoComponent/VideoComponent";

const RightVideo: React.FC<unknown> = () => {
    const [fontFamily, setFontFamily] = useState<string>(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
    const [dir, setDir] = useState(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")
    useEffect(() => {
        setFontFamily(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
        setDir(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")

    }, [])
    console.log("Font", fontFamily);

    return (
        <div className="h-screen w-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div
                    dir={dir}
                    className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} `}
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
                    <div className="mt-6  ">
                        <ul className="items-start rtl:flex-end flex-col">
                            <li>
                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
                                    {`${t("Building and marketing their personal brands")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
                                    {`${t(
                                        "Accelerating the marketing of their products and doubling their sales"
                                    )}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
                                    {`${t("Discovering and nurturing talents")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1">
                                    {`${t("Creative thinking and organizational agility")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1">
                                    {`${t("Collecting their debts without losing their customers")}`}
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="px-4"> 
                <VideoComponent srcVideo={"https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"}/>
                </div>
                
            </div>
    </div>
        
    );
};

export default RightVideo;
