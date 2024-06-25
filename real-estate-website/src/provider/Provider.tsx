import Header from '@/components/Header'
import React from 'react'

function provider({children}:any) {
  return (
    <div>
        <Header/>
        {children}</div>
  )
}

export default provider