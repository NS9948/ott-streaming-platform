import { useState } from "react"
import { login } from "../../api/authApi"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { saveToken } from "../../utils/storage";
import NavAuth from "../../components/NavAuth";
import Footer from "../../components/Footer";

const Login = () => {
    const navigate = useNavigate();

    const initialForm = {
        email: "",
        password: ""
    }

    const [formData,setFormData] = useState(initialForm)

    const [errors, setErrors] = useState(initialForm)

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {}

        if(formData.email.trim() === ""){
            newErrors.email = "Email field empty!!"
        }

        if(formData.password.trim() === ""){
            newErrors.password = "Password field empty!!"
        }

        setErrors(newErrors)

        if(Object.keys(newErrors).length > 0){
            return;
        }

        try {
            const data = await login(formData)
            saveToken(data.token)
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error.response);
            console.log(error.response.data);
        }
        
    }

    

    return (
        <div className="min-h-screen bg-[#030404] flex flex-col items-center">
            <NavAuth/>

            <main className="flex-1 flex items-center justify-center w-full">
                <div className="bg-[#08090A] text-white p-7 flex flex-col items-center justify-center rounded-2xl w-full max-w-md gap-5">
                <p className="text-3xl font-bold ... pb-3">Sign in</p>
                <form className="flex flex-col gap-6 w-full items-center" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email..." className="focus:outline-none w-full p-4 rounded-[10px] border border-white text-xs"/>
                        {
                            errors.email && (
                                <p className="text-red-500 text-[10px]">
                                    {errors.email}
                                </p>
                            )
                        }
                    </div>
                    
                    <div className="w-full">
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password..." className="focus:outline-none w-full p-4 rounded-[10px] border border-white text-xs"/>
                        {
                            errors.password && (
                                <p className="text-red-500 text-[10px]">
                                    {errors.password}
                                </p>
                            )
                        }
                    </div>
                    
                    <a href="#" className="text-[12px] text-[#00C4AF]">Forgot Password?</a>
                    <button type="submit" className="rounded-4xl w-full py-3 bg-[#239491] cursor-pointer hover:bg-[#3f6d68] transition-colors duration-300">Sign in</button>
                </form>
                <p className="text-[14px]">You don’t have an account? <Link to="/signup" className="text-[#00C4AF]">Sign up</Link></p>

                </div>
            </main>
            
            <Footer/>
        </div>
    )
}

export default Login