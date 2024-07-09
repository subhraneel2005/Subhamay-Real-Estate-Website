"use client"

import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch() {
  return (
    <div className='w-full flex items-center'>
      <MapPin className='cursor-pointer h-10 w-10 p-2 text-primary bg-purple-200 rounded-l-lg'/>
        <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY!}
            selectProps={{
                placeholder:'Search Property Address',
                isClearable:true,
                className:'w-full',
                onChange:(place) => {
                    console.log(place);
                    geocodeByAddress(place!.label)
                    .then((result => getLatLng(result[0])))
                    .then(({lat, lng}) => {
                      console.log(lat, lng);
                      
                    })
                }
            }}
        />
    </div>
  )
}

export default GoogleAddressSearch