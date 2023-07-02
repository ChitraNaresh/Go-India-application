import Image from 'next/image'

export default function Home() {

  return (
      <nav className='w-full bg-white h-14 flex items-center space-x-6 pl-4'>
      <ul className='list-none flex space-x-1 items-center w-4/5'>
        <li className='w-1/5'>
          <img src="https://goindiastocks.com/Content/assets/images/logewithname.png" alt="logo" className='h-10'/>
        </li>
        <li className='bg-zinc-300 ml-4 flex p-1 w-3/5'>
          <input type="search" className='h-6 bg-zinc-300 w-full'/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-0.5">
               <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
        </li>
        <li className='w-1/5 lg:hidden'>
          <img src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png" alt="user" className='h-8'/>
        </li>
      </ul>
      <ul className='flex items-center w-1/5 space-x-3 hidden lg:contents '>
      <li className='text-stone-900 text-xs h-5 mt-2 w-20'>Contact Us</li>
        <li>
          <button className='text-stone-900 text-xs border-2 h-8 p-2 w-20'>SIGN UP</button>
        </li>
        <li>
          <button className="text-stone-900 text-xs border-2 h-8 p-2 w-20">SIGN IN</button>
        </li>
      </ul>
    </nav>
  )
}