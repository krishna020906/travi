"use client"
import { Globe, Menu } from 'lucide-react'
import React, { useEffect } from 'react'
import AvatarComponent from './Avatar'


function Header() {
  useEffect(() => {
    const element = document.querySelector('.parent-container')
    function handlescroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 3) {
        element?.classList.add('show-item')
      } else {
        element?.classList.remove('show-item')
      }
    }
    window.addEventListener('scroll', handlescroll)
  
    return () => {
      window.removeEventListener('scroll', handlescroll)
    }
  }, [])
  
  return (
    
    
    <div className="parent-container">
      <div className=" main-header pl-20 pr-20 border-solid border-b-[1px] pb-6">
        <div className="flex justify-between h-20 items-center ">
          <div className='h-[120px] w-[120px] block'>
            <img src= "images/logo.png" alt="" />
          </div>
          <div className="flex gap-6 primary-header">
            <div className="font-medium ">Stays</div>
            <div>Experiences</div>
            <div>Online Experiences</div>
          </div>
          <div className="flex gap-4 items-center">
            <div>Register A Holiday</div>
            <div> <Globe /> </div>
            <div className='flex p-2 border-solid-[1px] rounded-full items-center gap-2'>
              <Menu />
              <AvatarComponent />
            </div>
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
      <div className=" filter-header h-20 ">

      </div>

    </div>
    
  )
}

export default Header

