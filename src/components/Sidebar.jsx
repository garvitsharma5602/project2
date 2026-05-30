import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Home, Users, Folder, ListChecks, FileText, PieChart, Settings } from 'lucide-react'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/clients', label: 'Clients', icon: Users },
  { to: '/projects', label: 'Projects', icon: Folder },
  { to: '/tasks', label: 'Tasks', icon: ListChecks },
  { to: '/invoices', label: 'Invoices', icon: FileText },
  { to: '/reports', label: 'Reports', icon: PieChart },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ isCollapsed, toggle }) {
  return (
    <aside className={`bg-white border-r transition-all duration-200 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white rounded-md w-8 h-8 flex items-center justify-center">R</div>
            {!isCollapsed && <span className="font-semibold">ReactDash</span>}
          </div>
          <button onClick={toggle} className="p-2 rounded hover:bg-gray-100">
            <Menu size={18} />
          </button>
        </div>

        <nav className="flex-1 p-2 space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded text-sm hover:bg-gray-100 ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'}`
              }
            >
              <Icon size={18} />
              {!isCollapsed && label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/40" alt="avatar" className="rounded-full" />
            {!isCollapsed && (
              <div>
                <div className="text-sm font-medium">Jane Doe</div>
                <div className="text-xs text-gray-500">Product</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
