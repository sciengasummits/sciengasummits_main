import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function RefundCancellation() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <PageHeader
                title="Refund Cancellation"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Refund Cancellation', link: null }
                ]}
            />
            <div className="container" style={{ paddingTop: 'clamp(2rem, 8vw, 4rem)', paddingBottom: 'clamp(2rem, 8vw, 4rem)', maxWidth: '1000px', margin: '0 auto', color: '#333', lineHeight: '1.6' }}>

                <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '3rem', fontWeight: 'bold' }}>Refund & Cancellation Policy</h2>

                <section style={{ marginBottom: '2rem' }}>
                    <p>Notice of cancellation (e.g. in case of sickness, lack of funding or any other personal reasons) must be made in writing by email to the respective conference secretary. The notification must include all relevant information regarding the bank account to which a possible refund may be remitted (incl. IBAN and BIC). The cancellation will not be effective until a written acknowledgement from the respective conference secretary is received. Keeping in view of advance payments towards Venue, Printing, Shipping, Hotels and other overheads we have to keep refund</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Policy as Follows:</h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Written cancellation received:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '1rem' }}>
                        <li>Before 60 days of conference: 75% refund</li>
                        <li>Between 60 to 30 days prior conference: 25% refund</li>
                        <li>Within 30 days of conference: No refund of both registration & accommodation fee</li>
                        <li>E-Poster, Video Presentations, Discounts and Special Packages: Non-refundable</li>
                    </ul>
                    <p>The date of the email receipt date will be the basis for considering refunds. Refunds will be made after the conference/summit. In the case of excess-payment or double payment, refund requests must be made in writing and sent to the conference secretary.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <p>No refunds will be granted for unattended summits, in case of cancellation of speakers, lack of space in the conference/summit room or any other incidents during the conference/summit which are beyond the control of the conference/summit organizers. By registering to the conference/summit participants agree that neither the organizing committee nor the conference/summit assume any liability whatsoever.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Refunds will be made in the following ways:</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>For payments received by credit or debit cards, the same credit/debit card will be refunded.</li>
                        <li>For all other payments, a bank transfer will be made to the payee nominated account and all bank charges will be for the registrants account.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Note:</h3>
                    <p>In the case of VISA refusal, the paid amount can be transferred to the other conference as per your choice. Participants who availed discounts on registration fee are not eligible for refunds. Except, if the event is cancelled.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Cancellation/Postpone of Conference/Summit:</h3>
                    <p>In the event that the congress cannot be held or is postponed due to situation(s) beyond the control of the Conference/Summit organizers or due to events which are not attributable to wrongful intent or gross negligence of the congress organizers, the congress organizers will refund 100% of registration fee but cannot be held liable by participants for any damages, costs, or losses incurred, such as transportation costs, flight booking cancellation charges, accommodation costs, financial losses, etc.</p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Transfer Policy:</h3>
                    <p>A Fully paid registration can be transferred to the other related conferences within the Organization, Only if participant is having a reason for their absence. Transfers are only initiated by requests through emails. If there is a replacement of registered person the details of the person Full name, Contact number, e-mail address, and their presenting Abstract along with Title must be provided to the respective conference secretary. However, Registration fee cannot be transferred if it is not intimated a month prior to the conference. A Registered fee can only be transferred to one conference and not eligible for the refund.</p>
                </section>

            </div>
            <Footer />
        </>
    )
}
