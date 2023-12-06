"use client"
import store from '@/lib/zustand'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [show, setshow] = useState(false)
    const [shownav, setshownav] = useState(false)
    const {topic,setTopic,setSearch} = store()
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const collection = document.getElementsByTagName('h4')
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.color = "#858585";
          }
        document.getElementById(topic).style.color = "#ffffff";
    }, [topic])
    const handleSearch = (e) => {
        e.preventDefault()
        if(searchTerm!==''){
            setSearch(searchTerm)
        }
        setSearchTerm('')
        setshow(false)
    }
    const handleTopic = (e) =>{
        setTopic(e.target.id)
        setshownav(false)
    }
  return (
    <>
<nav className=" bg-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="block items-center">
      {/* <img src="" className="h-8 mr-3" alt=" Logo" /> */}
      <a href='/' className="self-center lg:text-2xl text-lg font-semibold whitespace-nowrap cursor-pointer text-white">NewsDekho2.0</a>
  </div>
  <div className={`flex ${show?'lg:w-2/3 w-3/5':''} md:order-2 gap-5 transition-all`}>
    {show&&<div className="relative w-full md:block">
      <div className="absolute w-full inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <form onSubmit={(e)=>{handleSearch(e)}}>
      <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  type="text" id="search-navbar" className="flex w-full p-2 pl-10 text-sm  border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."/>
      </form>
    </div> }
    <button onClick={()=>{setshow(!show)}} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className=" text-gray-400  hover:bg-gray-700  rounded-lg text-sm p-2.5 mr-1" >
      {show?<svg className="w-5 h-5 text-gray-400" aria-hidden="true" fill='currentColor' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">
<path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z"></path>
</svg>:<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>}
      <span className="sr-only">Search</span>
    </button>
    {!show&&<button onClick={()=>{setshownav(!shownav)}} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className={`w-5 ${shownav?'rotate-90':''} transition-all h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>}
  </div>
  {!show&&<div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm  border  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."/>
      </div>
     <ul className="flex flex-col p-4 mx-5 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-100  rounded  " id='india'>India</h4>
        </li>
     <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='business'>Business</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='science'>Science</h4>
        </li>
       <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='entertainment'>Entertainment</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='technology'>Technology</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='sports'>Sports</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='world'>World</h4>
        </li>
         <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='health'>Health</h4>
        </li>
      </ul>
      
    </div>}
  </div>
</nav>
{shownav&&<div className='w-full lg:hidden flex justify-center items-center'>
  <ul className="flex flex-col justify-center items-center w-full p-4 bg-slate-950 mx-5 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-100  rounded  " id='india'>India</h4>
        </li>
     <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='business'>Business</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='science'>Science</h4>
        </li>
       <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='entertainment'>Entertainment</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='technology'>Technology</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='sports'>Sports</h4>
        </li>
      <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='world'>World</h4>
        </li>
         <li>
          <h4 onClick={(e)=>{handleTopic(e)}}  className=" cursor-pointer block py-2  text-slate-400  rounded  " id='health'>Health</h4>
        </li>
      </ul>
    </div>}
</>
  )
}
