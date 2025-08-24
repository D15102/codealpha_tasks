import React from 'react'
import Spilne from './Spilne'
const Component1 = () => {
  return (
    <div>
        <div className='h-30 absolute top-[20%] right-0 z-[-1] shadow-[0px_0px_700px_15px_#fff]'>

        </div>
        <header className='p-4 flex items-center justify-between'>
            <h1 className='text-2xl'>Dharmik</h1>
            <nav className='md:flex lg:flex justify-between items-center gap-10 sm:grid grid-cols-1'>
                <li className='list-none text-xl '>Home</li>
                <li className='list-none text-xl '>Contact</li>
                <li className='list-none text-xl '>About</li>
                <li className='list-none text-xl '>Login</li>
            </nav>
        </header>
        <Spilne/>
    </div>
  )
}

export default Component1