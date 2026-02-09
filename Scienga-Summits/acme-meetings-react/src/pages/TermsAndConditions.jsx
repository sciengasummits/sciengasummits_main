import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function TermsAndConditions() {

    // Clean up function to ensure it scrolls to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <PageHeader
                title="Terms and Conditions"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Terms and Conditions', link: null }
                ]}
            />
            <div className="container" style={{ paddingTop: 'clamp(2rem, 8vw, 4rem)', paddingBottom: 'clamp(2rem, 8vw, 4rem)', maxWidth: '1000px', margin: '0 auto', color: '#333', lineHeight: '1.6' }}>

                <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '3rem', fontWeight: 'bold' }}>Terms and conditions of use</h2>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Introduction</h3>
                    <p>1. These terms and conditions shall govern your use of our website.</p>
                    <p>1.1. By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p>
                    <p>1.2. If you register with our website, submit any material to our website or use any of our website services, we will ask you to expressly agree to these terms and conditions.</p>
                    <p>1.3. You must be at least 18 years of age to use our website; by using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least 18 years of age.</p>
                    <p>1.4. Our website uses cookies; by using our website or agreeing to these terms and conditions, you consent to our use of cookies in accordance with the terms of our privacy policy.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>2. Licence to use website</h3>
                    <p>2.1. You may:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) View pages from our website in a web browser;</li>
                        <li>(b) Download pages from our website for caching in a web browser;</li>
                        <li>(c) Print pages from our website;</li>
                        <li>(d) Stream audio and video files from our website; and</li>
                        <li>(e) Use our website services by means of a web browser, subject to the other provisions of these terms and conditions.</li>
                    </ul>
                    <p>2.2. Except as expressly permitted BY THE provisions of these terms and conditions, you must not download any material from our website or save any such material to your computer.</p>
                    <p>2.3. You may only use our website for your own personal and business purposes, and you must not use our website for any other purposes.</p>
                    <p>2.4. Except as expressly permitted by these terms and conditions, you must not edit or otherwise modify any material on our website.</p>
                    <p>2.5. Unless you own or control the relevant rights in the material, you must not:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) Republish material from our website (including republication on another website);</li>
                        <li>(b) Show any material from our website in public;</li>
                        <li>(c) Exploit material from our website for a commercial purpose; or</li>
                        <li>(d) Redistribute material from our website.</li>
                    </ul>
                    <p>2.6. We reserve the right to restrict access to areas of our website, or indeed our whole website, at our discretion; you must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>3. Acceptable use</h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) Use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability or accessibility of the website;</li>
                        <li>(b) Use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;</li>
                        <li>(c) Use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;</li>
                        <li>(d) Conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent;</li>
                        <li>(e) Access or otherwise interact with our website using any robot, spider or other automated means, except for the purpose of search engine indexing;</li>
                        <li>(f) Violate the directives set out in the robots.txt file for our website; or</li>
                        <li>(g) Use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing).</li>
                    </ul>
                    <p>3.2. You must not use data collected from our website to contact individuals, companies or other persons or entities.</p>
                    <p>3.3. You must ensure that all the information you supply to us through our website, or in relation to our website, is true, accurate, current, complete and non-misleading.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>4. Registration and accounts</h3>
                    <p>4.1. You may register for an account with our website by completing and submitting the account registration form on our website, and clicking on the verification link in the email that the website will send to you.</p>
                    <p>4.2. You must not allow any other person to use your account to access the website.</p>
                    <p>4.3. You must notify us in writing immediately if you become aware of any unauthorised use of your account.</p>
                    <p>4.4. You must not use any other person's account to access the website, unless you have that person's express permission to do so.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>5. User login details</h3>
                    <p>5.1. If you register for an account with our website, you will be asked to choose a user ID and password.</p>
                    <p>5.2. Your user ID must not be liable to mislead; you must not use your account or user ID for or in connection with the impersonation of any person.</p>
                    <p>5.3. You must keep your password confidential.</p>
                    <p>5.4. You must notify us in writing immediately if you become aware of any disclosure of your password.</p>
                    <p>5.5. You are responsible for any activity on our website arising out of any failure to keep your password confidential, and may be held liable for any losses arising out of such a failure.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>6. Cancellation and suspension of account</h3>
                    <p>6.1. We may:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) Suspend your account;</li>
                        <li>(b) Cancel your account; and/or</li>
                        <li>(c) Edit your account details,</li>
                    </ul>
                    <p>At any time in our sole discretion without notice or explanation.</p>
                    <p>6.2. You may cancel your account on our website.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>7. Your content: licence</h3>
                    <p>7.1. In these terms and conditions, "your content" means all works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software and files) that you submit to us or our website for storage or publication on, processing by, or transmission via, our website.</p>
                    <p>7.2. You grant to us a worldwide, irrevocable, non-exclusive, royalty-free licence to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media OR reproduce, store and publish your content on and in relation to this website and any successor website OR reproduce, store and, with your specific consent, publish your content on and in relation to this website.</p>
                    <p>7.3. You hereby waive all your moral rights in your content to the maximum extent permitted by applicable law; and you warrant and represent that all other moral rights in your content have been waived to the maximum extent permitted by applicable law.</p>
                    <p>7.4. You may edit your content to the extent permitted using the editing functionality made available on our website.</p>
                    <p>7.5. Without prejudice to our other rights under these terms and conditions, if you breach any provision of these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may delete, unpublish or edit any or all of your content.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>8. Your content: rules</h3>
                    <p>8.1. You warrant and represent that your content will comply with these terms and conditions.</p>
                    <p>8.2. Your content must not be illegal or unlawful, must not infringe any person's legal rights, and must not be capable of giving rise to legal action against any person (in each case in any jurisdiction and under any applicable law).</p>
                    <p>8.3. Your content, and the use of your content by us in accordance with these terms and conditions, must not:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) be libellous or maliciously false;</li>
                        <li>(b) be obscene or indecent;</li>
                        <li>(c) infringe any copyright, moral right, database right, trade mark right, design right, right in passing off, or other intellectual property right;</li>
                        <li>(d) infringe any right of confidence, right of privacy or right under data protection legislation;</li>
                        <li>(e) constitute negligent advice or contain any negligent statement;</li>
                        <li>(f) constitute an incitement to commit a crime, instructions for the commission of a crime or the promotion of criminal activity;</li>
                        <li>(g) be in contempt of any court, or in breach of any court order;</li>
                        <li>(h) be in breach of racial or religious hatred or discrimination legislation;</li>
                        <li>(i) be blasphemous;</li>
                        <li>(j) be in breach of official secrets legislation;</li>
                        <li>(k) be in breach of any contractual obligation owed to any person;</li>
                        <li>(l) depict violence in an explicit, graphic or gratuitous manner;</li>
                        <li>(m) be pornographic, lewd, suggestive or sexually explicit;</li>
                        <li>(n) be untrue, false, inaccurate or misleading;</li>
                        <li>(o) consist of or contain any instructions, advice or other information which may be acted upon and could, if acted upon, cause illness, injury or death, or any other loss or damage;</li>
                        <li>(p) constitute spam;</li>
                        <li>(q) be offensive, deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing, hateful, discriminatory or inflammatory; or</li>
                        <li>(r) cause annoyance, inconvenience or needless anxiety to any person.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>9. Limited warranties</h3>
                    <p>9.1. We do not warrant or represent:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) the completeness or accuracy of the information published on our website;</li>
                        <li>(b) that the material on the website is up to date; or</li>
                        <li>(c) that the website or any service on the website will remain available.</li>
                    </ul>
                    <p>9.2. We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in these terms and conditions, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any website services, or if we stop publishing the website.</p>
                    <p>9.3. To the maximum extent permitted by applicable law, we exclude all representations and warranties relating to the subject matter of these terms and conditions, our website and the use of our website.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>10. Breaches of these terms and conditions</h3>
                    <p>10.1. Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) send you one or more formal warnings;</li>
                        <li>(b) temporarily suspend your access to our website;</li>
                        <li>(c) permanently prohibit you from accessing our website;</li>
                        <li>(d) block computers using your IP address from accessing our website;</li>
                        <li>(e) contact any or all of your internet service providers and request that they block your access to our website;</li>
                        <li>(f) commence legal action against you, whether for breach of contract or otherwise; and/or</li>
                        <li>(g) suspend or delete your account on our website.</li>
                    </ul>
                    <p>10.2. Where we suspend or prohibit or block your access to our website or a part of our website, you must not take any action to circumvent such suspension or prohibition or blocking (including without limitation creating and/or using a different account).</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>11. Variation</h3>
                    <p>11.1. We may revise these terms and conditions from time to time.</p>
                    <p>11.2. The revised terms and conditions shall apply to the use of our website from the date of publication of the revised terms and conditions on the website, and you hereby waive any right you may otherwise have to be notified of, or to consent to, revisions of these terms and conditions.</p>
                    <p>11.3. If you have given your express agreement to these terms and conditions, we will ask for your express agreement to any revision of these terms and conditions; and if you do not give your express agreement to the revised terms and conditions within such period as we may specify, we will disable or delete your account on the website, and you must stop using the website.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>12. Assignment</h3>
                    <p>12.1. You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions.</p>
                    <p>12.2. You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any of your rights and/or obligations under these terms and conditions.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>13. Severability</h3>
                    <p>13.1. If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.</p>
                    <p>13.2. If any unlawful and/or unenforceable provision of these terms and conditions would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>14. Third party rights</h3>
                    <p>14.1. A contract under these terms and conditions is for our benefit and your benefit, and is not intended to benefit or be enforceable by any third party.</p>
                    <p>14.2. The exercise of the parties' rights under a contract under these terms and conditions is not subject to the consent of any third party.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>15. Entire agreement</h3>
                    <p>15.1. The terms and conditions, together with our privacy policy, shall constitute the entire agreement between you and us in relation to your use of our website and shall supersede all previous agreements between you and us in relation to your use of our website.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>16. Law and jurisdiction</h3>
                    <p>16.1. These terms and conditions shall be governed by and construed in accordance with Indian Law.</p>
                    <p>16.2. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>17. Statutory and regulatory disclosures</h3>
                    <p>17.1. We are subject to applicable laws and regulations.</p>
                    <p>17.2. We are registered as Scienga Meetings with The Registrar of Companies, Ministry of Corporate Affairs (MCA) in India and are subject to rules, which can be found at https://mca.gov.in.</p>
                    <p>17.3. We subscribe to code(s) of conduct, which can be consulted electronically at contact@sciengameetings.com.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>18. Our details</h3>
                    <p>18.1. This website is owned and operated by Scienga Meetings.</p>
                    <p>18.2. We are registered in India, and our registered office is at Mariamman Koil Street, Mettupalayam, Pondicherry-605010, India</p>
                    <p>18.4. You can contact us:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                        <li>(a) by post, using the postal address given above;</li>
                        <li>(b) using our website contact form;</li>
                        <li>(c) by telephone, on the contact number published on our website from time to time;</li>
                        <li>(d) by email: contact@sciengameetings.com.</li>
                    </ul>
                </section>

            </div>
            <Footer />
        </>
    )
}
