import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PiList } from "react-icons/pi";
import { useCart } from '../context/CartProvider';


const Header = () => {

    const { pathname } = useLocation()
    const [showSidebar, setShowSidebar] = useState(true)
    const navigate = useNavigate();
    const {cartCount} = useCart();
    const redirect = ()=> {
        navigate('/shipping')
    };

    return (
        <header className='w-full bg-white'>
            <section className='header-top bg-[#0D0D0D] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-slate-500'>
                        <ul className='font-grotesk flex justify-start item-center gap-8 font-semibold text-black'>
                            <li className='flex relative justify-center text-[#E0E0E0] items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <span><MdEmail /></span>
                                <span>support@gmail.com</span>
                            </li>
                            <li className='flex relative justify-center text-[#E0E0E0] items-center gap-2 text-sm'>
                                <span><IoMdPhonePortrait /></span>
                                <span>(81) 9714-6120</span>
                            </li>
                        </ul>
                        <div>
                            <div className='flex justify-center items-center gap-10'>
                                <div className='flex justify-center items-center gap-4 text-[#E0E0E0]'>
                                    <a href="https://www.instagram.com/olimpo081/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#F2A541]"><FaInstagram /></a>
                                    <a href="###" className="text-[#E0E0E0] hover:text-[#F2A541]"><FaTiktok /></a>
                                    <a href="###" className="text-[#E0E0E0] hover:text-[#F2A541]"><MdEmail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main className='w-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[80px] md-lg:h-[100p] flex justify-between items-center flex-wrap'>
                        <div className='md-lg:w-full md-lg:pt-4'>
                            <div className='flex justify-between items-center'>
                                <Link to='/'>
                                    <img className="w-40 h-auto" src="http://localhost:3000/images/logo1.png" alt="" />
                                </Link>
                                <div className='justify-center items-center w-[30px] h-rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowSidebar(false)}>
                                    <span> <PiList /></span>
                                </div>
                            </div>
                        </div>
                        <nav className='md:lg:w-full '>
                            <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8'>
                                <ul className='font-grotesk flex justify-center items-center gap-7 text-lg font-bold  uppercase md-lg:hidden '>
                                    <li>
                                        <Link to="/" className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1 block ${pathname === '/' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1 block ${pathname === 'aboutUs' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Quem Somos</Link>
                                    </li>
                                    <li>
                                        <Link className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1 block ${pathname === 'contact' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Contato</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <aside>
                            <div className='flex md-lg:hidden justify-center items-center gap-5'>
                                <div className='flex justify-center gap-5'>
                                    <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px]'>
                                        <span onClick={redirect} className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 font-grotesk text-lg font-bold uppercase ${pathname === '/shipping' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>carrinho</span>
                                        {cartCount > 0 && (
                                            <div className='w-[18px] h-[18px] absolute bg-[#F2A541] rounded-full text-white text-[14px] font-bold flex justify-center items-center -top-[3px] -right-[42px] font-grotesk'>
                                            <span>{cartCount}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <aside className='hidden md-lg:block'>
                <div
                    onClick={() => setShowSidebar(true)}
                    className={`fixed top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-60 transition-opacity duration-300 ${showSidebar ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className={`w-[300px] z-[999] transition-all duration-300 fixed top-0 ${showSidebar ? '-left-[300px]' : 'left-0'} bg-white h-screen py-6 px-8`}>
                        <ul className='font-grotesk flex-col justify-center items-center gap-10 text-sm font-bold uppercase'>
                            <li>
                                <Link className={`py-2 block ${pathname === '/' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Home</Link>
                            </li>
                            <li>
                                <Link className={`py-2 block ${pathname === 'aboutUs' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Quem Somos</Link>
                            </li>
                            <li>
                                <Link className={`py-2 block ${pathname === 'contact' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Header;