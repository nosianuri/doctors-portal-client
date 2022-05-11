import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='justify-center items-center	'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold-uppercase'>Contact Us</h3>
                <h2 className='text-4xl'>Stay connected with us</h2>
            </div>
            <div class="card -center max-w-sm shadow-2xl ">
                <div class="card-body">
                    <div class="form-control">
                        <input type="text" placeholder="email address" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="subject" class="input input-bordered" />
                    </div>
                    <div className='form-control'>
                        <input type="text" placeholder='Your Message' class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contact;