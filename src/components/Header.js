import React from 'react'
import Navigation from './Navigation';
import logo from '../assets/riaLogo.png'
import { Link } from 'react-router-dom';
import useScrollPosition from '../hooks/useScrollPosition';
import Book from '../components/Book';
import PhoneNumber from '../components/PhoneNumber';
import ig from '../assets/icons/inst.png';
import fb from '../assets/icons/fb.png';
import lkdn from '../assets/icons/lkdn.png';


function Header() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()

    return (
        <>
            <header className={classNames(scrollPosition > 0 ? "header-scroll" : " header-main")}>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='flex items-center justify-center socials'>
                        <a><img src={ig} /></a>
                        <a><img src={fb} /></a>
                        <a><img src={lkdn} /></a>
                    </div>
                    <div className={classNames(scrollPosition > 0 ? 'logo-container-hide' : 'flex logo-container col-start-2 items-center')}><Link to={`/`}><img id="logo" src={logo} /></Link><div><h1>Massage Therapy</h1></div></div>
                    <PhoneNumber />
                </div>

                <Navigation />
                <a href="https://google.com" className={classNames(scrollPosition > 0 ? 'book-btn' : 'book-btn-hide')}><Book /></a>
            </header>
        </>
    );
}

export default Header;