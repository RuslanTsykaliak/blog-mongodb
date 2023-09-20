'use client'

import PostsContext from '@/context/PostsContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })


// https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive
// export const metadata = {
//   title: 'Next.js Blog',
//   description: 'Blog for Next.js developers',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [posts, setPosts] = useState([])
  return (
    <PostsContext.Provider
    value={{
      posts,
      setPosts,
    }}
    >
    <html lang="en">
      <body className={inter.className}>
        <Nav posts={posts} />
        {children}
        </body>
    </html>
    </PostsContext.Provider>
  )
}
