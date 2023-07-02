"use client"
export default function MenuBar(props) {
  const {onClickBtnClose}=props
  const barCloseBtn=()=>(onClickBtnClose())
    return (
      <div className="w-30 flex items-center">
        <nav className='bg-cyan-900 max-h-96 p-3'>
          <ul className="text-white text-sm">
            <li className="flex text-white font-Semibold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

              <a href="" className="ml-2 mr-5">Hello, User</a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>
            </li>
            <li className="flex mt-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6mr-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
            <select className="text-white font-semibold w-3/5 ml-1 bg-cyan-900">
              <option>Disscussion Forum</option>
              <option>Sentiment</option>
              <option>Market</option>
              <option>Sector</option>
              <option>Watchlist</option>
              <option>Events</option>
              <option>News/Interview</option>
            </select>
            </li>
            <li className="flex text-white font-semibold mt-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            
            <a href="" className="ml-2">Market Stories</a>
            </li>
            <li className="mt-3 mb-3 ml-8">
            <a href="">Sentiment</a>
            </li>
            <li className="mt-3 mb-3 ml-8">
            <a href="">Market</a>
            </li>
            <li className="mt-3 mb-3 ml-8">
            <a href="">Sector</a>
            </li>
            <li className="mt-3 mb-3 ml-8">
            <a href="">Watchlist</a>
            </li>
            <li className="mt-3 mb-3 ml-8">
            <a href="">Events</a>
            </li>
            <li className="mt-3 mb-3 ml-8">
            <a href="">News/Interviews</a>
            </li>
          </ul>
      </nav>
      <div className='bg-cyan-900 w-6 h-14 pl-1 pr-2  flex  rounded-r-md '>
          <button type="button" onClick={barCloseBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-8 text-white">
  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
</svg>

        </button>
        </div>
      </div>
    )
  }