import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../Service/BookingModal';
import Service from '../Service/Service';


const AvailableAppointment = ({date}) => {
    const [Services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'> Available
            Appointments on {format(date, 'PP')}
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    Services.map(service=><Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
             date={date}
              treatment={treatment}
              setTreatment={setTreatment}
              ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;