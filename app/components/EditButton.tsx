"use client"
import React from 'react'
import Link from 'next/link';

export default function EditButton({id}: {id: number}) {
  return (
    <Link href={`/products/${id}/edit`}>
      <button
        
        type="button"
        className="rounded-md bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold px-2 py-1"
      >
        Edit
      </button>
      </Link>
  )
}
