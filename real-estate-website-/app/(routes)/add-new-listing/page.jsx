"use client"

import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

function AddNewListing() {

  const [selectedAddress, setSelectedAddress] = useState();
  const [coordinates, setCoordinates] = useState();
 
  const handler = () => {
    console.log(selectedAddress, coordinates);
  }

  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
    <div className='p-10 flex flex-col gap-5 justify-center items-center'>
        <h2 className='font-bold text-2xl'>Add New Listing</h2>
        
        <div className='p-10 rounded-lg border shadow-md flex flex-col gap-5 w-[80%]'>
          <h2 className='text-gray-500'>Enter Address which you want to list</h2>
          <GoogleAddressSearch 
            selectedAddress={(value) => setSelectedAddress(value)}
            setCoordinates={(value) => setCoordinates(value)}
          />
          <Button
            disabled={!selectedAddress || !coordinates}
            onClick={handler()}
          >Next</Button>
        </div>
        
    </div>
    </div>
  )
}

export default AddNewListing