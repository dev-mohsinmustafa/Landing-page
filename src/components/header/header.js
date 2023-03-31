// import React from 'react'
// import { Navbar } from 'flowbite-react';
// // import Button from '../button/button';
// import { Button } from 'flowbite-react';


// export default function Nav() {
//   return (


//     <div className='bg-slate-500'>
//     <div >
//       <Navbar  
//   fluid={true}
//   rounded={true} 
//   className=''
// >
//   <Navbar.Brand href="#">
//     {/* <img
//       src="https://flowbite.com/docs/images/logo.svg"
//       className="mr-3 h-6 sm:h-9"
//       alt="Flowbite Logo"
//     /> */}
//     <span className="self-center whitespace-nowrap   font-bold Josefin Sans text-[24px] leading-[24px]
//      text-[#EEEEEE] ml-[80px] hover:text-[#FCE611]">
//      Jessie.
//     </span>
//   </Navbar.Brand>
//   <div className="flex md:order-2 mr-[96px]">
//     <Button className='bg-white'>
//       <span className='font-bold font-[JosefinSans] text-[#000000] text-[16px] leading-[16px]
//          hover:text-[#FCE611]'>

//     Schedule a call
//       </span>
//     </Button>
//     {/* <Button /> */}
//     <Navbar.Toggle />
//   </div>
//   <Navbar.Collapse>
//     <Navbar.Link
//       href="/navbars"
//       active={true}
//     >
//       <span className=' font-bold font-[JosefinSans] text-[18px] leading-[18px]
//        hover:text-[#FCE611] text-[#00ADB5] '>
//       Portfolio

//       </span>
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       <span className=' font-bold font-[JosefinSans] text-[18px] leading-[18px]
//       hover:text-[#FCE611] text-[#EEEEEE]'>
//     Blog

//       </span>
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       <span className=' font-bold font-[JosefinSans] text-[18px] leading-[18px]
//       hover:text-[#FCE611] text-[#EEEEEE]'>
//     Client reviews

//       </span>
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//     <span className='font-bold font-[JosefinSans] text-[18px] leading-[18px]
//     hover:text-[#FCE611] text-[#EEEEEE]'>

//     Contact me
//     </span>
//     </Navbar.Link>
//     {/* <Navbar.Link href="/navbars">
//       Contact
//     </Navbar.Link> */}
//   </Navbar.Collapse>
// </Navbar>


//     </div>

//     </div>
//   )
// }







// import React, { useState } from 'react'

// import Button from '../button/button';


// // const  Navbar = () => {
// //   let Links = [
// //     { name1: "Portfolio", link: "/" },
// //     { name: "Blog", link: "/blog" },
// //     { name: "Client reviews", link: "/client reviews" },
// //     { name: "Contact me", link: "/contact me" },
// //   ];
// //   let [open, setOpen] = useState(false);
// //   return (
// //     <div className='  shadow-md w-full sticky top-0 left-0  '>
// //       <div className='md:flex items-center justify-between bg-[#1F2022] py-7 px-7 md:px-10  '>
// //         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
// //       text-[#EEEEEE]'>

// //           Jessie.
// //         </div>

// //         <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
// //           <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
// //         </div>

// //         <ul className={`md:flex md:items-center pb-12 md:pb-0  absolute md:static bg-[#1F2022]   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
// //           {
// //             Links.map((link) => (
// //               <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
// //                 <a href={link.link} className=' text-[#EEEEEE]  hover:text-[#FCE611] duration-500'>{link.name}</a>
// //                 <a href={link.link} className=' text-[#00ADB5]  hover:text-[#FCE611] duration-500'>{link.name1}</a>

// //               </li>
// //             ))
// //           }

// //         </ul>
// //         <Button>
// //             Schedule a call
// //           </Button>

// //       </div>
// //     </div>


// //   )
// // }

// // export default Navbar;

import { useState } from "react"
const Nav = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);


  return (

    <nav class="bg-[#1F2022] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
          <span class="self-center font-bold font-[JosefinSans] 
          text-[24px] leading-[24px] whitespace-nowrap dark:text-white text-[#EEEEEE] 
          mx-12 hover:text-[#FCE611] ">Jessie.</span>

        </a>
        <div class="flex md:order-2">
          <button type="button" class=" focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-[3px]
          font-bold font-[JosefinSans] 
          text-[18px] leading-[18px]
          
          
          
          text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-[#EEEEEE] hover:bg-yellow-300 text-[background: #000000] ">Schedule a call</button>
          <button onClick={() => setShowMediaIcons(!showMediaIcons)}  data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${showMediaIcons ? "navbar-cta mobile-navbar-cta" : "navbar-cta"}`} id="navbar-cta">


        {/* <div className = " items-center justify-between hidden  w-full md:flex md:w-auto md:order-1" id = "navbar-cta"

          {...showMediaIcons ? "navbar-cta mobile-navbar-cta" : "navbar-cta" }
        > */}
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#1F2022]  dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4   rounded md:bg-transparent md:p-0 dark:text-white 
              hover:text-[#FCE611] text-[#00ADB5] font-bold font-[JosefinSans] 
              text-[18px] leading-[18px]" aria-current="page">Portfolio</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#FCE611] text-[#EEEEEE]">Blog</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#FCE611] text-[#EEEEEE]">Client reviews</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  md:dark:hover:bg-transparent dark:border-gray-700 hover:text-[#FCE611] text-[#EEEEEE]">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}


export default Nav;












































// import React from 'react'
// import { HiMenu } from 'react-icons/hi';
// export default function Header() {
//     return (


//         <div className=' max-w-[1330]'>

//             <nav className='bg-[#1F2022]  h-[100px] w-[100%] flex flex-col md:flex-row items-center justify-between'>              {/* h-[100px] or w-[100%] krne se navbar ki hight or width full rahe ge jitne set ki hai */}
//                 <div className='text-[#EEEEEE] mx-12 hover:text-[#FCE611] cursor-pointer'>Jessie.</div>

//                 <div className='flex'>
//                     <ul className='  flex flex-col md:flex-row items-center  gap-[20px] md:gap-[40px]'>
//                         <li><a className='hover:text-[#FCE611] text-[#00ADB5]' href="#">Portfolio</a></li>
//                         <li><a className='hover:text-[#FCE611] text-[#EEEEEE]' href="#">Blog</a></li>
//                         <li><a className='hover:text-[#FCE611] text-[#EEEEEE]' href="#">Client reviews</a></li>
//                         <li><a className='hover:text-[#FCE611] text-[#EEEEEE]' href="#">Contact me</a></li>


//                     </ul>

//                 </div>
//                 <div className='flex'>
//                     <button className='bg-[#EEEEEE] px-5 py-2 hover:bg-yellow-300 m-14  w-[162px] h-[50px] rounded'>Schedule a call</button>

//                     <HiMenu className='text-white' />
//                 </div>


//             </nav>

//         </div>



//     );
// }
