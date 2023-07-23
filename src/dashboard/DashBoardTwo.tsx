import { Space } from "antd"
import DashHeader from "./dashComponent/DashHeader"
import DashSideMenu from "./dashComponent/DashSideMenu"
import DashPageContent from "./dashComponent/DashPageContent"
import DashFooter from "./dashComponent/DashFooter"

const DashBoardTwo = () => {
  return (
    <div className="flex flex-col  h-screen ">
        <DashHeader/>
        <Space>
            <DashSideMenu/>
            <DashPageContent/>
        </Space>
        <DashFooter/>
    </div>
  )
}

export default DashBoardTwo