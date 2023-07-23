import { Card, Input } from "@material-tailwind/react";
import { t } from "i18next";
import "./style.css"

const InformationFormComponent = () => {
  return (
    <Card color="transparent" shadow={false}>
  

      <form className=" mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-4 flex flex-col gap-6 "> 
          <Input size="lg" label={`${t("Name")}`} className="inputFormStyle"/>
          <Input type="email" size="lg" label={`${t("Email")}`} className="inputFormStyle"/>
          <Input  size="lg" label={`${t("Mobile")}`} className="inputFormStyle"/>
          <Input   label={`${t("Message")}`} className="inputFormStyle h-32"/>
        </div>
    
      </form>
    </Card>
  );
};
export default InformationFormComponent;
