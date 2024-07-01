import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import React from 'react';

function AddNewListing() {
  return (
    <div className='p-10 flex flex-col gap-4 justify-center items-center'>
        <h2 className='font-bold text-2xl'>Add New Listing</h2>
        <div>
            <h2 className='text-gray-500'>Enter Address which you want to list</h2>
            <GoogleAddressSearch/>
        </div>
    </div>
  )
}

export default AddNewListing