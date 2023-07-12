import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";

const InformationFormComponent = () => {
  return (
    <Card color="transparent" shadow={false}>
  

      <form className=" mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" className="bg-soby-light-1"/>
          <Input type="email" size="lg" label="Email" className="bg-soby-light-1"/>
          <Input  size="lg" label="Mobile" className="bg-soby-light-1"/>
          <Input  size="lg" label="Message" className="bg-soby-light-1 h-32"/>
        </div>
    
      </form>
    </Card>
  );
};
export default InformationFormComponent;
