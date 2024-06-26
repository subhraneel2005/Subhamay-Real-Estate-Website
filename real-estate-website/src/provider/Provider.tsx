import Header from '@/components/Header'
import React from 'react'

function Provider({children}:any) {
  return (
    <div>
        <Header/>
        <div className='m-32'>{children}</div>
        </div>
  )
}

export default Provider