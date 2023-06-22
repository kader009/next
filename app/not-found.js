import Link from 'next/link'; 
import React from 'react'

const Error = () => {
  return (
    <div>

      <h4>this is your error page.</h4>
      <p>back to home page. <Link href='/'>Home</Link></p>
    </div>
  )
}

export default Error;