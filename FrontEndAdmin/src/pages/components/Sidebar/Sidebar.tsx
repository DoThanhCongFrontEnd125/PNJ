// import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const location = useLocation();

  // Nếu đường dẫn hiện tại là /admin/statistics thì ẩn Sidebar
  // if (location.pathname === "/admin/products") {
  //   return null;
  // }
  return (
    <div className="w-52 bg-[#262582] text-white h-screen p-4 shadow-lg md:w-52 lg:w-52 border">
      <h2 className="text-2xl font-bold mb-6">PNJ ADMIN</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/admin"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-tachometer-alt mr-2"></i>
            Tổng quan
          </Link>
        </li>
        <li>
          <Link
            to="/admin/coupons"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-tags mr-2"></i>
            Mã giảm giá
          </Link>
        </li>
        <li>
          <Link
            to="/admin/orders"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-receipt mr-2"></i>
            Đơn hàng
          </Link>
        </li>
        <li>
          <Link
            to="/admin/customers"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-users mr-2"></i>
            Khách hàng
          </Link>
        </li>
        <li>
          <Link
            to="/admin/employees"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-user mr-2"></i>
            Nhân viên
          </Link>
        </li>
        <li>
          <Link
            to="/admin/categories"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-th-list mr-2"></i>
            Danh mục
          </Link>
        </li>
        <li>
          <Link
            to="/admin/products"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-box-open mr-2"></i>
            Sản phẩm
          </Link>
        </li>

        <li>
          <Link
            to="/admin/statistics"
            className="py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 flex items-center"
          >
            <i className="fas fa-chart-bar mr-2"></i>
            Thống kê
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
