import { Space } from "antd"
import {SideBarDash} from "./layout"
import CrudTable from "./dashComponent/CrudTable"


const DashBoard = () => {
  return (
    <div className="flex flex-col  h-screen ">
      <Space>
      <SideBarDash/>
      <div className="ml-72  mt-8">
        <CrudTable/>
      </div>
      </Space>
   
    </div>
    
  )
}

export default DashBoard