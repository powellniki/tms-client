import { AppWrapper } from '../context/state'
import Head from 'next/head'
import Footer from './footer.js'
import PrivacyPolicyModal from './modal.js'

export default function Layout({ children }) {
  return (
    <AppWrapper>
        <Head>
          <title>TMS, LLC Builders + Managers</title>
        </Head>
        <div className='flex flex-col min-h-screen'>
          <PrivacyPolicyModal />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
    </AppWrapper>
  )
}
