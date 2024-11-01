import React from "react";
 import Link from "next/link";

export default function Featured(){
   return(

<div className="flex flex-col bg-gray-200" >
<div >
  <div className=" w-80 ">
<h1 className="text-3xl py-4 px-6 font-bold text-blue-900">Featured New Cars</h1>
</div>
  
   <div className="w-96 flex justify-center items-center">
   <ul className="flex flex-row  items-start space-x-8 px-5 py-5 sm:flex-row" >
                        <li><Link href="/Populer" className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Popular</Link></li>
                        <li><Link href="/Upcoming" className=" hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Upcoming</Link></li>
                        <li><Link href="/NewlyLaunched" className=" hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Newly Launched</Link></li>
                    </ul>
    
    </div> 

</div>

{/* car 1 */}
{/* <div className="flex px-10 items-center gap-2 bg-gray-200 w-full h-96  "> */}
<div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-1- gap-x-14 mt-10 mb-5" >
<div className=" px-2 h-96 w-72">
<Link href="/ToyotaCorollaDet">
<img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>

</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Corolla</h2>
<p className= "flex justify-center text-green-500">PKR 59.7 - 75.5 lacs</p>
<div className="flex justify-center text-1xl  text-yellow-500 mr-2">
    {'★★★★☆ 621 Reviews'}
</div>
</div>

{/* car two */}
<div className=" px-2 h-96 w-72">
<Link href="/SuzukiAltoDet">
<img src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>
</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Suzuki Alto</h2>
<p className= "flex justify-center text-green-500">PKR 23.3 - 30.5 lacs</p>
<div className="flex justify-center text-1xl text-yellow-500 mr-2">
    {'★★★☆☆ 191 Reviews'}
</div>
</div>
{/* car three */}
<div className=" px-2 h-96 w-72">
<Link href="/HondaCityDet">
<img src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>
</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Honda City</h2>
<p className= "flex justify-center text-green-500">PKR 46.5 - 58.5 lacs</p>
<div className="flex justify-center text-1xl text-yellow-500 mr-2">
    {'★★★☆☆ 458 Reviews'}
</div>
</div>


{/* car 4 */}
<div className="px-2 h-96 w-72">
<Link href="/HondaCivicDet">
<img src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>
</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Honda Civic</h2>
<p className= "flex justify-center text-green-500">PKR 86.6 - 99.0 lacs</p>
<div className="flex justify-center text-1xl text-yellow-500 mr-2">
{'★★★★☆ 357 Reviews'}
</div>
</div>


</div>




    </div>
   )
  
}