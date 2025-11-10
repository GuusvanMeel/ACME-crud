"use client"
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function DeleteButton({id} : {id: number}) {
    const router = useRouter();
    const handleClick = async () =>{

        await axios.delete(`/api/products/${id}`)

        router.push("/products")
    }
 
    return (
        <button onClick={handleClick}
        type="button"
        className="rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-2 py-1"
      >
        Delete
      </button>
  )
}
