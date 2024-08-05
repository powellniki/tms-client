import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function Home() {
    return (
        <div>tms website placeholder</div>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}