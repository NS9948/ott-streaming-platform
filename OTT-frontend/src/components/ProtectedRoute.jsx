import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../utils/storage"

const ProtectedRoute = () => {
    const token = getToken()

    if(token){
        return <Outlet/>
    }

    return <Navigate to={'/signin'} replace/>
}

export default ProtectedRoute;