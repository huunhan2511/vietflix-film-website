import React from 'react'

export default function Loading() {
  return (
    <div className='flex items-center h-[100vh] w-full justify-center'>
        <div className="loading">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
  )
}
