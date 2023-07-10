import Link from 'next/link'
import React from 'react'
import DarkModeToggler from './DarkModeToggler'

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
    url: '/resume',
    title: 'Resume',
  },
]

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full border-b border-slate-900/10 dark:border-slate-300/10 bg-white dark:bg-slate-800'>
      <div className='container mx-auto flex justify-end px-4 py-2 text-slate-700 dark:text-slate-200 font-semibold'>
        <DarkModeToggler />
        {links.map((item) => (
          <Link className='p-2 px-4' href={item.url} key={item.id}>{item.title}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar