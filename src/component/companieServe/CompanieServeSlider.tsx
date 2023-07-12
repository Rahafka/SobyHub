import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import testimoialsimg1 from "../../assets/svg/soby logo.svg";
import ImageComponent from "../imageComponent/ImageComponent"
import { ICompanieServe } from "../../models/CompanieServe.model";
import "./index.css"

const CompanieServeSlider = () => {
  const data: ICompanieServe[] = [
    {
      id: "c-1",
      imgSrc: testimoialsimg1,
    },
    {
        id: "c-2",
        imgSrc: testimoialsimg1,
      },
      {
        id: "c-3",
        imgSrc: testimoialsimg1,
      },
      {
        id: "c-4",
        imgSrc: testimoialsimg1,
      },
      {
        id: "c-5",
        imgSrc: testimoialsimg1,
      },
      {
        id: "c-6",
        imgSrc: testimoialsimg1,
      },
      {
        id: "c-7",
        imgSrc: testimoialsimg1,
      },
  ];

  return (
    <Swiper
    //   dir="ltr"
      modules={[Navigation,  Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      autoplay={{ delay: 500 }}
      
    >
      {data?.map((d) => (
        <SwiperSlide>
          <ImageComponent
            imgSrc={d.imgSrc}
            key={d.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CompanieServeSlider;
