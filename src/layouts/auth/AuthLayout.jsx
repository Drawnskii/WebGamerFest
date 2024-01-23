import { Outlet } from "react-router-dom";
import './AuthLayout.css';
import './AuthLayout2.css';

function AuthLayout() {
  return (
    <div className="bg-light-purple min-h-screen flex items-center justify-center">
      <div className="wavess w-full "></div>
      <div className="olas w-full "></div>
       
        <Outlet />
    </div>
  );
}

export default AuthLayout;
