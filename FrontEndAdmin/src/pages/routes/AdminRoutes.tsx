import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/Dashboard/Dashboard";
import ManageUsers from "../features/ManageUsers/ManageUsers";
import ManageProducts from "../features/ManageProducts/ManageProducts";
import ManageCategories from "../features/ManageCategories/CategoriesTable";
import ManageEmployees from "../features/ManageEmployees/EmployeesTable";
import ManageOrders from "../features/ManageOrders/ManageOrders";
import ManageCoupons from "../features/ManageCoupons/ManageCoupons";
import ManageStatistics from "../features/ManageStatistics/ManageStatistics";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="coupons" element={<ManageCoupons />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="orders" element={<ManageOrders />} />
        <Route path="employees" element={<ManageEmployees />} />
        <Route path="categories" element={<ManageCategories />} />
        <Route path="products" element={<ManageProducts />} />
        <Route path="statistics" element={<ManageStatistics />} />
        <Route path="infoAdmin" element={<ManageUsers />} />
        <Route path="logout" element={<ManageUsers />} />  
      </Route>
      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  );
};

export default AdminRoutes;
