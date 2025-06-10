import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {

    return (
        <footer className='bg-[#1C1C1C]'>
            <div className='w-[85%] flex flex-wrap justify-between mx-auto pb-12 pt-10 md-lg:pb-10 sm:pb-6'>
                <section className=''>
                    <div className='text-[#E0E0E0] font-grotesk flex-col justify-center sm:justify-start sm:mt-6 w-full'>
                        <h2 className='text-lg'>Formas de Pagamento</h2>
                        <div className='flex gap-4 text-[#E0E0E0] mt-2 text-2xl'>
                            <span href="###" ><FaCcMastercard /></span>
                            <span href="###" ><FaCcVisa /></span>
                            <span href="###" ><FaPix /></span>
                        </div>
                        <h6 className='mt-3 text-xs	'>*Consulte nossos termos para informações sobre frete</h6>
                    </div>
                </section>
                <section className=''>
                    <div className='text-[#E0E0E0] font-grotesk flex-col justify-center sm:justify-start sm:mt-6 w-full'>
                        <h2 className='text-lg'>Nos siga nas redes sociais</h2>
                        <div className='flex gap-4 text-[#E0E0E0] mt-2 text-xl'>
                            <a href="https://www.instagram.com/olimpo081/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#F2A541]"><FaInstagram /></a>
                            <a href="###" className="text-[#E0E0E0] hover:text-[#F2A541]"><FaTiktok /></a>
                            <a href="###" className="text-[#E0E0E0] hover:text-[#F2A541]"><FaXTwitter /></a>
                        </div>
                    </div>
                </section>
                <section className=''>
                    <div className='text-[#E0E0E0] font-grotesk flex-col justify-center sm:justify-start sm:mt-6 w-full'>
                        <h2 className='text-lg'>Fale Conosco</h2>
                        <div className='flex gap-4 text-[#E0E0E0] mt-2 text-xl'>
                            <a href="###" className="text-[#E0E0E0] hover:text-[#F2A541]"><FaWhatsapp /></a>
                            <a href="###" className="text-[#E0E0E0] hover:text-[#F2A541]"><MdEmail /></a>
                        </div>
                    </div>
                </section>
            </div>
            <div className='w-[90%] flex flex-wrap justify-center items-center text-[#F2A541] mx-auto py-5 text-center text-sm font-grotesk'>
                <span>Copyright @2025 All Rights Reserved</span>
            </div>

        </footer>
    );
};

export default Footer;