import { jwtDecode } from "jwt-decode";
import { message } from "antd";

interface DecodedToken {
    exp: number; // Expiration time in seconds
}

const checkTokenExpiration = (token: string | null) => {
    if (!token) {
      console.log("Lỗi token, đăng nhập lại");
      message.error("Token không hợp lệ. Vui lòng đăng nhập lại!"); // Gửi thông báo lỗi
      localStorage.removeItem("token");
     
      return false
    }
  
    try {
      const decodedToken = jwtDecode<DecodedToken>(token); 
      const currentTime = Date.now() / 1000; 
  
      if (decodedToken.exp < currentTime) {
        message.error("Token đã hết hạn. Vui lòng đăng nhập lại!"); // Gửi thông báo lỗi
        localStorage.removeItem("token");
        return false
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra token:", error);
      console.log("Token không hợp lệ. Vui lòng đăng nhập lại!");

      localStorage.removeItem("token");
      return false
    }
  };
  
export default checkTokenExpiration;