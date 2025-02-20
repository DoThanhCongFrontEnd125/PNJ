import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/Dashboard/Dashboard";
import ManageUsers from "../features/ManageUsers/ManageUsers";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<ManageUsers />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
