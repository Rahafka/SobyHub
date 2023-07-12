import { SobyBigButton } from "../buttons";
import { t } from "i18next";

const NetworkCard = () => {

    return (
        
            <div className="max-w-sm rounded text-center overflow-hidden shadow-lg bg-soby-light-1">
                <img className="w-24 h-24 m-auto" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-6">
                    <div className="font-bold text-soby-yellow-light text-xl my-4">
                        Network 1
                    </div>
                    <p className="text-soby-dark-2 text-base my-4">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                    </p>
                    <SobyBigButton
                        title={`${t("Find out more")}`}
                        bgColor="bg-soby-gray-blue-gray"
                        textColor="text-soby-light-1"
                    />
                </div>

            


        </div>


    );
};

export default NetworkCard;