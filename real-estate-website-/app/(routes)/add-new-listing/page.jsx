"use client"

import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import { supabase } from '@/supabase/client';
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';

export default function AddNewListing() {

  const { user } = useUser();
  const [selectedAddress, setSelectedAddress] = useState();
  const [coordinates, setCoordinates] = useState();
 
  const nextHandler = async() => {
    console.log(selectedAddress, coordinates);
    
    const { data, error } = await supabase
      .from('listing')
      .insert([
        { address: selectedAddress.label, 
          coordinates: coordinates,
          createdBy: user?.primaryEmailAddress.emailAddress,
        },
      ])
        
    if(data) {
      console.log("New Data added", data);
    } 
    if(error) {
      console.log("Error", error);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', minHeight: '100vh', width: '100%', paddingTop: '5rem' }}>
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '600px' }}>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' }}>Add New Listings</h1>
        <h2 style={{ color: 'gray', textAlign: 'center' }}>Enter Address which you want to list</h2>
        <GoogleAddressSearch 
          selectedAddress={(value) => setSelectedAddress(value)}
          setCoordinates={(value) => setCoordinates(value)}
        />
        <Button
          disabled={!selectedAddress || !coordinates}
          onClick={nextHandler}
          style={{ width: '100%' }}
        >Next</Button>
      </div>
    </div>
  )
}
