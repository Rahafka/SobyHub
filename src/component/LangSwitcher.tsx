import i18n from "i18next";


const LangSwitcher = () => {
    const colorAr = localStorage.getItem("lang") === "ar" ? "text-soby-yellow-light" : "text-soby-gray-dark-4 ";
    const colorEn = localStorage.getItem("lang") === "en" ? "text-soby-yellow-light" : "text-soby-gray-dark-4";
    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value);
        localStorage.setItem("lang", value);
        window.location.reload();
    }

    return (        
        <div className='flex flex-row  justify-between gap-x-2  cursor-pointer'>
            <span className={colorAr} onClick={() => changeLanguage("ar")}>AR</span>
            <span className='bg-soby-gray-dark-4 h-7' style={{ width: "1px" }}></span>
            <span className={colorEn} onClick={() => changeLanguage("en")}>EN</span>
        </div>
    )
}

export default LangSwitcher