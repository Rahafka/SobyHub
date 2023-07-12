import { NavLink } from "react-router-dom";
import { socialMenuIcon } from "./AllData";

const SocialMenu:React.FC<unknown> = () => {
    return <>
        {socialMenuIcon?.map((item) => (
            <NavLink to={item?.url} key={item?.key} className="w-1/4">
                <img src={item?.icon} alt={item.key} className="w-6 animate-[wiggle_1s_ease-in-out_infinite]" />
            </NavLink>
            // xl:w-9
        ))}
    </>

};

export default SocialMenu;
