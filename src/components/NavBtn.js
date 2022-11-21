import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'


function NavBtn({ navData }) {
    return (
        <div class="navBox">
            <Link to={`${navData.link}`}><div class="custBtn navBtn">
                <span>{navData.name}</span>
            </div></Link>
        </div>
    );
}

export default NavBtn;