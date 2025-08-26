import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PiList } from "react-icons/pi";
import { useCart } from '../context/CartProvider';
import logo1 from '../assets/Images/logos/1.png'

const Header = () => {

    const { pathname } = useLocation()
    const [showSidebar, setShowSidebar] = useState(true)
    const navigate = useNavigate();
    const { cartCount } = useCart();
    const redirect = () => {
        navigate('/shipping')
    };

    return (
        <header className='w-full bg-white'>
            <section className='header-top bg-[#0D0D0D] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-center items-center h-[40px] text-slate-500'>
                        <ul className='font-grotesk gap-6 font-semibold text-black'>
                            <li className='relative text-[#E0E0E0] items-center gap-2 text-xs'>
                                <span>OLIMPO | Sua streetwear de Recife</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <main className='w-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[60px] md-lg:h-[70px] flex justify-between items-center flex-wrap'>
                        <div className='md-lg:w-full md-lg:pt-2'>
                            <div className='flex justify-between items-center'>
                                <div className='justify-center items-center w-[30px] h-rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowSidebar(false)}>
                                    <span className='text-[20px]'><PiList /></span>
                                </div>
                                <Link to='/'>
                                    <img className="w-28 sm:w-32 md:w-36 h-auto" src={logo1} alt="" />
                                </Link>
                                <div className='relative lg:hidden md-lg:flex xl:hidden hidden cursor-pointer' onClick={redirect}>
                                    <span className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 font-grotesk text-sm font-bold uppercase ${pathname === '/shipping' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>
                                        carrinho
                                    </span>

                                    {cartCount > 0 && (
                                        <div className='absolute w-[16px] h-[16px] bg-[#F2A541] rounded-full text-white text-[10px] font-bold flex justify-center items-center -top-2 -right-3 font-grotesk'>
                                            {cartCount}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <nav className='md:lg:w-full '>
                            <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-6'>
                                <ul className='font-grotesk flex justify-center items-center gap-5 text-sm font-bold uppercase md-lg:hidden '>
                                    <li>
                                        <Link to="/" className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1 block ${pathname === '/' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/AboutUs" className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1 block ${pathname === '/AboutUs' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Quem Somos</Link>
                                    </li>
                                    <li>
                                        <Link to="/Politicas" className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1 block ${pathname === '/Politicas' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Políticas</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <aside>
                            <div className='flex md-lg:hidden justify-center items-center gap-4'>
                                <div className='flex justify-center gap-4'>
                                    <div className='relative flex justify-center items-center cursor-pointer w-[30px] h-[30px]'>
                                        <span onClick={redirect} className={`border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 font-grotesk text-sm font-bold uppercase ${pathname === '/shipping' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>carrinho</span>
                                        {cartCount > 0 && (
                                            <div className='w-[16px] h-[16px] absolute bg-[#F2A541] rounded-full text-white text-[10px] font-bold flex justify-center items-center -top-[2px] -right-[36px] font-grotesk'>
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
                        <ul className='font-grotesk flex flex-col gap-3 text-sm font-bold uppercase'>
                            <li>
                                <Link to="/" className={`py-2 text-[14px] border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1  ${pathname === '/' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs" className={`py-2 text-[14px] border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1  ${pathname === '/AboutUs' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Quem Somos</Link>
                            </li>
                            <li>
                                <Link to="/Politicas" className={`py-2 text-[14px] border-b-2 border-transparent hover:border-[#F2A541]/40 transition-all duration-300 p-1  ${pathname === '/Politicas' ? 'text-[#F2A541]' : 'text-[#1C1C1C]'}`}>Políticas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Header;