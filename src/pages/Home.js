import React from 'react'
import Banner from '../components/Banner';
import Hours from '../components/Hours';
import Info from '../components/Info';
import Directions from '../components/Directions';



function Home() {
    return (
        <>

            <div class="grid grid-cols-3 grid-rows-3 gap-4 mx-10">
                <div class="col-span-2 ..."><Banner /></div>
                <div class="col-span-2..."><Directions /></div>
                <div class="col-span-2 ..."><Info /></div>

                {/* <div class="...">03</div> */}

                <div class="..."><Hours /></div>
                <div class="...">06</div>
                <div class="col-span-2 ...">07</div>
            </div>
        </>
    );
}

export default Home;