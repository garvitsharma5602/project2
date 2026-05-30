import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        <input className="w-full p-2 border rounded mb-3" placeholder="Email" />
        <input className="w-full p-2 border rounded mb-3" placeholder="Password" type="password" />
        <button className="w-full bg-indigo-600 text-white py-2 rounded">Sign in</button>
      </div>
    </div>
  )
}
