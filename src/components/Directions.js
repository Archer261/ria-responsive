import React from 'react'
import location from '../assets/location.jpg';


function Directions() {
    return (
        <div class="flex items-stretch ...">
            <div class="container mx-auto">
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className='flex flex-col'>
                        <figure><img id="location" className='w-40 h-auto' src={location} alt="Location" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">How to Find Us</h2>
                            <div className='container w-50 h-auto  ...'>
                                <p className='font-bold'>Address:</p>
                                <p>51414 Van Dyke Ave Suite 27</p>
                                <p>Shelby Twp, 48316</p>
                                <br />
                                <p className='font-bold'>Directions:</p>
                                <p>One block North of 23 Mile, on Van Dyke.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Directions;