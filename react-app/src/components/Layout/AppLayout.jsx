import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/SSidebar";
import SignInSide from "../Forms/EmployeeForm";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <SignInSide />
    </div>;
};

export default AppLayout;