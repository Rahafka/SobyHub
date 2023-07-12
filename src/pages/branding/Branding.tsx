import { t } from "i18next"
import { SobyButton } from "../../component/buttons"
import DarkBlueSection from "../../component/darkBlueSection/DarkBlueSection"
import Testimonials from "../../component/testimonials/Testimonials"
import TextCardSection from "../../component/textCard/TextCardSection"
import MainBrandingSlider from "../../component/brandingSlider/MainBrandingSlider"
import TrainerSection from "../../component/trainer/TrainerSection"
import ContentsSection from "../../component/contents/ContentsSection"
import InvestmentSection from "../../component/investment/InvestmentSection"
import Consulationtext from "../../component/Consulationtext"
import CompanieServeSlider from "../../component/companieServe/CompanieServeSlider"
import FrequentlyAsked from "../../component/FrequentlyAsked"

const Branding = () => {
    return (

        // <div className="text-center text-soby-gray-blue-gray mt-24  animate-[wiggle_1s_ease-in-out_infinite]">
        //     Branding Page Coming Soon
        //     </div>
        <>
            <MainBrandingSlider/>
            <DarkBlueSection />
            <div className="md:my-6 -mt-3 item-center  grid grid-cols-1 md:grid-cols-3 gap-10 ">
                <SobyButton
                    title={`${t("Get started now")}`}
                    bgColor="bg-soby-yellow-light"
                    textColor="text-soby-light-1"
                />
                <SobyButton
                    title={`${t("Get started now")}`}
                    bgColor="bg-soby-yellow-light"
                    textColor="text-soby-light-1"
                />
                <SobyButton
                    title={`${t("Get started now")}`}
                    bgColor="bg-soby-yellow-light"
                    textColor="text-soby-light-1"
                />
            </div>
            <TextCardSection />
            <DarkBlueSection />
            <div className="md:mt-6 md:mb-32 -mt-3  item-center  grid grid-cols-1 md:grid-cols-3 gap-10 ">
                <SobyButton
                    title={`${t("Get started now")}`}
                    bgColor="bg-soby-yellow-light"
                    textColor="text-soby-light-1"
                />
                <SobyButton
                    title={`${t("Get started now")}`}
                    bgColor="bg-soby-yellow-light"
                    textColor="text-soby-light-1"
                />
                <SobyButton
                    title={`${t("Get started now")}`}
                    bgColor="bg-soby-yellow-light"
                    textColor="text-soby-light-1"
                />
            </div>
            <Testimonials />
            {/* <div className="md:mt-20 item-center grid grid-cols-1 md:grid-cols-6 gap-12 px-10 mb-20 mt-10">
          
                </div> */}
                <div className="md:mt-6 -mt-3 w-full ">
                    <CompanieServeSlider/>
           
                </div>
                <TrainerSection/>
                <ContentsSection/>
                <Consulationtext/>
                <FrequentlyAsked/>
                <InvestmentSection/>
        </>
    )
}

export default Branding