import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'


function MobileNavBtn({ navData }) {
    return (
        <>
            <Link to={navData.link}><li tabIndex={0}><button className="btn btn-accent m-2"><a>{navData.name}</a></button></li></Link>
        </>
    );
}

export default MobileNavBtn;