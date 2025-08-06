import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Us = () => {
    return (
        <main className='font-grotesk min-h-screen flex flex-col bg-[#f5f5f5]'>
            <Header />
            <section className="w-[80%] md:w-[80%] mx-auto mt-10 flex-grow">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-2xl font-bold text-[#F2A541] uppercase">
                        De um grupo, nasce uma ideia.
                    </h2>
                    <div className='flex sm:flex-col'>
                        <p className="sm:text-base text-xl text-gray leading-relaxed text-justify p-2">
                            A <strong>OLIMPO</strong> nasceu na escola, entre amigos que criavam suas próprias camisas como forma de expressão. Inspirados pelo basquete e pela união do grupo, decidiram criar uma marca com identidade e atitude.
                            <br /><br />
                            O que começou como algo entre amigos cresceu e se transformou em um coletivo que representa a essência do esporte, de Recife e da cultura de rua.
                            <br /><br />
                            Hoje, cada peça da <strong>OLIMPO</strong> carrega história, conexão e autenticidade.
                        </p>
                        <img className="md:hidden w-96 h-auto" src={`${process.env.REACT_APP_BACKEND_URL}/Images/elements/placa.png`} alt='' />
                        <div className='hidden md:flex md:justify-center'>
                            <img className="w-56 h-auto" src={`${process.env.REACT_APP_BACKEND_URL}/Images/elements/placa.png`} alt='' />
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Us