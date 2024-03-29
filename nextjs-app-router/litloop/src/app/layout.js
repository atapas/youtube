import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import { dbConnect } from '@/services/mongo';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LiLoop',
  description: 'An Online book store',
}

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  console.log(conn);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
