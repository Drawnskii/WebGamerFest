import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="bg-purple-500 min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
