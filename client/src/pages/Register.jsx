// import React, { useState } from 'react'
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { FaRegEye } from "react-icons/fa6";
// import toast from 'react-hot-toast';
// import Axios from '../utils/Axios';
// import SummaryApi from '../common/SummaryApi';
// import AxiosToastError from '../utils/AxiosToastError';
// import { Link, useNavigate } from 'react-router-dom';



// const Register = () => {
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//     })
//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//     const navigate = useNavigate()

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

//         if(data.password !== data.confirmPassword){
//             toast.error(
//                 "password and confirm password must be same"
//             )
//             return
//         }

//         try {
//             const response = await Axios({
//                 ...SummaryApi.register,
//                 data : data
//             })
            
//             if(response.data.error){
//                 toast.error(response.data.message)
//             }

//             if(response.data.success){
//                 toast.success(response.data.message)
//                 setData({
//                     name : "",
//                     email : "",
//                     password : "",
//                     confirmPassword : ""
//                 })
//                 navigate("/login")
//             }

//         } catch (error) {
//             AxiosToastError(error)
//         }



//     }
//     return (
//         <section className='w-full container mx-auto px-2'>
//             <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7'>
//                 <p className='text-2xl font-extrabold text-center'>Welcome to Blinkit</p>

//                 <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
//                     <div className='grid gap-1'>
//                         <label htmlFor='name'>Name :</label>
//                         <input
//                             type='text'
//                             id='name'
//                             autoFocus
//                             className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
//                             name='name'
//                             value={data.name}
//                             onChange={handleChange}
//                             placeholder='Enter your name'
//                         />
//                     </div>
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
//                     </div>
//                     <div className='grid gap-1'>
//                         <label htmlFor='confirmPassword'>Confirm Password :</label>
//                         <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
//                             <input
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 id='confirmPassword'
//                                 className='w-full outline-none'
//                                 name='confirmPassword'
//                                 value={data.confirmPassword}
//                                 onChange={handleChange}
//                                 placeholder='Enter your confirm password'
//                             />
//                             <div onClick={() => setShowConfirmPassword(preve => !preve)} className='cursor-pointer'>
//                                 {
//                                     showConfirmPassword ? (
//                                         <FaRegEye />
//                                     ) : (
//                                         <FaRegEyeSlash />
//                                     )
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                     <button disabled={!valideValue} className={` ${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" }    text-white py-2 rounded font-semibold my-3 tracking-wide`}>Register</button>

//                 </form>

//                 <p>
//                     Already have account ? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link>
//                 </p>
//             </div>
//         </section>
//     )
// }

// export default Register



import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const valideValue = Object.values(data).every(el => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Password and Confirm Password must be the same");
      return;
    }

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data
      });

      if (response.data.error) toast.error(response.data.message);

      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
        navigate("/login");
      }

    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-extrabold text-green-800 text-center mb-2">Create Your Account</h2>
        <p className="text-center text-gray-600 mb-8 text-sm font-medium">Join Blinkit and start your journey today.</p>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoFocus
              value={data.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 border rounded-xl bg-green-50 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all text-sm"
            />
          </div>

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
          </div>

          <div className="grid gap-1">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">Confirm Password</label>
            <div className="flex items-center border rounded-xl px-4 py-3 bg-green-50 focus-within:ring-2 focus-within:ring-green-300 transition-all">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full bg-transparent outline-none text-sm"
              />
              <div onClick={() => setShowConfirmPassword(prev => !prev)} className="cursor-pointer text-gray-600 ml-2 text-lg">
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <button
            disabled={!valideValue}
            className={`w-full py-3 rounded-xl font-bold tracking-wide transition-all duration-200 ${
              valideValue
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-sm font-medium text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
