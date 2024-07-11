"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const product_name = formData.get("product_name") as string;

    if(product_name) {
      router.push(`/list?name=${product_name}`);
    };
  };

  return (
    <form 
      className='flex items-center justify-between gap-8 bg-gray-100 py-2 px-4 rounded-md flex-1' 
      onSubmit={handleSearch}
    >
      <input
        type='text'
        name="product_name"
        placeholder='Search product...'
        className='flex-1 bg-transparent outline-none'
      />
      <button className='cursor-pointer'>
        <Image src="/search.png" alt='' width={17} height={17} />
      </button>
    </form>
  )
}

export default SearchBar