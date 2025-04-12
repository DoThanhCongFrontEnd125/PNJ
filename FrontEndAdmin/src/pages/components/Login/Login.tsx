import { useNavigate } from "react-router-dom";
import { Form, Input, message, FormProps } from 'antd';
import LoginType from "../../types/loginType";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const error = (content: string) => {
    messageApi.open({
      type: 'error',
      content: content,
    });
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Đăng nhập thành công!',
    });
  };

  const onFinish: FormProps<LoginType>['onFinish'] = async (values) => {
    
    const { email, password } = values;

    try {
      // Gửi dữ liệu đến backend
      const response = await fetch('http://localhost:8080/employees/loginManage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Lưu token vào localStorage
        const role = data.employee.role;
        success(); // Hiển thị thông báo thành công
        setTimeout(() => {
          if (role === 'admin') {
            navigate('/admin'); // Chuyển hướng đến trang admin
          }
          else if (role === 'staff') {
            navigate('/staff'); // Chuyển hướng đến trang employee
          }
          else if (role === 'shipper') {
            navigate('/shipper'); // Chuyển hướng đến trang manager
          }
        }, 1000); // Chờ 1 giây trước khi chuyển hướng
  } else {
      const errorData = await response.json();
      error(errorData.message || 'Sai email hoặc mật khẩu!');
  }
    } catch (err) {
      console.error('Error:', err);
      error('Bạn không có quyền truy cập!');
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {contextHolder}
      <div
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
      >
        <div className="text-center mb-6">
          <img
            src="../../../../public/pnj.com.vn.png"
            alt="Logo"
            className="mx-auto mb-4"
            style={{ width: '100px' }}
          />
          <h2 className="text-2xl font-bold text-[#262582]">Đăng Nhập Quản Lý</h2>
        </div>
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          
          autoComplete="off"
        >
          <Form.Item<LoginType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Vui lòng điền email!' },
              { 
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                message: 'Email không hợp lệ!' 
              }
            ]}
          >
            <Input placeholder="Nhập email của bạn" />
          </Form.Item>

          <Form.Item<LoginType>
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng điền mật khẩu!' }]}
          >
            <Input.Password placeholder="Nhập mật khẩu của bạn" />
          </Form.Item>

          <div className="w-full flex justify-center mt-10">
            <button
              type="submit"
              className="w-full bg-[#262582] text-white py-2 px-4 rounded-lg font-bold hover:opacity-80 transition-all"
            >
              Đăng nhập
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
