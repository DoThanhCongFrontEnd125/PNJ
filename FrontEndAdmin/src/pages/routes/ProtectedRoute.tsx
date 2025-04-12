import { Navigate, Outlet } from "react-router-dom";
import checkTokenExpiration from "../helpers/tokenHelper";
const ProtectedRoute = () => {
  const token  = localStorage.getItem("token"); // Kiểm tra token
  checkTokenExpiration(token)
  // const isTokenValid=(token:string|null)=>{
  //   if(!token) return false;
  //   try {
  //     const decodedToken = jwtDecode(token);
  //     if (!decodedToken || !decodedToken.exp) {
  //       return false; // Token không hợp lệ
  //   }
  //     const currentTime = Date.now() / 1000; // Thời gian hiện tại tính bằng giây
  //     return decodedToken.exp > currentTime; // Kiểm tra xem token có còn hiệu lực hay không
  //   } catch (error) {
  //     console.log("Token không hợp lệ:", error);
  //     return false; // Token không hợp lệ
  //   }
   

  // }

  
  const isAuthenticated = !!token; // Sử dụng giá trị rỗng nếu token là null


  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
