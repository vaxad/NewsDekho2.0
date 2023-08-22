import React from 'react'

export default function NewsItem({item}) {
  return item.link&&(
<div className="max-w-sm lg:my-2 md:my-3 my-5 bg-black rounded-xl hover:scale-110 transition-all ">
    <a href={item.link} target='_blank' className=' w-full flex justify-center items-center'>
        <img className="rounded-t-lg" src={item.img?item.img[2]:'/loading.gif'} alt="" />
    </a>
    <div className='flex justify-between items-stretch'>
    <div className="p-5 flex flex-col justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-100">{item.title}</h5>
        <p className="mb-3 font-normal text-gray-400">{`By ${item.source.name} ${item.time}`}</p>
        <a href={item.link} target='_blank' className="flex flex-row w-full justify-center items-center  px-3 py-2 text-sm font-medium text-center text-black hover:text-white transition-all  rounded-lg  focus:ring-4 focus:outline-none bg-slate-100 hover:bg-slate-700 focus:ring-slate-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    </div>
</div>

  )
}
