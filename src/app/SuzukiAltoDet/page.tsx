"use client"
import React from "react";
import Link from "next/link";
 export default function SuzukiAltoDet(){
   return(
<div>
    <div className="bg-white ">
    <h1 className="text-sm text-gray-600 px-6 py-3">Home / New Cars / Suzuki /Suzuki Alto</h1>
    </div>
    <div className="bg-white">
    <h1 className="text-3xl font-bold text-blue-800 px-20 py-1">Suzuki Alto Price in Pakistan 2024, Images, Reviews & Specs</h1>
    </div>
<div className=" flex justify-center flex-col items-center bg-white">
  <div className="h-80">
<img className="cursor-pointer w-full items-center h-80" src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100"/>
</div>
<div className="bg-white">
<p className="text-center items-center px-20 ">
The price of Suzuki Alto 2024 in Pakistan ranges from PKR 23.3 lacs 
for the base variant to PKR 30.5 lacs for the top of the line variant.
 These prices of Suzuki Alto in Pakistan are ex-factory.   </p>
<h2 className="text-green-500 py-1 text-center text-2xl font-bold">PKR 23.3 - 30.5</h2>
    
</div>

<div className="bg-white py-2 w-full flex justify-center">
 <Link href="/SuzukiAltoDes">
 <button className="py-1 bg-blue-950 text-white flex justify-center text-center w-32 h-8 rounded-md hover:bg-blue-800">
Make Pyment
 </button>
 </Link>  
</div> 



</div>


</div>
   ) 
 }