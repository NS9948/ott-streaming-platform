import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signup } from "../../api/authApi";
import NavAuth from "../../components/NavAuth";
import Footer from "../../components/Footer";
const Signup = () => {
    const navigate = useNavigate();
    const initialForm = {
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: "",
        phone: "",
    }
    const [formData, setFormData] = useState(initialForm)
    const [errors, setErrors] = useState(initialForm)

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {}

        if(formData.email.trim() === "") newErrors.email = "Email is required"
        if (!formData.email.includes("@")) newErrors.email = "Invalid email"
        if(formData.password.trim() === "") newErrors.password = "Password is required"
        if (formData.confirmPassword.trim() === "") {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if(formData.gender === "") newErrors.gender = "Gender is required"
        if(formData.dob === "") newErrors.dob = "DOB is required"

        setErrors(newErrors)

        if(Object.keys(newErrors).length > 0){
            return ;
        }

        try {
            const {confirmPassword, ...signupData} = formData
            const data = await signup(signupData)
            navigate("/signin", {replace: true})
        } catch (error) {
            console.log(error.response);
            console.log(error.response.data);
        }

    }
    return (
        <div className="bg-[#030404] min-h-screen flex flex-col items-center">
            <NavAuth/>
            <main className="flex-1 flex items-center justify-center w-full">
                <div className="bg-[#08090A] text-white p-7 flex flex-col items-center justify-center rounded-2xl w-full max-w-md gap-5">
                <p className="text-2xl font-bold ... ">Ready to watch?</p>
                <p className="text-[#aaaaaa]">Enter your email to create or sign in to your account.</p>
                <form className="w-full flex flex-col items-center justify-center gap-5" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <input required type="email" name="email" value={formData.email} placeholder="Email address..." onChange={handleChange} className="w-full text-[10px] border p-3 rounded-[10px] focus:outline-none"/>
                        {errors.email && (
                            <p className="text-red-500 text-[10px]">{errors.email}</p>
                        )}
                    </div>
                        
                    <div className="w-full flex gap-3 text-[10px] ">
                        <div className="w-1/2">
                            <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full border p-3 rounded-[10px] focus:outline-none">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Others</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-[10px]">{errors.gender}</p>
                            )}
                        </div>
                        
                        <div className="w-1/2">
                            <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border p-3 rounded-[10px] text-white bg-[#08090A] focus:outline-none" style={{ colorScheme: "dark" }}/>
                            {errors.dob && (
                                <p className="text-red-500 text-[10px]">{errors.dob}</p>
                            )}
                        </div>
                        
                    </div>
                    <div className="w-full flex gap-3 text-[10px]">
                        <select name="isd" className="border p-3 rounded-[10px] focus:outline-none w-1/2">
                            <option value="india">India (+91)</option>
                            <option value="uae">UAE (+971)</option>
                            <option value="saudiArabia">Saudi Arabia (+966)</option>
                            <option value="egypt">Egypt (+20)</option>
                            <option value="qatar">Qatar (+974)</option>
                            <option value="kuwait">Kuwait (+965)</option>
                            <option value="oman">Oman (+968)</option>
                            <option value="bahrain">Bahrain (+973)</option>
                            <option value="jordan">Jordan (+962)</option>
                            <option value="lebanon">Lebanon (+961)</option>
                            <option value="uk">UK (+44)</option>
                            <option value="usa">USA (+1)</option>
                        </select>
                        <input type="tel" value={formData.phone} name="phone" placeholder="Phone Number (Optional)" onChange={handleChange} className="border p-3 rounded-[10px] text-white bg-[#08090A] w-full focus:outline-none"/>
                    </div>

                    <div className="w-full">
                        <input required value={formData.password} name="password" onChange={handleChange} type="password" placeholder="Enter Password..." className="w-full text-[10px] border p-3 rounded-[10px] focus:outline-none"/>
                        {errors.password && (
                            <p className="text-red-500 text-[10px]">{errors.password}</p>
                        )}
                    </div>
                    <div className="w-full">
                        <input required value={formData.confirmPassword} name="confirmPassword" onChange={handleChange} type="password" placeholder="Confirm Password..." className="w-full text-[10px] border p-3 rounded-[10px] focus:outline-none"/>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-[10px]">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button type="submit"className=" bg-[#3AE7E2] rounded-2xl w-[50%] p-2 font-bold ...">Get Started</button>
                </form>
                <p className="text-[14px]">Already have an account? <Link to="/signin" className="text-[#00BBA7] font-bold ...">Sign in</Link></p>
                </div>
            </main>
            
            <Footer/>
        </div>
    );
};

export default Signup;