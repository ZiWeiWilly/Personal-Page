import Link from 'next/link'
import React from 'react'

const links = [
  {
    id: 1,
    url: '/',
    title: 'Home',
  },
  {
    id: 2,
    url: '/portfolio',
    title: 'Portfolio',
  },
  {
    id: 3,
    url: '/',
    title: 'CV',
  },
]

const Navbar = () => {
  return (
    <nav className='px-4 py-2 flex justify-end bg-slate-800/25'>
      {links.map((item) => (
        <Link className='p-2 text-slate-100' href={item.url} key={item.id}>{item.title}</Link>
      ))}
    </nav>
  )
}

export default Navbar