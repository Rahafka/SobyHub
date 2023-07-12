import Consulationtext from "../../component/Consulationtext";
import ServeSection from "../../component/ServeSection";
import SubmerionInfo from "../../component/SubmerionInfo";
import DarkBlueSection from "../../component/darkBlueSection/DarkBlueSection";
import NetworkSection from "../../component/network/NetworkSection";
import MainSlider from "../../component/slider/MainSlider";
import Testimonials from "../../component/testimonials/Testimonials";
import LeftVideo from "../../component/videoSection/LeftVideo";


const Home = () => {
  return (
    <div>
      <MainSlider />
      <LeftVideo />
      <Testimonials/>
      <DarkBlueSection/>
      <ServeSection/>
      <NetworkSection/>
      <Consulationtext/>
      <SubmerionInfo/>

      {/* <GridVideoAndText /> */}
      {/* <Testimonials/> */}
    </div>
  );
};

export default Home;