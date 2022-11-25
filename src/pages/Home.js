import React from 'react'
import Banner from '../components/Banner';
import Hours from '../components/Hours';
import Info from '../components/Info';
import Directions from '../components/Directions';



function Home() {
    return (
        <>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mx-10">
                <div class="sm:col-span-3 sm:col-span-2 row-span-full sm:row-span-1 ..."><Banner /></div>
                <div><Directions /></div>
                <div><Info /></div>

                {/* <div class="...">03</div> */}

                <div ><Hours /></div>
                <div >06</div>
                <div >07</div>
            </div>
        </>
    );
}

export default Home;