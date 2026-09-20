import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-gray-400">
        Page not found
      </p>

      <Link href="/" className="mt-6 px-6 py-3 rounded-lg bg-white text-black"  >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound