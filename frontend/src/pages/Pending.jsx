import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Pending = () => {
  return (
    <div>
      <Header />
      <section className='bg-[#eeeeee]'>
        <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14'>
          <div className='w-full flex flex-wrap justify-center'>
            <div className='w-[67%] md-lg:w-full'>
              <div className='flex flex-col gap-3'>
                <div className='bg-white p-10 shadow-sm rounded-md font-grotesk'>
                  <h1 className='text-2xl font-bold text-[#1C1C1C]'>Pedido Pendente</h1>
                  <p className='text-lg text-[#666666]'>Seu pedido está sendo processado. Por favor, aguarde a confirmação.</p>
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

export default Pending