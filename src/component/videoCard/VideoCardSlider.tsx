import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import testimoialsimg1 from "../../assets/svg/soby logo.svg";
import testimoialsVideo from "../../assets/img/youtube-logo2.jpg";
import TestimonialCard from "./TestimonialCard";
import { ITestimonialCard } from "../../models/TestimoinlCard.model";
import "./index.css"

const VideoCardSlider = () => {
  const data: ITestimonialCard[] = [
    {
      id: "t-1",
      name: "name",
      position: "position",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione quasi placeat ipsum excepturi odit tenetur dicta provident nihil, quibusdam cupiditate similique pariatur doloremque molestias atque, sunt consequuntur aperiam possimus!",
      imgSrc: testimoialsimg1,
      videoSrc: testimoialsVideo,
    },
    {
      id: "t-2",
      name: "name",
      position: "position",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione quasi placeat ipsum excepturi odit tenetur dicta provident nihil, quibusdam cupiditate similique pariatur doloremque molestias atque, sunt consequuntur aperiam possimus!",
      imgSrc: testimoialsimg1,
      videoSrc: testimoialsVideo,
    },
    {
      id: "t-3",
      name: "name",
      position: "position",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione quasi placeat ipsum excepturi odit tenetur dicta provident nihil, quibusdam cupiditate similique pariatur doloremque molestias atque, sunt consequuntur aperiam possimus!",
      imgSrc: testimoialsimg1,
      videoSrc: testimoialsVideo,
    },
    {
      id: "t-4",
      name: "name",
      position: "position",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione quasi placeat ipsum excepturi odit tenetur dicta provident nihil, quibusdam cupiditate similique pariatur doloremque molestias atque, sunt consequuntur aperiam possimus!",
      imgSrc: testimoialsimg1,
      videoSrc: testimoialsVideo,
    },
    {
      id: "t-5",
      name: "name",
      position: "position",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione quasi placeat ipsum excepturi odit tenetur dicta provident nihil, quibusdam cupiditate similique pariatur doloremque molestias atque, sunt consequuntur aperiam possimus!",
      imgSrc: testimoialsimg1,
      videoSrc: testimoialsVideo,
    },
    {
      id: "t-6",
      name: "name",
      position: "position",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione quasi placeat ipsum excepturi odit tenetur dicta provident nihil, quibusdam cupiditate similique pariatur doloremque molestias atque, sunt consequuntur aperiam possimus!",
      imgSrc: testimoialsimg1,
      videoSrc: testimoialsVideo,
    },
  ];

  return (
    <Swiper
    //   dir="ltr" Pagination,
      modules={[Navigation,  Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 500 }}
    
    >
      {data?.map((d) => (
        <SwiperSlide>
          <TestimonialCard
            name={d.name}
            position={d.position}
            description={d.description}
            imgSrc={d.imgSrc}
            videoSrc={d.videoSrc}
            key={d.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoCardSlider;
