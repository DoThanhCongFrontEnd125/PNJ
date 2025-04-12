import { Outlet } from "react-router";
import NavBarStaff from "../components/NavBar/NavBarStaff";
import SidebarStaff from "../components/Sidebar/SidebarStaff";

const StaffLayout = () => {
    return (
        <div className="flex h-screen">
      {/* Sidebar bên trái */}
        <SidebarStaff/>
      {/* Nội dung chính */}
      <div className="flex-1 flex flex-col">
        {/* Navbar trên cùng */}
        <NavBarStaff/>
        {/* Nội dung thay đổi theo từng trang */}
        <div className="p-4 flex-grow">
        <Outlet />
        </div>
      </div>
    </div>
    );
};

export default StaffLayout;