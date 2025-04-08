import { useState } from "react";
import PagesBtn from "../../components/PagesBtn/PagesBtn";

const UserTable = () => {
  const [users] = useState([
    { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", mainAddress: {address:"36",wards:"Bình Hưng Hòa",district:"Bình Tân",city:"Hồ Chí Minh"},status:"Đang hoạt động"},
    { id: 2, name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", mainAddress:{address:"36",wards:"Bình Hưng Hòa",district:"Bình Tân",city:"Hồ Chí Minh"},status:"Đã vô hiệu hóa" }
  ]);

  const [pages] = useState([1, 2, 3, 4, 5]);
  const [currentPage, setCurrentPage] = useState(1);

  const [filterName, setFilterName] = useState("");
  const [filterPhone, setFilterPhone] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleEdit = (id: number) => {
    console.log(`Edit user with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete user with id: ${id}`);
  };

  const filteredUsers = users.filter(user => 
    (filterName === "" || user.name === filterName) &&
    (filterPhone === "" || user.phone === filterPhone) &&
    (filterEmail === "" || user.email === filterEmail) &&
    (filterStatus === "" || user.status === filterStatus) 
  );

  const uniqueValues = (key: keyof typeof users[0]) => {
    return Array.from(new Set(users.map(user => user[key])));
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Đang hoạt động":
        return "bg-green-100 text-green-800";
      case "Đã vô hiệu hóa":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <select
          className="border p-2 rounded w-full sm:w-auto"
          onChange={(e) => setFilterName(e.target.value)}
        >
          <option value="">Tất cả tên</option>
          {uniqueValues("name").filter((item) => typeof item === "string" || typeof item === "number").map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <select
          className="border p-2 rounded w-full sm:w-auto"
          onChange={(e) => setFilterPhone(e.target.value)}
        >
          <option value="">Tất cả số điện thoại</option>
          {uniqueValues("phone").filter((item) => typeof item === "string" || typeof item === "number").map((phone) => (
            <option key={phone} value={phone}>{phone}</option>
          ))}
        </select>
        <select
          className="border p-2 rounded w-full sm:w-auto"
          onChange={(e) => setFilterEmail(e.target.value)}
        >
          <option value="">Tất cả email</option>
          {uniqueValues("email").filter((item) => typeof item === "string" || typeof item === "number").map((email) => (
            <option key={email} value={email}>{email}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded w-full sm:w-auto"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">Tất cả trạng thái</option>
          {uniqueValues("status").filter((item) => typeof item === "string" || typeof item === "number").map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
       
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Số điện thoại</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Địa chỉ</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap"> {user.mainAddress.district}, {user.mainAddress.city}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mx-2"
                    onClick={() => handleEdit(user.id)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 mx-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    className="text-green-600 hover:text-green-900 mx-2"
                    onClick={() => console.log(`View user with id: ${user.id}`)}
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex justify-end items-center space-x-2">
        {pages.map((page: number, index) => {
          return (
            <PagesBtn key={index} page={page} dataPage={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          );
        })}
      </div>
    </div>
  );
};

export default UserTable;
