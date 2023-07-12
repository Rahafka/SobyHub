import { ITestimonialCard } from "../../models/TestimoinlCard.model";
import VideoComponent from "../videoComponent/VideoComponent";


const TestimonialCard:React.FC<ITestimonialCard> = (props) => {
  return (
    <div className="w-full p-3 shadow-md">
      <div className="flex flex-row gap-x-3">
      <img
          className="w-20 h-20 mb-3 border-4 border-soby-yellow-dark rounded-full"
          src={props.imgSrc}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.position}
          </p>
        </div>
      </div>
 
      <p className="my-5 text-sm text-gray-700 dark:text-gray-400">
      {props.description}
      </p>
      <VideoComponent
        srcVideo={props.videoSrc}
      />
    </div>
  );
};

export default TestimonialCard;
