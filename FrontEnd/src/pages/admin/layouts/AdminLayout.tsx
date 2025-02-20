import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/NavBar/NavBar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Nội dung chính */}
      <div className="flex-1 flex flex-col">
        {/* Navbar trên cùng */}
        <Navbar />

        {/* Nội dung thay đổi theo từng trang */}
        <div className="p-4 flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
