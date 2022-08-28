import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null    
  }
  return (
  // <Layout>
    <Component {...pageProps} />
  // </Layout>
  )

}

export default MyApp
