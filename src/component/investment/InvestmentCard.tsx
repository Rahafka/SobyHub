import { SobyBigButton } from "../buttons";
import { t } from "i18next";

const InvestmentCard = () => {

    return (
        
            <div className="max-w-sm rounded text-center overflow-hidden shadow-lg bg-soby-light-1">
                
                <div className="px-6 py-6">
                <div className="font-bold text-soby-gray-light-5 text-xl mb-2">
                Do it your self 
                        </div>
                    <p className="text-soby-gray-light-5 text-base">
                    lding and marketing their personal brands ting the marketing of their
                     </p>
                    <div className="font-bold text-soby-yellow-light text-xl my-4">
                        AED 000
                    </div>
                    {/* <p className="text-soby-dark-2 text-base my-4">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                    </p> */}
                    <SobyBigButton
                        title={`${t("Book your seat")}`}
                        bgColor="bg-soby-gray-blue-gray"
                        textColor="text-soby-light-1"
                    />
                </div>

            


        </div>


    );
};

export default InvestmentCard;