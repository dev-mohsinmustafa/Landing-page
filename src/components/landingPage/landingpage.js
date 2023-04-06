import React from 'react';
import './landingPage.css';
import SliderItems from '../slider/sliderItems';
import elipseImage from "../../assets/Ellipse 1.png";
import lineImage from "../../assets/Line 1.png";

// import Nav from '../header/nav';
// import NavMenu from '../header/navMenu';



export default function Landingpage() {
  return (

    <div className='mainImage w-[100%]  bg-no-repeat  bg-center  bg-contain '>

      {/* <Nav /> */}
      {/* <NavMenu /> */}

      <div className=' flex flex-col  items-end    '>       {/* mr-20 deleted*/}


        {/* <p className='  text-[#EEEEEE] font-Poppins font-medium  text-center md:text-right text-[18px] leading-[27px] tracking-[0.04em]'>Hello there, Nice to meet you. I am</p>
        <p className=' text-[#00ADB5] font-Montserrat   text-center md:text-right  text-[100px] font-extrabold leading-[121.9px] tracking-[0.06em]'>Jessie</p>
        <p className='max-w-[330px]  text-[#EEEEEE] font-Poppins font-normal  text-center md:text-right  text-[16px] leading-[30px] tracking-[0.04em]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}

        {/* <a href="#" class="block max-w-sm p-6   ">
              <p className='  text-[#EEEEEE] font-Poppins font-medium  text-center md:text-right text-[18px] leading-[27px] tracking-[0.04em]'>Hello there, Nice to meet you. I am</p>
              <h5 class=" text-[#00ADB5] font-Montserrat text-[100px] font-extrabold   tracking-tight">Jessie</h5>
              <p class="text-[#EEEEEE] font-Poppins font-normal ">amet sint. Velit officia consequat duis enim velit mollit.Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
           </a> */}


        {/* <div class="max-w-sm p-6">
         <a href="#">
           <p class=" text-[#EEEEEE] font-Poppins font-medium text-[18px] leading-[27px] tracking-[0.04em]">Hello there, Nice to meet you. I am</p>
           <p class=" text-[#00ADB5] font-Montserrat  font-bold text-[50px]  leading-[121.9px] tracking-[0.06em]">Jessie</p>
          </a>
          <p class=" text-[#EEEEEE] font-Poppins font-normal ">amet sint. Velit officia consequat duis enim velit mollit.Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint..</p>
          </div> */}







        {/* <!-- Right --> */}
        {/* <div class="py-16"> */}
        <div className=" md:w-1/2 mt-[151px]">
          <div className="flex flex-col items-start text-left mb-6  md:mb-3   mr-0 sm:mr-[100px]  ">
              <p className=" text-[#EEEEEE] font-[Poppins] font-medium text-[18px] leading-[27px]  tracking-[4%] ">Hello there, Nice to meet you. I am.</p>
              <h1 className=" text-[#00ADB5] font-[Montserrat]  font-extrabold text-[100px] leading-[121.9px]  tracking-[6%]">Jessie</h1>
              <p className="text-[#EEEEEE] font-[Poppins] font-normal text-[16px] leading-[30px] tracking-[4%]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>


          </div>
        </div>
        {/* </div> */}
      </div>
      
      {/* Left */}
      <div className=''>

        <div className='flex ml-20 flex-row items-center '>

          <div className=' flex w-[30px]  '>
            <img src={elipseImage} alt="" className='pb-14' />
          </div>

          <p className="text-[#00ADB5] font-[Montserrat] font-extrabold text-[24px] leading-[30px] tracking-[0.04em]">Pro <br /> photographer</p>
        </div>


      </div>
      <SliderItems />

      <div className='flex flex-row items-center ml-20 gap-3 '>
        <div className='  w-[20px]   '>
          <img src={lineImage} alt="" className='pb-[80px]' />
        </div>

        <p className="text-[#EEEEEE] font-[Montserrat] font-extrabold text-[24px] leading-[40px] pb-10">Let’s take your <br /> photographs to next level</p>

      </div>
    </div>

  )
}
