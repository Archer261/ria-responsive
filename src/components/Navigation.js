import React from 'react'
import logo from '../assets/riaLogo.png'
import { Link } from 'react-router-dom'
import NavBtn from './NavBtn'
import PhoneNumber from '../components/PhoneNumber';
import useScrollPosition from '../hooks/useScrollPosition';


const navigateToProfile = () => {
    navigateToProfile('/profile')
}

const navigateHome = () => {
    navigateHome('/');
};


const navData = [
    { name: 'Home', link: '/', id: 0 },
    { name: 'Promotions', link: '/promotions', id: 1 },
    { name: 'Services', link: '/services', id: 2 },
    { name: 'Products', link: '/products', id: 3 },
    { name: 'About Me', link: '/about', id: 4 },
    { name: 'Testimonials', link: '/testimonials', id: 5 },
    { name: 'FAQs', link: '/faq', id: 6 }
]

function Navigation() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()

    return (
        <div className='navbar w-full justify-self-center py-1'>
            <div className="navbar-start flex-1">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Services</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <Link to={`/products`}><li><button className="btn btn-accent m-2"><a>Products</a></button></li></Link>
                        <Link to={`/about`}><li><button className="btn btn-accent m-2"><a>About me</a></button></li></Link>
                        <Link to={`/testimonials`}><li><button className="btn btn-accent m-2"><a>Testimonials</a></button></li></Link>
                    </ul>
                </div>
                {/* <Link to={`/`}><a className="btn btn-ghost normal-case text-xl w-1/2 h-1/2"><img className='object-contain w-auto h-1/2' src={logo} /></a></Link> */}
            </div>

            <div className='block'>
                <div className={classNames(scrollPosition > 0 ? 'flex justify-start pr-40' : 'logo-container-hide')}><Link to={`/`}><img id="logo" className="w-20 h-auto" src={logo} /></Link><div className='self-center'><h1 >Massage Therapy</h1></div></div>
            </div>

            <div className="container flex w-fit mr-3">


                {navData.map((ele) => (
                    <NavBtn navData={ele} />
                ))}
            </div>
            <div className='mobile-logo-container'><Link to={`/`}><img id="logo" src={logo} /></Link></div>
            <div className="navbar-end flex-1 ml-5 pl-3">
                <a className="btn bg-error w-10 sm:w-fit " href="https://riastouchmassage.fullslate.com/"><p>Book Appointment</p></a>
            </div>
        </div>
    );
}

export default Navigation;