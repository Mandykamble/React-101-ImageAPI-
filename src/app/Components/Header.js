import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
    <div className=' h-16 flex gap-3  align-center justify-center bg-gradient-to-r  from-red-800 via-yellow-600 to-yellow-500'>

      <div  className='  text-white flex align-center m-5 justify-center bg-gradient-to-r  from-pink-800 via-blue-600 to-green-500'>
        Xenon
      </div>
    
    <div className=' text-white flex gap-5 p-4  align-center justify-center' >
    <Link href='/'>HOME</Link>
    <Link href='About'>Images</Link>
    <Link href='Contact'>Contact US</Link>
    <h4>Join</h4>
    </div>
    </div>
    </>
  )
}

export default Header