import React from 'react'
import massage from '../assets/contentImg.jpg'


function Hours() {
    return (
        <div className='hours-container'>
            <div class="flex items-stretch ...">
                <div class="container mx-auto min-w-500">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={massage} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Business Hours:</h2>
                            <p>Monday : 9:30 am - 7 pm </p>
                            <p>Tuesday : 10 am - 7.30 pm</p>
                            <p>Wednesday: 10:30am - 7.pm</p>
                            <p>Thursday & Friday : 10am - 7.30 pm</p>
                            <p>Saturday  : 10:30am- 4pm</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hours;