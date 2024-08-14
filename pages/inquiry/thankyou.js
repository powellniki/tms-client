import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function InquiryThankYou() {




    return (
        <main className="w-screen">
            <>Thanks for inquiring</>
        </main>
    )
}

InquiryThankYou.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}