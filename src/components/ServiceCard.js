import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'


function ServiceCard({ props }) {
    return (
        <div class="service-card" style={{ backgroundImage: "url(" + props.background + ")" }}>
            <div className='flex flex-wrap'>
                <h3>{props.name}</h3>
            </div>
            <div className='flex flex-wrap'>
                <p>{props.info}</p>
            </div>
        </div>
    );
}

export default ServiceCard;