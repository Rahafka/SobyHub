import { t } from "i18next";
import VideoCardSlider from "../videoCard/VideoCardSlider";
import { useState, useEffect } from "react";

const Testimonials: React.FC<unknown> = () => {
    const [fontFamily, setFontFamily] = useState<string>(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
    const [dir, setDir] = useState(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")
    useEffect(() => {
        setFontFamily(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
        setDir(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")

    }, [])
    console.log("Font", fontFamily);
    return (
        <div className="h-screen w-full flex items-center">
        
            <div
                dir={dir}
                className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_1s_ease-in-out]`}
            >
                <div>
                    <h2 className="md:text-4xl text-lg text-soby-yellow-light font-bold">
                        {`${t("Don’t hear only from us")}`}
                    </h2>
                </div>
                <div className="md:-mt-6 -mt-3">
                    <h2 className="md:text-7xl text-2xl text-soby-gray-blue-gray font-bold ">
                        {`${t("Testimonials")}`}
                    </h2>
                </div>
                <div className="md:mt-6 -mt-3 w-full">
                <VideoCardSlider />
                </div>
               

            </div>
        </div>
    );
};

export default Testimonials;