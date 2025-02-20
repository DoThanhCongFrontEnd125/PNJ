import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./pages/admin/routers/AdminRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
