import { t } from "i18next";
import { useState ,useEffect } from "react";

const Consulationtext: React.FC<unknown> = () => {
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
      className={`flex  h-screen items-center md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_2s_ease-in-out]`}
    >
     <div className="items-start">
      <div className="md:mb-10">
        <h2 className="md:text-4xl text-lg text-soby-yellow-light font-bold">
          {`${t("Book")}`}
        </h2>
      </div>
      <div className="md:-mt-6 -mt-3">
        <h2 className="md:text-7xl text-2xl text-soby-gray-blue-gray font-bold ">
          {`${t("A Consulation")}`}
        </h2>
      </div>
      <div className="mt-6   md:block ">
        <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
          {`${t(
            "Contact Me in 3 Easy Steps:"
          )}`}
        </h5>
        <ul className="items-start rtl:flex-end flex-col">
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
              {`${t("Fill out the contact form")}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
              {`${t(
                "Schedule a free 30-minute Zoom meeting."
              )}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
              {`${t("Receive personalized assistance for your needs.")}`} 
               {/* {`${t("Receive personalized assistance for your needs.")}`}  */}
            </p>
          </li>
        
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Consulationtext;
