import React from 'react'
import ServiceInfo from '../components/ServiceInfo';
import ServiceCard from '../components/ServiceCard';
import sportsMassage from '../assets/services-imgs/sportsMassage.jpg';
import couples from '../assets/services-imgs/couples.jpg';


const services = [
    { name: 'Relaxation Body Massage/Light Medium Pressure', info: 'Relaxing Body massage helps your tired mind and body to unwind , calm your nerves.' },
    { name: 'Deep Tissue Massage Deeper Pressure', info: 'Slow, deliberate massage techniques using elbows, forearms & thumbs to relieve tightness from overusing and tension in muscles.' },
    { name: 'Therapeutic Massage', info: 'Issues with neck, back & shoulder /hip-sciatica (shooting pain from hip to the legs).' },
    { name: 'Couples Massage (Per couple)', info: `Lavender essential oils included. A couple's massage allows partners to experience a relaxing massage together.`, background: couples },
    { name: 'Sports Massage', info: 'Enhance your performance and speed up your recovery when you take advantage of our sports massage.', background: sportsMassage },
]

function Service() {

    return (
        <div class="grid grid-cols-4 gap-5 mx-20 px-10">
            <div className='col-span-3 col-start-2'><ServiceInfo /></div>
            {services.map((ele) => (
                <ServiceCard props={ele} />
            ))}
        </div>
    );
}

export default Service;
