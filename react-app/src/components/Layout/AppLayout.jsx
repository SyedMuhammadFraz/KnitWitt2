import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/SSidebar";
<<<<<<< HEAD
import EmployeeForm from "../Forms/EmployeeForm";
import Blank from "../../Pages/Blank";
//import { EmpForm } from "./FormLayout";

var method;
const href=window.location.href;
if(href==="http://localhost:3000/AppLayout/employees"){
    method = <EmployeeForm/>;
}
else {
    method=<Blank/>;
}
=======
import SignInSide from "../Forms/EmployeeForm";

>>>>>>> main
const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
<<<<<<< HEAD
        <EmployeeForm/>
=======
        <SignInSide />
>>>>>>> main
    </div>;
};

export default AppLayout;