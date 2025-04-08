import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/Dashboard/Dashboard";
import ManageUsers from "../features/ManageUsers/ManageUsers";
import ManageProducts from "../features/ManageProducts/ManageProducts";
import ManageCategories from "../features/ManageCategories/CategoriesTable";
import ManageEmployees from "../features/ManageEmployees/EmployeesTable";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/coupons" element={<ManageUsers />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/orders" element={<ManageUsers />} />
        <Route path="/customers" element={<ManageUsers />} />
        <Route path="/employees" element={<ManageEmployees />} />
        <Route path="/categories" element={<ManageCategories />} />
        <Route path="/products" element={<ManageProducts />} />
        <Route path="/statistics" element={<ManageUsers />} />
        <Route path="/infoAdmin" element={<ManageUsers />} />
        <Route path="/logout" element={<ManageUsers />} />
        
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
