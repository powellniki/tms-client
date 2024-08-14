import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import { useState } from "react"


export default function NewInquiry() {
    const [userInformation, setUserInformation] = useState({
        'name': "",
        'email': "",
        'phone': "",
        'companyName': "",
        'projectLocation': "",
        'projectType': "",
        'projectDescription': "",
        'contactMethod': "",
        'comments': ""
    })



    return (
<main className="w-screen px-4 md:px-12">
    <div className="max-w-6xl mx-auto">
        <h1 className="uppercase font-heading text-center text-tms-red text-4xl md:text-5xl lg:text-6xl text-shadow-lg mt-8 md:mt-12 lg:mt-20">General Inquiry Form</h1>
        <form className="border border-tms-gray rounded-xl p-4 lg:py-12 my-8 md:p-8 bg-white">

            {/* Name Field */}
            <fieldset className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
                <input
                    id="name"
                    value={userInformation.name}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        name: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                />
            </fieldset>

            {/* Email Field */}
            <fieldset className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
                <input
                    id="email"
                    value={userInformation.email}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        email: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                />
            </fieldset>

            {/* Phone Number Field */}
            <fieldset className="mb-4">
                <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone Number:</label>
                <input
                    id="phone"
                    value={userInformation.phone}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        phone: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                />
            </fieldset>

            {/* Company Name Field */}
            <fieldset className="mb-4">
                <label htmlFor="companyName" className="block text-lg font-semibold mb-2">Company Name:</label>
                <input
                    id="companyName"
                    value={userInformation.companyName}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        companyName: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                />
            </fieldset>

            {/* Project Location Field */}
            <fieldset className="mb-4">
                <label htmlFor="projectLocation" className="block text-lg font-semibold mb-2">Project Location:</label>
                <input
                    id="projectLocation"
                    value={userInformation.projectLocation}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        projectLocation: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                />
            </fieldset>

            {/* Project Type Field */}
            <fieldset className="mb-4">
                <label htmlFor="projectType" className="block text-lg font-semibold mb-2">Project Type:</label>
                <input
                    id="projectType"
                    value={userInformation.projectType}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        projectType: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                />
            </fieldset>

            {/* Project Description Field */}
            <fieldset className="mb-4">
                <label htmlFor="projectDescription" className="block text-lg font-semibold mb-2">Project Description:</label>
                <textarea
                    id="projectDescription"
                    value={userInformation.projectDescription}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        projectDescription: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                    rows="4"
                />
            </fieldset>

            {/* Preferred Contact Method Field */}
            <fieldset className="mb-4">
                <label htmlFor="contactMethod" className="block text-lg font-semibold mb-2">Preferred Contact Method:</label>
                <input
                    id="contactMethod"
                    value={userInformation.contactMethod}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        contactMethod: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                />
            </fieldset>

            {/* Additional Comments Field */}
            <fieldset className="mb-4">
                <label htmlFor="comments" className="block text-lg font-semibold mb-2">Additional Comments or Questions:</label>
                <textarea
                    id="comments"
                    value={userInformation.comments}
                    onChange={e => setUserInformation({
                        ...userInformation,
                        comments: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tms-yellow"
                    rows="4"
                />
            </fieldset>

            {/* Submit Button */}
            <fieldset className="text-center mt-8 mb-8">
                <button className="uppercase font-heading font-bold text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm">
                    Submit Inquiry
                </button>
            </fieldset>

        </form>
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