import React from 'react'
//import logo from './app/images/logo.png'

function Header() {
  return (
<div className="parent-container">
  <div className="main-header pl-20 pr-20  border-solid border-b-[1px] pb-6">
    <div className="flex justify-between h-20 items-center primary-header">
      <div className='h-[120px] w-[120px] block'>
        <img src= "images/logo.png" alt="" />
      </div>
      <div className="flex gap-6">
        <div className="font-medium ">Stays</div>
        <div>Experiences</div>
        <div>Online Experiences</div>
      </div>
      <div className="flex gap-4">
        <div>Register A Holiday</div>
        <div>Globe</div>
        <div>Dropdown</div>
      </div>
    </div>
    <div className="flex justify-center w-full primary-header">
      <div className="flex w-fit border-solid border-[1px] justify-between rounded-full pt-2 pb-2 pl-6 min-w-[60%] shadow-lg">
        <div>
          <div className="font-medium" >Where</div>
          <div>Search Destination</div>
        </div>
        <div>
          <div className="font-medium">Check In</div>
          <div>Add dates</div>
        </div>
        <div>
          <div className="font-medium">Check out</div>
          <div>Add dates</div>
        </div>
        <div>
          <div className="font-medium">Who</div>
          <div>Add guests</div>
        </div>
        <div className="bg-[#2097F3] rounded-full h-12 w-12 mr-3"></div>
    </div>
    </div>
    <div className="flex justify-center w-full secondary-header">
      <div className="flex w-fit border-solid border-[1px] justify-between rounded-full gap-10 pl-6 pt-2 pb-2 hover:shadow-lg">
        <div className="font-medium" >Anywhere</div>
        <div className="font-medium">Any week</div>
        <div className="font-medium">Any guests</div>
        
        <div className="bg-[#2097F3] rounded-full aspect-square h-8 w-8 mr-3"></div>
    </div>
    </div>
  </div>
  <div className=" filter-header h-20 bg-slate-100">

  </div>
  <div className="content-section grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 pl-20 pr-20 ">
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    <div className="flex flex-col mb-3 product-card">
      <img className=" aspect-square " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
      <span className="font-medium">Himachal Pradesh,India</span>
      <span>200 Kilometres away</span>
      <span className="mb-1">5-7 May</span>
      <span className="font-medium">₹10,000</span>
    </div>
    
    
  </div>

</div>
    
  )
}

export default Header

