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
        <main className="w-screen flex flex-col lg:flex-row">

            <div className="w-full lg:w-1/2 text-left pt-8 lg:text-end px-5 mb-4 md:mb-0 md:px-12 lg:px-0 md:py-8 lg:pt-28 lg:ml-24">
                <h2 className="font-heading lg:font-bold text-tms-red text-4xl lg:text-5xl uppercase tracking-wider">
                    Send us a message
                </h2>
                <h3 className="font-heading text-tms-black text-lg lg:text-xl pt-8 lg:mt-8 uppercase tracking-wider">inquiry subheading for general inquiry form page</h3>
                <p className="text-gray-800 text-md md:text-lg font-Roboto font-light mt-2 lg:mt-4">Short paragraph for submitting an inquiry to people so they know what to expect when submitting an inquiry.</p>
            </div>

            <div className="w-full mx-auto flex flex-col lg:flex-row px-4 md:px-8 lg:px-0 lg:py-8 lg:mx-24 mb-4 lg:mb-0">
                <div className="w-full bg-white p-8 lg:p-12">
                    <form onSubmit={handleInquiry} className="flex flex-col space-y-6">
                        {/* Form Fields */}
                        <input
                            id="name"
                            value={userInformation.name}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, name: e.target.value })
                            }
                            placeholder="Name"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                        />
                        <input
                            id="email"
                            value={userInformation.email}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, email: e.target.value })
                            }
                            placeholder="Email"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                        />
                        <input
                            id="phone"
                            value={userInformation.phone}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, phone: e.target.value })
                            }
                            placeholder="Phone Number"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                        />
                        <input
                            id="company_name"
                            value={userInformation.company_name}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, company_name: e.target.value })
                            }
                            placeholder="Company Name"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                        />
                        <input
                            id="project_location"
                            value={userInformation.project_location}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, project_location: e.target.value })
                            }
                            placeholder="Project Location"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                        />
                        <input
                            id="project_type"
                            value={userInformation.project_type}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, project_type: e.target.value })
                            }
                            placeholder="Project Type"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                        />
                        <textarea
                            id="project_description"
                            value={userInformation.project_description}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, project_description: e.target.value })
                            }
                            placeholder="Project Description"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                            rows="2"
                        />
                        <input
                            id="contact_method"
                            value={userInformation.contact_method}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, contact_method: e.target.value })
                            }
                            placeholder="Preferred Contact Method"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                        />
                        <textarea
                            id="comments"
                            value={userInformation.comments}
                            onChange={(e) =>
                                setUserInformation({ ...userInformation, comments: e.target.value })
                            }
                            placeholder="Additional Comments or Questions"
                            className="w-full bg-white border-b rounded-none border-tms-gray pt-3 px-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow font-Roboto font-light"
                            rows="2"
                        />
                        {/* Submit Button */}
                        <button className="uppercase font-heading text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm mt-6 lg:mt-8">
                            <span className="tracking-widest">Submit Inquiry</span>
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