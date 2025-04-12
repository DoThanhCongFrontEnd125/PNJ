import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./pages/routes/AdminRoutes";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./pages/routes/ProtectedRoute";
import StaffRoutes from "./pages/routes/StaffRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Kiểm tra đăng nhập trước khi vào admin */}
        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={<AdminRoutes />} /> {/* Thêm `/*` */}
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={<StaffRoutes />} /> {/* Thêm `/*` */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
