import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <PageHeader
                title="Privacy Policy"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Privacy Policy', link: null }
                ]}
            />
            <div className="container" style={{ paddingTop: 'clamp(2rem, 8vw, 4rem)', paddingBottom: 'clamp(2rem, 8vw, 4rem)', maxWidth: '1000px', margin: '0 auto', color: '#333', lineHeight: '1.6' }}>

                <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '3rem', fontWeight: 'bold' }}>Global Privacy Policy - World Wide</h2>

                <section style={{ marginBottom: '2rem' }}>
                    <p>Scienga Summits and its affiliates (collectively “Scienga Summits”, “we” and “us”) respect your privacy. We offer services that enable platform to sharing ideas and networking among the professionals such as Scholars, Students, Business Investigators and others.</p>
                    <p>This Global Privacy Policy describes the types of Personal Data we collect through our services and via our online presence, which include our main website at sciengasummits.org, as well as services that we enable internet users to access, such as our conferences Scienga Summits and their sub Scienga Summits (collectively “our sites”). This policy also describes how we use Personal Data, with whom we share it, your rights and choices, and how you can contact us about our privacy practices. This policy does not apply to third-party websites, products, or services, even if they link to our Services or Sites, and you should consider the privacy practices of those third-parties carefully.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Personal Data we collect:</h3>
                    <p>Personal Data is any information that relates to an identified or identifiable individual. The Personal Data that you provide directly to us through our Sites will be apparent from the context in which you provide the data. In particular:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '1rem' }}>
                        <li>When you are interested towards our services, we will collect your Full Name, E-mail, Phone Number, Address, Photograph and Biography.</li>
                        <li>When you fill-in our online form to contact our customer support team, we collect your full name, E-mail, Phone Number and anything else you tell us about your needs and timeline.</li>
                        <li>When you submit your research paper/abstract/presentation/poster, we will collect your research interest name, your name, your contact details and copy of research paper/abstract/presentation/poster.</li>
                        <li>When you register for our services, we will collect your full name, E-mail, Phone number, Address and Register amount. We will not collect or store any Credit/Debit card details when you register through online.</li>
                        <li>When you subscribe for our newsletters, we will collect your name and E-mail.</li>
                        <li>When you respond to our emails or surveys, we collect your email address, name and any other information you choose to include in the body of your email or response.</li>
                        <li>If you contact us by phone, we will collect your name and phone number.</li>
                    </ul>
                    <p>Our sites use cookies and other technologies to function effectively. These technologies record information about your use of our Sites, including:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li><strong>Browser and device data</strong>, such as IP address, device type, operating system and Internet browser type, screen resolution, operating system name and version, device manufacturer and model, language, plug-ins, add-ons and the language version of the Sites you are visiting;</li>
                        <li><strong>Usage data</strong>, such as time spent on the Sites, scienga summits pages visited, links clicked, language preferences, and the pages that led or referred you to our Sites.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>How we use Personal Data:</h3>
                    <p>We may send you email marketing communications about our services, Invite you to participate in our events or surveys, or otherwise communicate with you for marketing purposes, provided that we do so in accordance with the consent requirements that are imposed by applicable law. When we collect your business contact details through our participation at trade shows or other events, we may use the information to follow-up with you regarding an event, send you information that you have requested on our products and services and, with your permission, include you on our marketing information campaigns.</p>
                    <p>When you visit our Sites or online services, both we and certain third parties collect information about your online activities over time and across different sites to provide you with advertising about products and services tailored to your individual interests (this type of advertising is called “interest-based advertising”). These third parties may place or recognize a unique cookie or other technology on your browser (including the use of pixel tags). Where required by applicable law, we will obtain your consent prior to processing of your information for the purpose of interest-based advertising.</p>
                    <p>You may see our ads on other websites or mobile apps because we participate in advertising networks. Ad networks allow us to target our messaging to users based on a range of factors, including demographic data, users’ inferred interests and browsing context (for example, the time and date of your visit to our Sites, the pages that you viewed, and the links that you clicked on). This technology also helps us track the effectiveness of our marketing efforts and understand if you have seen one of our advertisements.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>How we disclose Personal Data:</h3>
                    <p>Scienga Summits does not sell personal data to marketers or unaffiliated third parties. We share your personal data with trusted entities, as outlined below:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>We share Personal Data with other Scienga Summits entities in order to provide our Services and for internal administration purposes.</li>
                        <li>We share Personal Data with a limited number of our service providers. We have service providers that provide services on our behalf, such as Hotels, Banks, Payment Gateways, Logistics, Website design & hosting, Customer Service, Email Delivery Services and Auditing Services. These service providers may need to access Personal Data to perform their services. We authorize such service providers to use or disclose the Personal Data only as necessary to perform services on our behalf or comply with legal requirements. We require such service providers to contractually commit to protect the security and confidentiality of Personal Data they process on our behalf.</li>
                        <li>In the event that we enter into, or intend to enter into, a situation that alters the structure of our business, such as a reorganization, merger, sale, joint venture, assignment, transfer, change of control, or other disposition of all or any portion of our business, assets or stock, we may share Personal Data with third parties for the purpose of facilitating and completing the transaction.</li>
                        <li>We share Personal Data as we believe necessary: (i) to comply with applicable law; (ii) to enforce our contractual rights; (iii) to protect the rights, privacy, safety and property of Scienga Summits, you or others; and (iv) to respond to requests from courts, law enforcement agencies, regulatory agencies, and other public and government authorities, which may include authorities outside your country of residence.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Your Rights and Choices:</h3>
                    <p>You have choices regarding our use and disclosure of your Personal Data:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>If you no longer want to receive marketing-related emails from us, you may opt-out via the unsubscribe link included in such emails. We will try to comply with your request(s) as soon as reasonably practicable.</li>
                        <li>If you would like to review, correct, or update Personal Data that You have previously disclosed to us, You may do so by contacting us.</li>
                    </ul>
                    <p>Depending on your location and subject to applicable law, you may have the following rights with regard to the Personal Data we control about you:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>The right to request confirmation of whether Scienga Summits processes Personal Data relating to you, and if so, to request a copy of that Personal Data;</li>
                        <li>The right to request that Scienga Summits rectifies or updates your Personal Data that is inaccurate, incomplete or outdated;</li>
                        <li>The right to request that Scienga Summits erase your Personal Data in certain circumstances provided by law;</li>
                        <li>The right to request that Scienga Summits restrict the use of your Personal Data in certain circumstances;</li>
                        <li>The right to request that we export to another company, where technically feasible, your Personal Data that we hold in order to provide Services to you.</li>
                    </ul>
                    <p>Where the processing of your Personal Data is based on your previously given consent, you have the right to withdraw your consent at any time. You may also have the right to object to the processing of your Personal Data on grounds relating to your particular situation.</p>
                    <p>In order to exercise your data protection rights, you may contact Scienga Summits as described in the Contact Us section below. We take each request seriously. We will comply with your request to the extent required by applicable law. We will not be able to respond to a request if we no longer hold your Personal Data. If you feel that you have not received a satisfactory response from us, you may consult with the data protection authority in your country.</p>
                    <p>For your protection, we may need to verify your identity before responding to your request, such as verifying that the email address from which you send the request matches your email address that we have on file. If we no longer need to process Personal Data about you in order to provide our Services or our Sites, we will not maintain, acquire or process additional information in order to identify you for the purpose of responding to your request.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Data Security and Retention:</h3>
                    <p>We make reasonable efforts to ensure a level of security appropriate to the risk associated with the processing of Personal Data. We maintain organizational, technical and administrative measures designed to protect Personal Data within our organization against unauthorized access, destruction, loss, alteration or misuse. Your Personal Data is only accessible to a limited number of personnel who need access to the information to perform their duties. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure. If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of your account has been compromised), please contact us immediately.</p>
                </section>

            </div>
            <Footer />
        </>
    )
}
