// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   const categories = [
//     {
//       title: "Categories",
//       links: [
//         "Vegetables & Fruits",
//         "Dairy & Breakfast",
//         "Munchies",
//         "Cold Drinks & Juices",
//         "Instant & Frozen Food",
//         "Tea, Coffee & Health Drinks",
//         "Bakery & Biscuits",
//         "Sweet Tooth",
//         "Atta, Rice & Dal",
//         "Dry Fruits, Masala & Oil"
//       ]
//     },
//     {
//       title: "Quick Links",
//       links: [
//         "About Us",
//         "Careers",
//         "Blog",
//         "Partner with blinkit",
//         "Sell on blinkit",
//         "blinkit Corporate",
//         "Terms & Conditions",
//         "Privacy Policy",
//         "FAQs"
//       ]
//     },
//     {
//       title: "Cities We Serve",
//       links: [
//         "Delhi",
//         "Gurgaon",
//         "Hyderabad",
//         "Kolkata",
//         "Mumbai",
//         "Noida",
//         "Pune",
//         "Bangalore",
//         "Ghaziabad",
//         "Faridabad"
//       ]
//     }
//   ];

//   return (
//     <footer className="bg-gray-50 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Section with Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <div className="text-3xl font-bold">
//               <span className="text-yellow-500">blink</span>
//               <span className="text-green-600">it</span>
//             </div>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Everything you need gets delivered to your doorstep within minutes. We are here to revolutionize your shopping experience!
//             </p>
//             <div className="flex items-center space-x-4">
//               <a href="#" className="p-2.5 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//                 <FaFacebookF className="w-5 h-5 text-gray-700" />
//               </a>
//               <a href="#" className="p-2.5 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//                 <FaTwitter className="w-5 h-5 text-gray-700" />
//               </a>
//               <a href="#" className="p-2.5 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//                 <FaInstagram className="w-5 h-5 text-gray-700" />
//               </a>
//               <a href="#" className="p-2.5 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//                 <FaLinkedinIn className="w-5 h-5 text-gray-700" />
//               </a>
//               <a href="#" className="p-2.5 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
//                 <FaYoutube className="w-5 h-5 text-gray-700" />
//               </a>
//             </div>
//           </div>

//           {/* Category Columns */}
//           {categories.map((category) => (
//             <div key={category.title} className="space-y-4">
//               <h3 className="text-gray-900 font-semibold text-lg">{category.title}</h3>
//               <ul className="space-y-3">
//                 {category.links.map((link) => (
//                   <li key={link}>
//                     <a
//                       href="#"
//                       className="text-gray-600 hover:text-green-600 transition-colors text-sm"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Download Apps Section */}
//         <div className="border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-black text-white px-6 py-2.5 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center">
//                 <img
//                   src="/appstoreBadge.svg"
//                   alt="App Store"
//                   className="h-5 mr-2"
//                 />
//                 <span className="text-sm">Download on App Store</span>
//               </button>
//               <button className="bg-black text-white px-6 py-2.5 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center">
//                 <img
//                   src="/googlePlayBadge.svg"
//                   alt="Play Store"
//                   className="h-5 mr-2"
//                 />
//                 <span className="text-sm">Get it on Play Store</span>
//               </button>
//             </div>

//             <div className="flex flex-col items-center md:items-end space-y-2">
//               <p className="text-gray-500 text-sm">
//                 © 2025 Blinkit Technologies Private Limited
//               </p>
//               <p className="text-gray-400 text-xs">
//                 Made with in India for Indian Consumers
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const categories = [
    {
      title: "Categories",
      links: [
        "Vegetables & Fruits",
        "Dairy & Breakfast",
        "Munchies",
        "Cold Drinks & Juices",
        "Instant & Frozen Food",
        "Tea, Coffee & Health Drinks",
        "Bakery & Biscuits",
        "Sweet Tooth",
        "Atta, Rice & Dal",
        "Dry Fruits, Masala & Oil"
      ]
    },
    {
      title: "Quick Links",
      links: [
        "About Us",
        "Careers",
        "Blog",
        "Partner with InstaMart",
        "Sell on InstaMart",
        "Corporate",
        "Terms & Conditions",
        "Privacy Policy",
        "FAQs"
      ]
    },
    {
      title: "Cities We Serve",
      links: [
        "Delhi",
        "Gurgaon",
        "Hyderabad",
        "Kolkata",
        "Mumbai",
        "Noida",
        "Pune",
        "Bangalore",
        "Ghaziabad",
        "Faridabad"
      ]
    }
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="text-4xl font-extrabold tracking-tight text-gray-800">
              <span className="text-green-700">Insta</span>
              <span className="text-green-700">Mart</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Delivering groceries & essentials within minutes. Your convenience is our priority!
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2.5 bg-gray-100 rounded-full hover:bg-green-100 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-700 hover:text-green-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Category Links */}
          {categories.map((category) => (
            <div key={category.title}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-600 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="bg-black text-white px-6 py-2 rounded-lg flex items-center hover:bg-gray-900 transition"
              >
                <img src="/appstoreBadge.svg" alt="App Store" className="h-5 mr-2" />
                <span className="text-sm">App Store</span>
              </a>
              <a
                href="#"
                className="bg-black text-white px-6 py-2 rounded-lg flex items-center hover:bg-gray-900 transition"
              >
                <img src="/googlePlayBadge.svg" alt="Play Store" className="h-5 mr-2" />
                <span className="text-sm">Play Store</span>
              </a>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="text-gray-500 text-sm">© 2025 InstaMart Pvt. Ltd. All rights reserved.</p>
              <p className="text-gray-400 text-xs">Made with  in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
