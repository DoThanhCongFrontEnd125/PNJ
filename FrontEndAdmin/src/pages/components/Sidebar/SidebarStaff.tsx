import { Link } from "react-router-dom";

const SidebarStaff = () => {
    return (
        <div className="w-52 bg-[#262582] text-white h-screen p-4 shadow-lg md:w-52 lg:w-52 border">
          <h2 className="text-xl text-center font-bold mb-6">NHÂN VIÊN ĐÓNG GÓI PNJ</h2>
          <ul className="space-y-4">
            <li>
              <Link
                to="/staff/orders"
                className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
              >
                <i className="fas fa-receipt mr-2"></i>
                Đơn hàng
              </Link>
            </li>
            
          </ul>
        </div>
      );
};

export default SidebarStaff;