import React from 'react';

const Offline = () => {

    return (
        <div className='flex justify-center items-center min-h-[75vh] flex-col'>
            <h1 className='text-4xl font-semibold'>No internet connection</h1>
            <h2 className='text-lg'>Sorry this page isn't available offline.</h2>
        </div>
    )
}

export default Offline;