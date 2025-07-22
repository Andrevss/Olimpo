import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Policies = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#eeeeee] font-grotesk">
            <Header />
            <main className="flex-grow <div w-[65%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14">
                <section className='flex flex-col gap-3'>
                    <div className='bg-white p-10 shadow-sm rounded-md w-full'>
                        <h2 className="text-2xl font-bold text-[#F2A541] uppercase">
                            Políticas de frete e devolução
                        </h2>
                        <br />
                        <div className='flex-col sm:flex-col text-justify'>
                            <h4 className='text-lg mb-1'><strong>Envio e Prazo de Postagem</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-3">
                                Todos os pedidos são processados e postados em até <strong>3 dias úteis</strong> após a confirmação do pagamento. Assim que seu pedido for enviado, você receberá um e-mail com o código de rastreamento para acompanhar o transporte.
                            </p>
                            <h4 className='text-lg mb-1'><strong>Opções de Frete</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-3">
                                Disponibilizamos envios <strong>via Correios (PAC e Sedex)</strong>. O prazo e o valor do frete são calculados automaticamente no checkout, com base no CEP informado.
                            </p>
                            <h4 className='text-lg mb-1'><strong>Retirada Gratuita</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-1">
                                Também oferecemos a opção de retirada gratuita para quem desejar. Basta escolher essa opção no momento da compra. O endereço para retirada é:
                            </p>
                            <p className='italic mb-3'>
                                <strong>Estação Monte dos Guararapes</strong><br />
                                Av. Zequinha Barreto - Prazeres, Jaboatão dos Guararapes<br />
                                Horários de retirada: Segunda a Sexta, das 10h às 17h (com agendamento prévio)
                            </p>
                            <h4 className='text-lg mb-1'><strong>Atrasos e Extravios</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-3">
                                <strong>Não nos responsabilizamos</strong> por eventuais atrasos na entrega causados pelos Correios, mas daremos suporte total para acompanhar e resolver a situação.
                            </p>
                            <h4 className='text-lg mb-1'><strong>Trocas e Devoluções</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-3">
                                Você pode solicitar troca ou devolução <strong>em até 7 dias corridos</strong> após o recebimento. O produto deve estar sem uso e na embalagem original. Para iniciar o processo, entre em contato conosco pelo e-mail ou Instagram.
                            </p>    
                        </div> 
                    </div>
                </section>
            </main>

            <Footer />
        </div>


    )
}
