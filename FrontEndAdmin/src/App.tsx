import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./pages/routes/AdminRoutes";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./pages/routes/ProtectedRoute";

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminRoutes />} />
        </Route>
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
