import React from 'react';
import blackFriday from '../assets/promotions/png_20221031_195635_0000.png';

function Promotions() {
    return (
        <>
            <h1>Current Promotions</h1>
            <div className="grid grid-cols-5">
                <div className='col-span-3 col-start-2'><img src={blackFriday} /></div>
            </div>
        </>
    );
}

export default Promotions;