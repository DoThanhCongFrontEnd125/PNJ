import OrdersTable from "./OrdersTable";

const ManageOrders = () => {
    return (
        <div>
            <h1 className="text-xl font-bold mb-4 text-[#262582]">Quản lý đơn hàng</h1>
            <OrdersTable/>
        </div>
    );
};

export default ManageOrders;