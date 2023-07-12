import{ ICompanieServe} from "../../models/CompanieServe.model"

const ImageComponent: React.FC<ICompanieServe> = (props) => {
    return (
            <img className="w-full shadow-lg" 
                    
                        src={`${props?.imgSrc}`}
                         />
    );
};
export default ImageComponent;