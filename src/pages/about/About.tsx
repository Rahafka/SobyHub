import { t } from "i18next";
import { SobyBigButton } from "../../component/buttons";
import LeftVideo from "../../component/videoSection/LeftVideo";
import RightVideo from "../../component/videoSection/RightVideo";
import ImgCardSection from "../../component/imgCard/ImgCardSection";


const About = () => {
  return (
    <>

      {/* <div className="text-center text-soby-gray-blue-gray mt-24 animate-[wiggle_1s_ease-in-out_infinite]">
        Coming Soon
      </div> */}
      <RightVideo />
      <div className="flex md:flex-row  md:gap-x-6  gap-x-3 md:mt-0 mt-5 ">
        <SobyBigButton
          title={`${t("Download English Profile")}`}
          bgColor="bg-soby-gray-blue-gray"
          textColor="text-soby-light-1"
        />
         <SobyBigButton
          title={`${t("Download Arabic Profile")}`}
          bgColor="bg-soby-gray-blue-gray"
          textColor="text-soby-light-1"
        />
        </div>
      <LeftVideo />
      <ImgCardSection/>
    </>
  );
};

export default About;
