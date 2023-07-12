import { t } from "i18next";
import { SobyBigButton } from "../buttons";

const TrainerInfo = () => {

    return (
        <div className="w-full">
            <a href="#" className="flex flex-col items-center  md:flex-row md:max-w-xl  ">
                <img className="w-full h-48 mb-3 border-4 border-soby-yellow-dark rounded-full" src="img_girl.jpg" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sarah Collin
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        position
                    </p>
                    <p className="my-5 text-sm text-gray-700 dark:text-gray-400">
                        After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative.
                        She loves to raise her voice anytime with her wonder which hardly happen before.
                    </p>
                    <SobyBigButton 
                        title={`${t("View Profile")}`}
                        bgColor="bg-soby-gray-blue-gray"
                        textColor="text-soby-light-1"
                    />
                </div>

            </a>

        </div>


    );
};

export default TrainerInfo;