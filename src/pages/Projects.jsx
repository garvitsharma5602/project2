import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className="p-4 bg-white rounded shadow">
      Projects list
      <ul className="mt-3 space-y-2">
        <li>
          <Link to="/projects/1" className="text-indigo-600">Project 1</Link>
        </li>
        <li>
          <Link to="/projects/2" className="text-indigo-600">Project 2</Link>
        </li>
      </ul>
    </div>
  )
}
