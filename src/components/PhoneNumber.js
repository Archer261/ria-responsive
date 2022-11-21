
import React from 'react'
import phoneIco from '../assets/icons/phone.png'


function PhoneNumber() {
    return (
        <>
            <a id='phone' className='m-3' href='tel:5862586841'>
                <div className='flex items-center justify-center w-fit'>
                    <img src={phoneIco} />
                    <p>586-258-6841</p>
                </div>
            </a>
        </>
    );
}

export default PhoneNumber;
