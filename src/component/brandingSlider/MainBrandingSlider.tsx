import { Carousel } from "@material-tailwind/react";
import { brandingSliderData } from "../AllData";


const MainBrandingSlider = () => {

    return (
        <Carousel dir="ltr" autoplay loop>
            {brandingSliderData?.map((s => <div className="relative h-full w-full " key={s.key}>
                <img src={s.imgSrc} alt="slid1" className="h-full w-full object-cover" />
                <span className="absolute inset-0 grid h-full w-1/2  place-items-center ps-2 ">
                    {s.sliderContent}
                </span>

            </div>))}

        </Carousel>
    );
};

export default MainBrandingSlider;