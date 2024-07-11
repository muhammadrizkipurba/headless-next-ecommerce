import Link from 'next/link'
import React from 'react'
import NavbarMenu from './NavbarMenu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavbarIcons from './NavbarIcons'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* MOBILE SCREEN */}
      <div className='md:hidden h-full flex items-center justify-between'>
        <Link href="/">
          <label className='text-2xl tracking-wide'>N-COMMERCE</label>
        </Link>
        <NavbarMenu />
      </div>

      {/* LARGE SCREEN */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* LEFT */}
        <div className='w-1/3 xl:w-1/2 flex items-center justify-center gap-12'>
          <Link href="/" className='flex items-center gap-2'>
            <Image 
              src="/logo.svg"
              alt=""
              width={24}
              height={24}
            />
            <label className='text-2xl tracking-tight'>N-commerce</label>
          </Link>
          <div className='hidden xl:flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar