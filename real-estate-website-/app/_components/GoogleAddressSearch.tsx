"use client"

import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function GoogleAddressSearch() {
  return (
    <div>
        <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY!}
            selectProps={{
                placeholder:'Search Property Address',
                isClearable:true,
                className:'w-full',
                onChange:(place) => {
                    console.log(place);
                }
            }}
        />
    </div>
  )
}

export default GoogleAddressSearch