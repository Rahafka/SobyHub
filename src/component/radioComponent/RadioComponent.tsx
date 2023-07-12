import { Radio, Typography } from "@material-tailwind/react";
 
const RadioComponent = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Radio id="terms-html" name="terms" label={
        <Typography  className="xl:text-xl  text-xs  text-soby-gray-dark-3">I agree with HTML
   
        </Typography>
      } />
      <Radio id="terms-react" name="terms" label={
        <Typography className="xl:text-xl  text-xs  text-soby-gray-dark-3">I agree with React
         
        </Typography>
      } />
    </div>
  );
}

export default RadioComponent;