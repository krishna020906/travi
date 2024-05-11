import Image from "next/image";
import Header from "./components/Header"
import { categoryData } from "./lib/categories";

export default function Home() {
  const {categoryBar: {categories}} = categoryData
  return (
    <div className="parent-container">
      <Header categories = {categories} />
      <div className="content-section grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 pl-20 pr-20 ">
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover" src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex flex-col mb-3 product-card">
          <img className=" aspect-square object-cover " src="https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg" />
          <span className="font-medium">Himachal Pradesh,India</span>
          <span>200 Kilometres away</span>
          <span className="mb-1">5-7 May</span>
          <span className="font-medium">₹10,000</span>
        </div>
        
        
      </div>
    </div>
  );
}
