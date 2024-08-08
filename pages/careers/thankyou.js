import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function CareersThankYou() {
    return (
        <>careers thank you</>
    )
}

CareersThankYou.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}