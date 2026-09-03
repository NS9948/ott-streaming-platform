import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../../utils/storage"
import { jwtDecode } from "jwt-decode";
const AdminRoute = () => {
    const token = getToken()

    if(!token) return <Navigate to={'/signin'} replace/>

    const decoded = jwtDecode(token)

    if (decoded.role === "admin"){
        return <Outlet/>
    }

    return <Navigate to={'/home'} replace/>
    

}

export default AdminRoute;