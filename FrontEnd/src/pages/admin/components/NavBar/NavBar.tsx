import pnj from "../../../../../public/pnj.com.vn.png"
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to="/admin/infoAdmin">
        Thông tin tài khoản
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/admin/logout">
        Đăng xuất
      </Link>
    ),
  }
];

const Navbar = () => {
    return (
      <div className="bg-[#262582] text-white p-2 flex justify-between items-center border">
        <h1 className="text-xl font-semibold ml-2">Admin</h1>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <img
              src={pnj}
              alt="Avatar"
              className="w-11 h-11 rounded-full cursor-pointer object-contain bg-white mr-10"
            />
            </Space>
          </a>
        </Dropdown>
        {/* <div className="flex items-center space-x-6">
          <div className="relative group">
        <img
          src={pnj}
          alt="Avatar"
          className="w-12 h-12 rounded-full cursor-pointer object-contain bg-white mr-10"
        />
        <button className="absolute right-10 mt-2 p-2 rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          Logout
        </button>
          </div>
        </div> */}
      </div>
    );
  };
  
  export default Navbar;
  