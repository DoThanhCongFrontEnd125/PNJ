import { Routes, Route, Navigate } from "react-router-dom";
import StaffLayout from "../layouts/StaffLayout";
import ManageOrders from "../features/ManageOrders/ManageOrders";



const StaffRoutes = () => {
    return (
        <div>
         <Routes>
            <Route path="/staff" element={<StaffLayout />}>
                <Route index element={<ManageOrders />} />
            </Route>
            <Route path="*" element={<Navigate to="/staff" />} />
        </Routes>     
        </div>
    );
};

export default StaffRoutes;