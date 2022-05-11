import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Exceptional = () => {
    return (
        <div class="hero-content flex-col lg:flex-row-reverse my-28">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 class="text-5xl font-bold">Exceptional DentalCare, on Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum cum aspernatur, saepe incidunt ab fuga error libero! Iure, optio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, sunt.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Exceptional;