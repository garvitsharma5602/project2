import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} toggle={() => setIsCollapsed(v => !v)} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
