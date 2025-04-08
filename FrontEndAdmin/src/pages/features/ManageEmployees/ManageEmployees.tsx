import { useState } from "react";
import PagesBtn from "../../components/PagesBtn/PagesBtn";

const EmployeesTable = () => {
  const [employees] = useState([
    { id: 1, name: "John Doe",phone:"0585865248",role:"Nhân viên",status:"Đang làm"},
    { id: 2, name: "Jane Smith",phone:"0123456789",role:"Shipper",status:"Nghỉ việc" }
  ]);

  const [pages] = useState([1, 2, 3, 4, 5]);
  const [currentPage, setCurrentPage] = useState(1);

  const [filterName, setFilterName] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleEdit = (id: number) => {
    console.log(`Edit employee with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete employee with id: ${id}`);
  };

  const filteredEmployees = employees.filter(employee => 
    (filterName === "" || employee.name === filterName) &&
    (filterRole === "" || employee.role === filterRole) &&
    (filterStatus === "" || employee.status === filterStatus) 
  );

  const uniqueValues = (key: keyof typeof employees[0]) => {
    return Array.from(new Set(employees.map(employee => employee[key])));
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Đang làm":
        return "bg-green-100 text-green-800";
      case "Nghỉ việc":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2 justify-between items-center">
        <div className="flex gap-3">
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
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="">Tất cả chức vụ</option>
          {uniqueValues("role").filter((item) => typeof item === "string" || typeof item === "number").map((role) => (
            <option key={role} value={role}>{role}</option>
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
       
      <button
        className="bg-[#262582] text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => console.log("Add new employee")}
      >
        <i className="fas fa-plus"></i> Thêm nhân viên
      </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Chức vụ</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Số điện thoại</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="text-center">
                <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(employee.status)}`}>
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mx-2"
                    onClick={() => handleEdit(employee.id)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 mx-2"
                    onClick={() => handleDelete(employee.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    className="text-green-600 hover:text-green-900 mx-2"
                    onClick={() => console.log(`View employee with id: ${employee.id}`)}
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

export default EmployeesTable;
