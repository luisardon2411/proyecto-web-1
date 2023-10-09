import React from 'react'


interface LayoutProps {
    children: React.ReactNode | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='h-screen w-full bg-gradient-to-r from-violet-200 to-pink-200'>
        { children }
    </main>
  )
}

export default Layout