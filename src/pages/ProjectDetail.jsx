import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
  const { id } = useParams()
  return <div className="p-4 bg-white rounded shadow">Project detail for {id}</div>
}
