"use client"
import store from '@/lib/zustand'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'

export default function News() {
    const [loading, setLoading] = useState(true)
    const {topic,search,setSearch} = store()
    const [news, setNews] = useState([])
    
  const [scrollable, setscrollable] = useState(false)
    const url = 'https://gnews-api.onrender.com'
   
    useEffect(() => {
      const getData=async()=>{
        setLoading(true)
        const res = await fetch(`${url}/gnews/topic/${topic}`)
        const results = await res.json()
        setNews(results.news)
        setLoading(false)
      }
      if(search==='')
      getData()

    }, [topic])

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
          let scroll = window.scrollY;
          if (scroll > 1000) {
            setscrollable(true)
          } else {
            setscrollable(false)
          }
        });
      }, [])

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    

    useEffect(() => {
        const getData = async() =>{
        setLoading(true)
        const res = await fetch(`${url}/gnews/search/${search}`)
        const results = await res.json()
        setNews(results.news)
        setLoading(false)
        setSearch('')
        }
      if(search!=='')
      getData()
    }, [search])
    
    const content = news?.map((el,idx)=>{
        return (
            <NewsItem key={el.link?el.link:idx} item={el}/>
        )
    })
  return (
    <div className=' flex flex-col justify-center items-center lg:p-12 p-7'>
        <button onClick={() => { scrollToTop() }} className={`${scrollable ? '' : 'hidden'} fixed bottom-2 right-2 hover:scale-110 transition-all `}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" fill="#858585" viewBox="0 0 50 50">
        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 25 16.585938 L 12.292969 29.292969 A 1.0001 1.0001 0 1 0 13.707031 30.707031 L 25 19.414062 L 36.292969 30.707031 A 1.0001 1.0001 0 1 0 37.707031 29.292969 L 25 16.585938 z"></path>
      </svg></button>
        <h1 className='text-black font-bold lg:text-4xl md:text-2xl text-xl text-center'>{loading?'Loading ':''}{search!==''?`Top ${search} headlines in India`:topic==='india'?'Top headlines in India':`Top ${topic} headlines in India`}</h1>
        {loading&&<Loading/>}
        <div className=' lg:py-10 grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-2 grid-cols1 py-5 lg:gap-10 md:gap-5 gap-2'>
            {content}
        </div>
    </div>
  )
}
