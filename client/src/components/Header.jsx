// import React, { useEffect, useState } from 'react'
// import logo from '../assets/logo.png'
// import Search from './Search'
// import { Link, useLocation,useNavigate } from 'react-router-dom'
// import { FaRegCircleUser } from "react-icons/fa6";
// import useMobile from '../hooks/useMobile';
// import { BsCart4 } from "react-icons/bs";
// import { useSelector } from 'react-redux';
// import { GoTriangleDown, GoTriangleUp  } from "react-icons/go";
// import UserMenu from './UserMenu';
// import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees';
// import { useGlobalContext } from '../provider/GlobalProvider';
// import DisplayCartItem from './DisplayCartItem';

// const Header = () => {
//     const [ isMobile ] = useMobile()
//     const location = useLocation()
//     const isSearchPage = location.pathname === "/search"
//     const navigate = useNavigate()
//     const user = useSelector((state)=> state?.user)
//     const [openUserMenu,setOpenUserMenu] = useState(false)
//     const cartItem = useSelector(state => state.cartItem.cart)
//     // const [totalPrice,setTotalPrice] = useState(0)
//     // const [totalQty,setTotalQty] = useState(0)
//     const { totalPrice, totalQty} = useGlobalContext()
//     const [openCartSection,setOpenCartSection] = useState(false)
 
//     const redirectToLoginPage = ()=>{
//         navigate("/login")
//     }

//     const handleCloseUserMenu = ()=>{
//         setOpenUserMenu(false)
//     }

//     const handleMobileUser = ()=>{
//         if(!user._id){
//             navigate("/login")
//             return
//         }

//         navigate("/user")
//     }

//     //total item and total price
//     // useEffect(()=>{
//     //     const qty = cartItem.reduce((preve,curr)=>{
//     //         return preve + curr.quantity
//     //     },0)
//     //     setTotalQty(qty)
        
//     //     const tPrice = cartItem.reduce((preve,curr)=>{
//     //         return preve + (curr.productId.price * curr.quantity)
//     //     },0)
//     //     setTotalPrice(tPrice)

//     // },[cartItem])

//   return (
//     <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
//         {
//             !(isSearchPage && isMobile) && (
//                 <div className='container mx-auto flex items-center px-2 justify-between'>
//                                 {/**logo */}
//                                 <div className='h-full'>
//   <Link to={"/"} className='h-full flex justify-center items-center'>
//     <h1 className='text-3xl lg:text-4xl font-extrabold text-green-800 tracking-wide'>
//       InstaMart
//     </h1>
//   </Link>
// </div>



//                                 {/**Search */}
//                                 <div className='hidden lg:block'>
//                                     <Search/>
//                                 </div>


//                                 {/**login and my cart */}
//                                 <div className=''>
//                                     {/**user icons display in only mobile version**/}
//                                     <button className='text-neutral-600 lg:hidden' onClick={handleMobileUser}>
//                                         <FaRegCircleUser size={26}/>
//                                     </button>

//                                       {/**Desktop**/}
//                                     <div className='hidden lg:flex  items-center gap-10'>
//                                         {
//                                             user?._id ? (
//                                                 <div className='relative'>
//                                                     <div onClick={()=>setOpenUserMenu(preve => !preve)} className='flex select-none items-center gap-1 cursor-pointer'>
//                                                         <p>Account</p>
//                                                         {
//                                                             openUserMenu ? (
//                                                                   <GoTriangleUp size={25}/> 
//                                                             ) : (
//                                                                 <GoTriangleDown size={25}/>
//                                                             )
//                                                         }
                                                       
//                                                     </div>
//                                                     {
//                                                         openUserMenu && (
//                                                             <div className='absolute right-0 top-12'>
//                                                                 <div className='bg-white rounded p-4 min-w-52 lg:shadow-lg'>
//                                                                     <UserMenu close={handleCloseUserMenu}/>
//                                                                 </div>
//                                                             </div>
//                                                         )
//                                                     }
                                                    
//                                                 </div>
//                                             ) : (
//                                                 <button 
//                                                 onClick={redirectToLoginPage} 
//                                                 className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white font-semibold py-2 px-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
//                                             >
//                                                 Login
//                                             </button>
//                                             )
//                                         }
//                                        <button 
//   onClick={() => setOpenCartSection(true)} 
//   className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-800 hover:from-emerald-500 hover:to-green-700 px-5 py-2 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105"
// >
//   {/* Cart Icon */}
//   <div className="animate-bounce">
//     <BsCart4 size={26} />
//   </div>

