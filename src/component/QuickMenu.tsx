
import { t } from "i18next";
import { NavLink, useLocation } from "react-router-dom";
interface IMainMenu {
    key: string;
    name: string;
    url: string
}
const QuickMenu: React.FC<unknown> = () => {
    const location = useLocation();
    const { pathname } = location;
    const quickMenu: IMainMenu[] = [
        {
            key: "key_about",
            name: `${t("About")}`,
            url: "/about",
        },
        {
            key: "key_branding",
            name: `${t("Branding")}`,
            url: "/branding",
        },
        {
            key: "key_training",
            name: `${t("Training")}`,
            url: "/training",
        },
        {
            key: "key_publications",
            name: `${t("Publications")}`,
            url: "/publications",
        },
        {
            key: "key_insight",
            name: `${t("Insight")}`,
            url: "/insight",
        },
    ];

    return <>
        {quickMenu?.map((item) => (
            <NavLink
                to={item?.url}
                key={item?.key}
                className={`"xl:text-base/[20px] md:text-sm  text-xs text-lg ${pathname === item?.url
                    ? "text-soby-yellow-light"
                    : "text-soby-dark-2"
                    } text-soby-dark-2 hover:text-soby-yellow-light  `}
            >
                {item?.name}
            </NavLink>
        ))}
    </>


};

export default QuickMenu;
