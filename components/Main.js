import React from 'react'

export default function (props) {
  const { children } = props
  return (
    <main className='flex-1 flex flex-col'>
      {children}
    </main>
  )
}