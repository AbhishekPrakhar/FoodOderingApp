import React from "react";

const Shimmer = () => {
    return (
        <div className='my-6 mx-8 rounded-xl shadow-lg w-[265px]'>
            <div className='rounded-t-xl bg-slate-200 h-40 animate-pulse' />
            <div className='p-2 animate-pulse'>
                <div className='bg-slate-200 h-8 rounded-lg' />
                <div className={'mx-1 bg-slate-200 my-2 rounded-lg h-6 w-10'} />
                <div className='bg-slate-200 h-6 rounded-lg' />
            </div>
        </div>
    )
}

export default Shimmer;