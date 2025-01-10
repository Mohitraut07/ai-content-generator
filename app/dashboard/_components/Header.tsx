import { Search } from 'lucide-react';
import React from 'react';

function Header() {
  return (
    <div className='w-full h-20 flex items-center justify-between bg-white mb-5 p-2 shadow-md border-b-2'>
      <div className="flex items-center gap-2 p-2 rounded-md max-w-lg border">
      <Search size={20} />
      <input type="text" placeholder='Search...' className='outline-none '/>
      </div>
      <div className="bg-primary text-xs text-white p-1 px-2 rounded-full cursor-pointer">
      🔥 Join Membership just for Rs.1000 per month
      </div>
    </div>
  )
}

export default Header;