import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaXmark } from "react-icons/fa6";

const Rejected = () => {
  return (
    <div className='min-h-screen flex flex-col font-grotesk'>
      <Header />
      <section className= 'mx-auto py-14 flex-grow'>
        <div className='w-full flex flex-row justify-center'>
            <div className='md:flex md:flex-col bg-white p-10'>
              <div className='flex items-center rounded-md mb-3'>
                <span className='mr-2 text-[26px] text-[#B91C1C] text-center justify-center'><FaXmark /></span>
                <h1 className='text-2xl font-bold text-[#F2A541] uppercase'>Pedido Rejeitado</h1>
              </div>
              <div className='md:flex md:flex-col flex flex-col items-center'>
                <p className='text-lg text-[#666666] mb-1 text-justify'>
                  O pagamento foi recusado. 
                  <br></br>
                  Verifique os dados do cartão ou tente outro método de pagamento.
                  </p>
                <button className='px-5 py-[6px] mt-3 rounded-sm hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'>Voltar para tela inicial</button>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Rejected