"use client"
import { Globe, Search } from 'lucide-react'
import React, { useEffect } from 'react'
import Login from './Login'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from "next/image";
import Link from 'next/link'



const Header = ({categories}: any) => {
 
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
            <div className='text-muted-foreground' >Experiences</div>
            <div className='text-muted-foreground' >Online Experiences</div>
          </div>
          <div className="flex gap-4 items-center">
            <div>List A Holiday</div>
            <div> <Globe /> </div>
            <Login />
            
          </div>
        </div>
        <div className="flex justify-center w-full primary-header">
          <div className="flex w-fit border-solid border-[1px] justify-between rounded-full pt-2 pb-2 pl-6 min-w-[60%] shadow-lg">
            <div>
              <div className="font-medium text-xs" >Where</div>
              <div className='text-muted-foreground' >Search Destination</div>
            </div>
            <div>
              <div className="font-medium text-xs">Check In</div>
              <div className='text-muted-foreground'>Add dates</div>
            </div>
            <div>
              <div className="font-medium text-xs">Check out</div>
              <div className='text-muted-foreground'>Add dates</div>
            </div>
            <div>
              <div className="font-medium text-xs">Who</div>
              <div className='text-muted-foreground'>Add guests</div>
            </div>
            <div className="bg-[#2097F3] rounded-full h-12 w-12 mr-3 flex justify-center items-center text-white">
              <Search />
            </div>
        </div>
        </div>
        <div className="flex justify-center w-full secondary-header">
          <div className="flex w-fit border-solid border-[1px] justify-between rounded-full gap-10 pl-6 pt-2 pb-2 hover:shadow-lg">
            <div className="font-medium" >Anywhere</div>
            <div className="font-medium">Any week</div>
            <div className="font-medium">Any guests</div>
            
            <div className="bg-[#2097F3] rounded-full aspect-square h-9 w-9 mr-3 flex justify-center items-centre text-white">
              <Search className='mt-1' />
            </div>
        </div>
        </div>
      </div>
      <div className=" filter-header h-20 pl-20 pr-20">
      <Carousel className="w-full ">
        <CarouselContent className="-ml-1">
          {Array.from(categories).map((item: any, index) => (
            <CarouselItem key={index} className="pl-1 basis-auto">
              <div className="p-1">
                <Card className='shadow-none border-0 bg-transparent'>
                  <Link href={{
                    href:'/', query: {
                      filter:item.title
                    }
                  }}>
                    <CardContent className="flex flex-col items-center justify-center p-4 text-muted-foreground hover:underline hover:cursor-pointer ">
                      <Image width={30} height={30} src={item.imageUrl} alt="category-image"/>
                      <span className="text-sm font-normal">{item.title}</span>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

    </div>
    
  )
}

export default Header

