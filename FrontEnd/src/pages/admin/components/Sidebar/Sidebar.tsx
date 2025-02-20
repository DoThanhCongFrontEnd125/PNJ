const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <ul>
          <li><a href="/admin">Dashboard</a></li>
          <li><a href="/admin/users">Manage Users</a></li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  