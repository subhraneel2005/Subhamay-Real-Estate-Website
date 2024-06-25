import Header from '@/components/Header'
import React from 'react'

function Provider({children}:any) {
  return (
    <div>
        <Header/>
        {children}</div>
  )
}

export default Provider