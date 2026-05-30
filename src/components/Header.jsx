import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Bell, Search, ChevronDown } from 'lucide-react'

const titles = {
  '/': 'Dashboard',
  '/dashboard': 'Dashboard',
  '/clients': 'Clients',
  '/projects': 'Projects',
  '/tasks': 'Tasks',
  '/invoices': 'Invoices',
  '/reports': 'Reports',
  '/settings': 'Settings',
}

export default function Header() {
  const location = useLocation()
  const title = useMemo(() => titles[location.pathname] || 'App', [location.pathname])
  const [open, setOpen] = useState(false)

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input className="pl-10 pr-3 py-2 rounded border w-80 text-sm" placeholder="Search..." />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>

        <button className="p-2 rounded hover:bg-gray-100">
          <Bell />
        </button>

        <div className="relative">
          <button onClick={() => setOpen(v => !v)} className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
            <img src="https://i.pravatar.cc/32" alt="me" className="rounded-full" />
            <span className="text-sm">Jane</span>
            <ChevronDown size={14} />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-sm">
              <a className="block px-4 py-2 text-sm hover:bg-gray-50">Profile</a>
              <a className="block px-4 py-2 text-sm hover:bg-gray-50">Settings</a>
              <a className="block px-4 py-2 text-sm hover:bg-gray-50">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
