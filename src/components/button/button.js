import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#EEEEEE] hover:bg-yellow-300 text-black font-[Poppins] py-2 px-6 rounded md:ml-8 
    duration-500 '>
      {props.children}
    </button>
  )
}

export default Button;

// import React from 'react'

// export default function () {
//   return (
//     <div>
//         <button className='bg-[#EEEEEE] font-bold font-[JosefinSans] text-[16px] leading-[16px]
//          hover:text-[#FCE611]'>
//             {/* <Button className='bg-[#EEEEEE]'>
//       <span className='font-bold font-[JosefinSans] text-[16px] leading-[16px]
//          hover:text-[#FCE611]'>

//     Schedule a call
//       </span>
//     </Button> */}
// Schedule a call
//         </button>
//     </div>
// //     <div>
// // <button className="text-white  border border-transparent hover:bg-yellow-200  focus:bg-yellow-200
// //  disabled:hover:bg-yellow-200 dark:bg-yellow-200 dark:hover:bg-yellow-200 dark:focus:bg-yellow-200 dark:disabled:hover:bg-yellow-200 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg bg-[#EEEEEE]">





// // </button>
//     // </div>
//   )
// }






