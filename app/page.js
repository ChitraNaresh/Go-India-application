"use client"
import { useState } from "react"
import NavBar from "./NavBar"
import EachUser from "./EachUser"
import MenuBar from './MenuBar'
import MarketDetails from "./MarketDetails"


const usersList=[
  {
    id:1,
    companyImage:"https://www.ia.ooo/wp-content/uploads/2022/06/infibeam-logo-new.png",
    userIcon:"https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
    username:"Lorem Ipsum",
    message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    loveLike:2,
    views:2,
    comments:2,
    bgColor:"bg-red-700"
  },
  {
    id:2,
    userIcon:"https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
    username:"Audem Milne",
    message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    loveLike:2,
    views:2,
    comments:2,
    bgColor:"bg-cyan-800"
  },
  {
    id:3,
    userIcon:"https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
    username:"Vardanes Jovichu",
    message:"Kerum Saan is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    loveLike:2,
    views:2,
    comments:2,
    bgColor:"bg-amber-400"
  },
  {
    id:4,
    userIcon:"https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
    username:"Larun Vasai",
    message:"Lorem Ipsum is simply duumy text of printing and typesetting industry. Lorem ipsum is",
    loveLike:2,
    views:2,
    comments:2,
    bgColor:"bg-lime-800"
  }
]

const imagesList=[{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
{
  imageUrl:"https://goindiastocks.com/Content/assets/images/logewithname.png",
  altValue:"comapny",
  className:'h-14 w-16 p-2'
},
]

export default function Home() {

   const [isTrue,setSideBar]=useState(false)
   const [whichBtn,setButton]=useState(true)
   const [serachedValue,setSearched]=useState("")
   const [usersArray,setUsersList]=useState(usersList)

  const onSeeBar=()=>{
    setSideBar(!isTrue)
  }
  
  const newUsersList=usersArray.filter(eachUserObj=>eachUserObj.username.toLowerCase().includes(serachedValue.toLocaleLowerCase()))

  return (
    <main className="min-h-screen bg-slate-100">
      <div>
      <NavBar/>
      <ul className='flex space-x-3 bg-black h-6 pt-1 justify-center w-full'>
        <li className='text-slate-200 text-xs'>HDFCBANK</li>
        <li className='text-slate-200 text-xs'>1,657.10</li>
        <li className='text-lime-500 text-xs'>0.40%</li>
        <li className='text-slate-200 text-xs'>HINDHUNILVR</li>
        <li className='text-slate-200 text-xs'>2,557.50</li>
      </ul>
      <div className='h-20 sm:h-24 bg-cyan-100 '>
        <h1 className="font-bold text-md text-red-500 hidden sm:contents mt-1">Featured Companies</h1>
      <div className="flex justify-center space-x-3 pt-1 overflow-x-auto">
           {
            imagesList.map(eachItem =>(<img src={eachItem.imageUrl} alt={eachItem.altValue} className={eachItem.className}/>))
           }
      </div>
      </div>
      <div className="sm:hidden">
        <button type="button" className='bg-cyan-900 h-10 text-white w-1/2' onClick={()=>(setButton(true))}>Disscussion Fourm</button>
        <button type="button" className='bg-cyan-900 h-10 text-white w-1/2' onClick={()=>(setButton(false))}>Market Stories</button>
      </div>
      </div>
      
      <div className="flex">
        <div className="flex">
          {isTrue ? <MenuBar onClickBtnClose={onSeeBar}/> :
            <div className='bg-cyan-900 w-6 h-14 pl-1 pr-2 flex rounded-r-md self-center'>
             <button onClick={onSeeBar}>
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-8 text-white">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
             </button>
            </div>} 
        <div className='ml-3'>
          <div>
          <h1 className="font-semibold text-red-600 text-xl hidden lg:contents">Disscussion Fourm</h1>
          <h1 className='font-lg text-stone-950 font-bold mt-3 ml-2'>Filter</h1>
          <div className='flex bg-white p-1 pt-4 pb-3 m-2 rounded-lg '>
            <button type="button" className='h-6 w-15 bg-red-700 text-white text-xs p-1 rounded-xl mr-1'>Section 1</button>
            <button type="button" className='h-6 bg-cyan-800 text-white text-xs p-1 rounded-xl mr-1'>Section 2</button>
            <button type="button" className='h-6 bg-amber-400 text-white text-xs p-1 rounded-xl'>Section 3</button>
            <div className='h-7 ml-1 flex items-center border-2 border-current w-24 rounded-2xl pl-2'>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 mt-0.5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                 </svg>
                 <input type="search" placeholder='Search' className='h-6 w-14 bg-white ml-1 border-none outline-none text-xs' onChange={()=>(setSearched(event.target.value))}/>
            </div>
          </div>
        </div>
        <ul className="max-h-96 overflow-y-scroll">
          {
            newUsersList.map(eachItem=> (<EachUser userDetailsObj={eachItem} key={eachItem.id}/>))
          }
        </ul>
        <div className='fixed bottom-16 right-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-cyan-900">
               <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>
        </div>
      </div>
      </div> 
      <div className="hidden md:contents ml-2 max-h-96">
      <MarketDetails/>
      </div> 
      </div>
      <div className='bg-cyan-900 p-2 flex justify-center fixed bottom-0 right-0 w-full sm:hidden'>
        <ul className='flex space-x-12 text-slate-200 '>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
            <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
          </svg>

          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
            </svg>

          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
            </svg>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
           </li>
          <li>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
             </svg>
          </li>
        </ul>
      </div>
    </main>
  )
}
 