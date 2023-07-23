import { Route, Routes } from "react-router-dom";
import { Home,About, Branding, Training, Publications, Blog, Courses, Networks , Insight} from "../pages";
import DashBoard from "../dashboard/DashBoard";
import DashBoardTwo from "../dashboard/DashBoardTwo";
const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/branding" element={<Branding />} />
      <Route path="/training" element={<Training />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/networks" element={<Networks />} />
      <Route path="/insight" element={<Insight />} />
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/dashboardtwo" element={<DashBoardTwo/>}/>
    </Routes>
  );
};

export default index;
