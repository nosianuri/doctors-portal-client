import React from 'react';
import Footer from '../Shared/Footer';
import bg from '../../assets/images/bg.png';
import section1 from "../../assets/images/section 1.webp";
import section2 from "../../assets/images/section 2.jfif";

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-neutral font-bold">Hello there</h1>
                        <p className="mb-5 text-neutral">
                            The doctor uses specialist knowledge and experience and clinical judgement, and the patient's views and understanding of their condition, to identify which investigations or treatments are likely to result in overall benefit for the patient.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* section 2 */}
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-200 rounded-box place-items-center text-neutral">Discussing Health Decisions with Your Doctor</div>
                <div className="divider lg:divider-horizontal text-neutral">OR</div>
                <div className="grid flex-grow h-32 card bg-base-200 rounded-box place-items-center text-neutral">Online Doctor Consultation via Video Call / Audio / Chat</div>
            </div>
            {/* sec - 2 */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={section1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Treatment from a doctor</h1>
                        <p className="py-6"> A psychiatrist is a doctor who treats mental health conditions.Theoretically, there are three classifications of medical treatment: Curative – to cure a patient of an illness. Palliative – to relieve symptoms from an illness. Preventative – to avoid the onset of an illness.</p>
                        <button className="btn btn-primary">More Info</button>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={section2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Types of medical treatment</h1>
                        <p className="py-6">There are many types of pain relief and many methods for providing pain relievers during palliative care. A dermatologist is a doctor who specializes in the treatment of conditions and disorders that affect the: skin; hair; nails; membranes lining your mouth, nose.</p>
                        <button className="btn btn-primary">More Info</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;