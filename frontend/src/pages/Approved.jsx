import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FcCheckmark } from "react-icons/fc";

const approved = () => {
  return (
    <div>
      <Header />
      <section className='bg-[#eeeeee] min-h-screen flex flex-col'>
        <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14 flex-grow'>
          <div className='w-full flex flex-wrap justify-center'>
            <div className='w-[67%] md-lg:w-full'>
              <div className='flex flex-col gap-3 bg-white p-10'>
                <div className='flex shadow-sm rounded-md font-grotesk'>
                  <span className='p-2'><FcCheckmark /></span>
                  <h1 className='text-3x1 font-bold text-[#1C1C1C]'>Pedido Aprovado</h1>
                </div>
                <div className='flex'>
                  <div className='mt-5'>
                    <p className='text-lg text-[#666666]'>Seu pedido está sendo processado. Por favor, aguarde a confirmação.</p>
                    <button className='px-5 py-[6px] mt-3 rounded-sm hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541] align-center'>Voltar para tela inicial</button>
                  </div>
                  <img className="w-80 h-auto" src='/Images/elements/placa.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default approved