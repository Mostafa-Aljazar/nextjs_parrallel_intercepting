import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
      <Link href={'/auth/login'} scroll={false} >Login</Link>
      <Link href={'/auth/register'} scroll={false} >Register</Link>
    </nav>
  )
}

export default Nav
