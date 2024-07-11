'use client'

import Image from 'next/image';
import React from 'react'

const CartModal = () => {

  const cartItems = true;

  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white top-12 right-0 flex flex-col gap-6'>
      {!cartItems ? (
        <div className=''>
          Cart is empty
        </div>
      ) : (
        <>
          <h2 className='text-xl'>Shopping Cart</h2>
          {/* LIST HEADER */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className='flex gap-4'>
              <Image
                src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className='flex flex-col justify-between w-full'>
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className='font-semibold'>Product Name</h3>
                    <label className='bg-gray-100 text-sm rounded px-2 py-1'>IDR 4.000.000</label>
                  </div>
                  {/* DESC */}
                  <div>
                    <span className='text-sm bg-green-200 text-green-700 px-2 py-1 rounded-md'>Available</span>
                  </div>
                </div>
                {/* BOTTOM */}
                <div className='flex justify-between mt-2'>
                  <span className='text-gray-500 text-sm'>Qty: 2</span>
                  <button className='text-red-700 text-sm'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className='flex gap-4'>
              <Image
                src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className='flex flex-col justify-between w-full'>
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className='font-semibold'>Product Name</h3>
                    <label className='bg-gray-100 text-sm rounded px-2 py-1'>IDR 4.000.000</label>
                  </div>
                  {/* DESC */}
                  <div>
                    <span className='text-sm bg-green-200 text-green-700 px-2 py-1 rounded-md'>Available</span>
                  </div>
                </div>
                {/* BOTTOM */}
                <div className='flex justify-between mt-2'>
                  <span className='text-gray-500 text-sm'>Qty: 2</span>
                  <button className='text-red-700 text-sm'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* LIST FOOTER */}
          <div>
            <div className='flex items-center justify-between font-semibold'>
              <span>Subtotal</span>
              <span>IDR 8.000.000</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>
              Shipping and taxes calculated at checkout
            </p>
            <div className='flex items-center justify-between text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
              <button className='rounded-md py-3 px-4 ring-1 bg-black text-white ring-gray-300'>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartModal