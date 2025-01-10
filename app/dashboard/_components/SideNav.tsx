"use client";
import { History, Home, ReceiptIndianRupee, Settings2 } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React,{useEffect} from 'react';

function SideNav() {
  const Menu = [
    {
      name: 'Home',
      icon: Home,
      link: '/dashboard',
    },
    {
      name: 'History',
      icon: History,
      link: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: ReceiptIndianRupee,
      link: '/dashboard/billing',
    },
    {
      name: 'Settings',
      icon: Settings2,
      link: '/dashboard/settings',
    },
  ]

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }
  , [path]);
  return (
    <div className='h-screen border-r shadow-sm p-5'>
        <div className="flex justify-center items-center p-1 ">
        <Image src='/ai-content-generator-logo.png' alt='logo Image' width={100} height={100} />
        </div>
        <hr className='border-2 my-5'/>
        <div className="flex-col justify-center items-center py-5">
        {
          Menu.map((item,index)=>(
            <div key={index} className={`flex justify-center items-center p-1 my-3 h-20 hover:text-white hover:bg-primary rounded-lg cursor-pointer ${path === item.link && 'bg-primary text-white'}`}>
              <item.icon size={20} />
              <a href={item.link} className='pl-2'><h2 className='text-lg '>{item.name}</h2></a>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default SideNav;