//   {/* Cart Info */}
//   <div className="font-semibold text-sm text-left leading-tight">
//     {cartItem[0] ? (
//       <div>
//         <p>{totalQty} Items</p>
//         <p>{DisplayPriceInRupees(totalPrice)}</p>
//       </div>
//     ) : (
//       <p>My Cart</p>
//     )}
//   </div>
// </button>

//                                     </div>
//                                 </div>
//                 </div>
//             )
//         }
        
//         <div className='container mx-auto px-2 lg:hidden'>
//             <Search/>
//         </div>

//         {
//             openCartSection && (
//                 <DisplayCartItem close={()=>setOpenCartSection(false)}/>
//             )
//         }
//     </header>
//   )
// }

// export default Header
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Search from './Search'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6"
import useMobile from '../hooks/useMobile'
import { BsCart4 } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go"
import UserMenu from './UserMenu'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
import { useGlobalContext } from '../provider/GlobalProvider'
import DisplayCartItem from './DisplayCartItem'

const Header = () => {
  const [isMobile] = useMobile()
  const location = useLocation()
  const isSearchPage = location.pathname === "/search"
  const navigate = useNavigate()
  const user = useSelector((state) => state?.user)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const cartItem = useSelector(state => state.cartItem.cart)
  const { totalPrice, totalQty } = useGlobalContext()
  const [openCartSection, setOpenCartSection] = useState(false)

  const redirectToLoginPage = () => navigate("/login")

  const handleCloseUserMenu = () => setOpenUserMenu(false)

  const handleMobileUser = () => {
    if (!user._id) {
      navigate("/login")
      return
    }
    navigate("/user")
  }

  return (
    <header className='h-24 lg:h-20 sticky top-0 z-40 flex flex-col justify-center bg-white shadow-md'>
      {
        !(isSearchPage && isMobile) && (
          <div className='container mx-auto flex items-center px-6 lg:px-12 justify-between'>

            {/* Logo + Timer */}
            <div className='flex items-center gap-4'>
              <Link to={"/"} className='flex items-center gap-2'>
                <h1 className='text-2xl lg:text-3xl font-extrabold text-green-700 tracking-wider'>InstaMart</h1>
              </Link>

              {/* Delivery Timer */}
              <div className='hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm shadow-lg border border-emerald-300 transition-all duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                Delivery in <span className='ml-1 font-bold'>30 mins</span>
              </div>
            </div>

            {/* Search */}
            <div className='hidden lg:block w-full max-w-lg'>
              <Search />
            </div>

            {/* User + Cart */}
            <div className='flex items-center gap-4'>
              {/* Mobile User */}
              <button className='text-neutral-600 lg:hidden' onClick={handleMobileUser}>
                <FaRegCircleUser size={26} />
              </button>

              {/* Desktop User + Cart */}
              <div className='hidden lg:flex items-center gap-6'>

                {/* Account Section */}
                {
                  user?._id ? (
                    <div className='relative'>
                      <div onClick={() => setOpenUserMenu(prev => !prev)} className='flex items-center gap-1 cursor-pointer select-none'>
                        <p className='text-gray-700 font-medium'>Account</p>
                        {
                          openUserMenu ? <GoTriangleUp size={20} /> : <GoTriangleDown size={20} />
                        }
                      </div>
                      {
                        openUserMenu && (
                          <div className='absolute right-0 top-10 bg-white rounded-md p-4 shadow-lg min-w-48 z-50'>
                            <UserMenu close={handleCloseUserMenu} />
                          </div>
                        )
                      }
                    </div>
                  ) : (
                    <button
                      onClick={redirectToLoginPage}
                      className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:scale-105 transition-transform"
                    >
                      Login
                    </button>
                  )
                }

                {/* Cart Button */}
                <button
                  onClick={() => setOpenCartSection(true)}
                  className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-800 hover:from-emerald-500 hover:to-green-700 px-5 py-2 rounded-full text-white shadow-md transition-all hover:scale-105"
                >
                  <div className="animate-bounce">
                    <BsCart4 size={24} />
                  </div>
                  <div className="text-left text-sm">
                    {cartItem[0] ? (
                      <>
                        <p className='font-semibold'>{totalQty} Items</p>
                        <p className='text-xs'>{DisplayPriceInRupees(totalPrice)}</p>
                      </>
                    ) : (
                      <p className='font-medium'>My Cart</p>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* Mobile Search */}
      <div className='container mx-auto px-6 lg:px-12 lg:hidden'>
        <Search />
      </div>

      {/* Cart Section Popup */}
      {
        openCartSection && (
          <DisplayCartItem close={() => setOpenCartSection(false)} />
        )
      }
    </header>
  )
}

export default Header
