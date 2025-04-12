import pnj from "../../../../public/pnj.com.vn.png";
import type { MenuProps } from 'antd';
import { Dropdown, Space, message } from 'antd';
import { Link } from "react-router-dom";

const NavBarStaff = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Đăng xuất thành công',
      });
    };
  
    const handleLogout = () => {
      success(); // Hiển thị thông báo
      setTimeout(() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }, 1000); // Chờ 1 giây trước khi chuyển hướng
    };
  
    const items: MenuProps['items'] = [
      {
        key: '1',
        label: (
          <Link to="/staff/infoStaff">
            Thông tin tài khoản
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <span onClick={handleLogout}>
            Đăng xuất
          </span>
        ),
      }
    ];
  
    return (
      <div className="bg-[#262582] text-white p-2 flex justify-between items-center border">
        {contextHolder}
        <h1 className="text-xl font-semibold ml-2">Nhân viên đóng gói</h1>
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
      </div>
    )
};

export default NavBarStaff;