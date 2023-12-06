import React from 'react'

export default function NewsItem({item}) {
  return item.link&&(
<div className="max-w-sm lg:my-2 md:my-3 my-5 bg-black rounded-xl hover:scale-110 transition-all flex flex-col justify-start h-full ">
    <a href={item.link} target='_blank' className=' w-full flex justify-center items-center min-h-[30vh] max-h-[40vh] lg:h-full md:h-full h-[20vh] relative'>
        <img className="rounded-t-lg w-full h-full" src={item.img?item.img[1]:'/loading.gif'} alt="" />
        <img className='absolute bottom-5 right-5 w-8' title={item.source.name} src={item.source.img[1]} alt={item.source.name}></img>
    </a>
    <div className='flex flex-col justify-start lg:h-fit md:h-fit h-full'>
    <div className="p-5 flex flex-col justify-around h-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-100">{item.title}</h5>
        <p className="mb-3 font-normal text-gray-400">{`By ${item.author} From ${item.source.name} ${item.time}`}</p>
        <a href={item.link} target='_blank' className="flex flex-row w-full justify-center items-center hover:gap-1 px-3 py-2 text-sm font-medium text-center text-black hover:text-white transition-all  rounded-lg  focus:ring-4 focus:outline-none bg-slate-100 hover:bg-slate-700 focus:ring-slate-800">
            Read more @<span className=' px-2'>
        <img className='w-5' title={item.source.name} src={item.source.img[1]} alt={item.source.name}></img></span>
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    </div>
</div>

  )
}
