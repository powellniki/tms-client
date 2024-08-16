import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import { useAppContext } from "@/context/state.js"
import { useRouter } from "next/router.js"
import { useState } from "react"


export default function NewInquiry() {
    const { agreeToPrivacy } = useAppContext()
    const router = useRouter()
    const [userInformation, setUserInformation] = useState({
        'name': "",
        'email': "",
        'phone': "",
        'company_name': "",
        'project_location': "",
        'project_type': "",
        'project_description': "",
        'contact_method': "",
        'comments': ""
    })

    const handleInquiry = (e) => {
        e.preventDefault()
        agreeToPrivacy()
        router.push('/inquiry/thankyou')
    }



    return (
        <main className="w-screen px-4 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row border border-tms-gray my-8 md:my-12">

                {/* Left Side: Form */}
                <div className="w-full bg-tms-white p-8 lg:p-12">
                <h2 className="uppercase font-heading text-4xl lg:text-5xl text-tms-black mb-4 lg:mb-8">
                        Send us a message
                    </h2>
                    <form onSubmit={handleInquiry} className="flex flex-col space-y-5">
                        {/* Form Fields */}
                        <input
                            id="name"
                            value={userInformation.name}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, name: e.target.value })
                            }
                            placeholder="Name"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                        />
                        <input
                            id="email"
                            value={userInformation.email}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, email: e.target.value })
                            }
                            placeholder="Email"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                        />
                        <input
                            id="phone"
                            value={userInformation.phone}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, phone: e.target.value })
                            }
                            placeholder="Phone Number"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                        />
                        <input
                            id="company_name"
                            value={userInformation.company_name}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, company_name: e.target.value })
                            }
                            placeholder="Company Name"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                        />
                        <input
                            id="project_location"
                            value={userInformation.project_location}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, project_location: e.target.value })
                            }
                            placeholder="Project Location"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                        />
                        <input
                            id="project_type"
                            value={userInformation.project_type}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, project_type: e.target.value })
                            }
                            placeholder="Project Type"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                        />
                        <textarea
                            id="project_description"
                            value={userInformation.project_description}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, project_description: e.target.value })
                            }
                            placeholder="Project Description"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                            rows="2"
                        />
                        <input
                            id="contact_method"
                            value={userInformation.contact_method}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, contact_method: e.target.value })
                            }
                            placeholder="Preferred Contact Method"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                        />
                        <textarea
                            id="comments"
                            value={userInformation.comments}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, comments: e.target.value })
                            }
                            placeholder="Additional Comments or Questions"
                            className="w-full bg-tms-white border-b rounded-none border-tms-gray py-2 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                            rows="2"
                        />
                        {/* Submit Button */}
                        <button className="uppercase font-heading font-bold text-xl bg-tms-yellow text-white py-3 mt-4 hover:bg-tms-black hover:text-tms-white text-shadow-sm">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

NewInquiry.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}