import { Outlet,Navigate } from "react-router-dom";

const useAuth = () =>{
    return localStorage.getItem('token');
}
const ProtectedRoutes = () =>{
    const isAuth = useAuth();
    return isAuth !== null  ? <Outlet/> : <Navigate replace to="/login-admin"/>  
} 
export default ProtectedRoutes;