import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}>
            <div className='text-center p-5'>
            <h3 className='text-[#0FCFEC] text-xl font-bold-uppercase'>Contact Us</h3>
            <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <div className='flex h-screen justify-center items-center'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="email address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="subject" className="input input-bordered" />
                        </div>
                        <div className='form-control'>
                            <input type="text" placeholder='Your Message' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Contact;