import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Us = () => {
    return (
        <main className='font-grotesk min-h-screen flex flex-col bg-[#f5f5f5]'>
            <Header />
            <section className="w-[80%] md:w-[80%] mx-auto mt-10">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#F2A541] uppercase">
                        De um grupo, nasce uma ideia.
                    </h2>
                    <div className='flex sm:flex-col'>
                        <p className="sm:text-base text-xl text-gray leading-relaxed">
                            Tudo começou na escola, quando fazíamos nossas próprias camisas personalizadas. Era mais do que moda, era um símbolo de quem nós eramos.
                            <br /><br />
                            Jogando basquete, veio o estalo: e se criarmos de verdade uma marca de roupa com a cara do nosso grupo? Algo nosso. Com alma, com voz, com atitude.
                            <br /><br />
                            Assim nasceu a <strong>OLIMPO</strong>. Um nome que carrega peso, confiança e união. Aqui, tudo que elaboramos é em conjunto, porque a rua é nossa passarela, e a nossa marca, é de quem vive ela.
                            <br /><br />
                            Com o tempo, as camisas da <strong>OLIMPO</strong>, que no início eram feitas só para o nosso grupo de amigos — com a ideia simples de vestir algo com a nossa cara — começaram a tomar uma nova forma.
                        </p>
                        <img className="md:hidden w-64 h-auto" src='/Images/elements/zeus.png' alt='' />
                    </div>
                    <div className='flex sm:flex-col mb-4'>
                        <img className="md:w-56 w-96 h-auto mr-8" src='/Images/elements/placa.png' alt='' />
                        <p className="sm:text-base text-xl text-gray leading-relaxed">
                            <br /><br />
                            Queríamos trazer referências à nossa essência, ao que vive conosco: os esportes que nos movem e Recife, a cidade que molda nosso olhar.
                            <br /><br />
                            Foi assim que a <strong>OLIMPO</strong> evoluiu para o que é hoje — mais do que uma marca, um coletivo que carrega atitude, identidade e conexão. Cada peça que criamos tem uma história, uma referência, uma energia que vem das ruas, das quadras, dos campos e do calor da nossa cultura.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Us