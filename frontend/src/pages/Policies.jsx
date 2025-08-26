import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Policies = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#eeeeee] font-grotesk">
            <Header />
            <main className="flex-grow w-[65%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14">
                <section className='flex flex-col gap-3'>
                    <div className='bg-white p-10 shadow-sm rounded-md w-full'>
                        <h2 className="text-2xl font-bold text-[#F2A541] uppercase">
                            Políticas de frete e devolução
                        </h2>
                        <br />
                        <div className='flex-col sm:flex-col text-justify'>
                            <h4 className='text-lg mb-1'><strong>Envio e Prazo de Postagem</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-3">
                                Todos os pedidos são processados e enviados <strong>após a confirmação do pagamento</strong>. Assim que seu pedido for enviado, você receberá uma mensagem no whatsapp com a localização do entregador.
                            </p>

                            <h4 className='text-lg mb-1'><strong>Opção de Entrega</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-3">
                                Nossos envios são feitos <strong>via Uber Flash</strong>. O valor da corrida é calculado após confirmação do pagamento. Você pode solicitar que o valor calculado seja <strong>acrescentado no valor da camisa</strong> ou <strong>pagar na hora da coleta</strong> diretamente com o entregador.
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
                                <strong>Não nos responsabilizamos</strong> por eventuais problemas na entrega causados pelos entregadores, mas daremos suporte total para acompanhar e resolver a situação.
                            </p>

                            <h4 className='text-lg mb-1'><strong>Trocas e Devoluções</strong></h4>
                            <p className="sm:text-base text-base text-gray leading-relaxed mb-3">
                                Você pode solicitar troca ou devolução <strong>em até 7 dias corridos</strong> após o recebimento. O produto deve estar sem uso e na embalagem original. Para iniciar o processo, entre em contato conosco pelo instagram ou whatsapp.
                            </p> 
                            <p className='italic mb-3'>
                                *Frete de devolução por conta do cliente (exceto defeitos de fabricação).<br />
                            </p>   
                        </div> 
                    </div>
                </section>
            </main>

            <Footer />
        </div>


    )
}
