import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function AddNewListing() {
  return (
    <div className='p-10 flex flex-col gap-4 justify-center items-center'>
        <h2 className='font-bold text-2xl'>Add New Listing</h2>
        <div>
            <h2 className='text-gray-500'>Enter Address which you want to list</h2>
            <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY!}
            />
        </div>
    </div>
  )
}

export default AddNewListing