import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function PrivacyNotice() {
    return (
        <section className="w-screen flex flex-col lg:flex-row mb-12 lg:mt-16 lg:mb-20 lg:px-12">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 font-Roboto">
                <h1 className="text-4xl font-bold mb-8 border-b pb-4 border-tms-red font-heading">
                    Privacy Policy for TMS Builders + Managers
                </h1>

                <article className="space-y-8 py-4">
                    
                    <p>
                        TMS Builders + Managers values your privacy and is committed to protecting 
                        your personal information. This Privacy Policy explains what data we collect, 
                        how we use it, and your rights regarding your personal data. This policy 
                        applies to information collected through our website and related platforms.
                    </p>

                    <section>
                        <h2 className="text-xl font-medium mb-4">1. Information We Collect</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong className="font-medium">Inquiry Forms:</strong> We collect the following information 
                                when you fill out a contact or inquiry form:
                                <ul className="list-disc list-inside ml-6">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company name (if provided)</li>
                                    <li>Project details</li>
                                </ul>
                            </li>
                            <li>
                                <strong className="font-medium">Website Analytics:</strong> We use Google Analytics to monitor 
                                site traffic and enhance your browsing experience. This data includes:
                                <ul className="list-disc list-inside ml-6">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Time spent on pages</li>
                                    <li>Referring websites</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Respond to inquiries submitted through our forms.</li>
                            <li>Improve website performance and user experience using analytics data.</li>
                            <li>Communicate with you regarding your inquiries or project.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium mb-4">3. Data Sharing and Storage</h2>
                        <p className="pb-4">
                            We will never sell or share your personal data with third parties 
                            without your consent, except when required by law.
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Third-Party Tools:</strong> We use Google Analytics for data 
                                insights. Review Google’s Privacy Policy for more information.
                            </li>
                            <li>
                                <strong>Data Storage:</strong> Your data is stored securely and only 
                                accessible to authorized personnel.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium mb-4">4. Cookies</h2>
                        <p>
                            Our website uses cookies to improve your browsing experience and analyze 
                            traffic. You can manage your cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium mb-4">5. Your Rights</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Access and correct the personal data we have about you.</li>
                            <li>Request deletion of your personal data.</li>
                            <li>Withdraw consent for data processing, where applicable.</li>
                        </ul>
                        <p className="pt-4">
                            To exercise any of these rights, please contact us at <a href="mailto:donnie@tms.build" className="hover:text-tms-red underline">info@tms.build</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium mb-4">6. Data Retention</h2>
                        <p>
                            We retain personal data only for as long as necessary to fulfill the 
                            purposes outlined in this policy. Inquiry form data is stored until the 
                            business matter is resolved, unless further communication is required.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium mb-4">7. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes 
                            in our practices or applicable laws. We encourage you to review this 
                            page periodically for updates.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium mb-4">8. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy or how 
                            we handle your data, please contact us at:
                        </p>
                        <address className="not-italic space-y-3 text-sm font-medium py-4 px-8">
                            <p>TMS, LLC Builders + Managers</p>
                            <p>128 N 2nd St, Suite 205, Clarksville, Tennessee 37040</p>
                            <a href="tel:+9316472233" className="hover:text-tms-red block">(931) 647-2233</a>
                            <a href="mailto:info@tms.build" className="hover:text-tms-red block underline">info@tms.build</a>
                        </address>
                    </section>

                </article>
            </div>  
        </section>
    )
}

PrivacyNotice.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}