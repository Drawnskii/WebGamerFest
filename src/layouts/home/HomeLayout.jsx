import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="bg-light-purple">
      <Outlet />
    </div>



  );
}

export default HomeLayout;
