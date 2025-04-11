// import React, { useState } from 'react'
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { FaRegEye } from "react-icons/fa6";
// import toast from 'react-hot-toast';
// import Axios from '../utils/Axios';
// import SummaryApi from '../common/SummaryApi';
// import AxiosToastError from '../utils/AxiosToastError';
// import { Link, useNavigate } from 'react-router-dom';
// import fetchUserDetails from '../utils/fetchUserDetails';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from '../store/userSlice';

// const Login = () => {
//     const [data, setData] = useState({
//         email: "",
//         password: "",
//     })
//     const [showPassword, setShowPassword] = useState(false)
//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const handleChange = (e) => {
//         const { name, value } = e.target

//         setData((preve) => {
//             return {
//                 ...preve,
//                 [name]: value
//             }
//         })
//     }

//     const valideValue = Object.values(data).every(el => el)


//     const handleSubmit = async(e)=>{
//         e.preventDefault()

//         try {
//             const response = await Axios({
//                 ...SummaryApi.login,
//                 data : data
//             })
            
//             if(response.data.error){
//                 toast.error(response.data.message)
//             }

//             if(response.data.success){
//                 toast.success(response.data.message)
//                 localStorage.setItem('accesstoken',response.data.data.accesstoken)
//                 localStorage.setItem('refreshToken',response.data.data.refreshToken)

//                 const userDetails = await fetchUserDetails()
//                 dispatch(setUserDetails(userDetails.data))

//                 setData({
//                     email : "",
//                     password : "",
//                 })
//                 navigate("/")
//             }

//         } catch (error) {
//             AxiosToastError(error)
//         }



//     }
//     return (
//         <section className='w-full container mx-auto px-2'>
//             <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7'>

//                 <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
//                     <div className='grid gap-1'>
//                         <label htmlFor='email'>Email :</label>
//                         <input
//                             type='email'
//                             id='email'
//                             className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
//                             name='email'
//                             value={data.email}
//                             onChange={handleChange}
//                             placeholder='Enter your email'
//                         />
//                     </div>
//                     <div className='grid gap-1'>
//                         <label htmlFor='password'>Password :</label>
//                         <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 id='password'
//                                 className='w-full outline-none'
//                                 name='password'
//                                 value={data.password}
//                                 onChange={handleChange}
//                                 placeholder='Enter your password'
//                             />
//                             <div onClick={() => setShowPassword(preve => !preve)} className='cursor-pointer'>
//                                 {
//                                     showPassword ? (
//                                         <FaRegEye />
//                                     ) : (
//                                         <FaRegEyeSlash />
//                                     )
//                                 }
//                             </div>
//                         </div>
//                         <Link to={"/forgot-password"} className='block ml-auto hover:text-primary-200'>Forgot password ?</Link>
//                     </div>
    
//                     <button disabled={!valideValue} className={` ${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" }    text-white py-2 rounded font-semibold my-3 tracking-wide`}>Login</button>

//                 </form>

//                 <p>
//                     Don't have account? <Link to={"/register"} className='font-semibold text-green-700 hover:text-green-800'>Register</Link>
//                 </p>
//             </div>
//         </section>
//     )
// }

// export default Login
import React, { useState } from 'react'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';
import fetchUserDetails from '../utils/fetchUserDetails';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const valideValue = Object.values(data).every(el => el);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({ ...SummaryApi.login, data });
      if (response.data.error) toast.error(response.data.message);
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('accesstoken', response.data.data.accesstoken);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
        const userDetails = await fetchUserDetails();
        dispatch(setUserDetails(userDetails.data));
        setData({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-extrabold text-green-800 text-center mb-2">Login to Your Account</h2>
        <p className="text-center text-gray-600 mb-8 text-sm font-medium">Welcome back! Please enter your details.</p>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-xl bg-green-50 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all text-sm"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
            <div className="flex items-center border rounded-xl px-4 py-3 bg-green-50 focus-within:ring-2 focus-within:ring-green-300 transition-all">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-sm"
              />
              <div onClick={() => setShowPassword(prev => !prev)} className="cursor-pointer text-gray-600 ml-2 text-lg">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <Link to="/forgot-password" className="text-sm text-green-700 hover:underline text-right mt-1 block">Forgot password?</Link>
          </div>

          <button
            disabled={!valideValue}
            className={`w-full py-3 rounded-xl font-bold tracking-wide transition-all duration-200 ${
              valideValue
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm font-medium text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
