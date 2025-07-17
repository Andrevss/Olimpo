import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import produtos from '../data/products';
import { useCart } from '../context/CartProvider';

const TamanhosDisponiveis = ['PP', 'P', 'M', 'G', 'GG'];

const Details = () => {
    const { slug } = useParams();
    const produto = produtos.find(p => p.slug === slug);
    const [imagemAtual, setImagemAtual] = useState(produto.imagemFrente);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
    const { addToCart } = useCart();
    const handleAdicionarAoCarrinho = () => {
        if (!tamanhoSelecionado) {
            alert('Selecione um tamanho!');
            return;
        }
        addToCart(produto, tamanhoSelecionado);
    };

    return (
        <main className='font-grotesk min-h-screen flex flex-col'>
            <Header />
            <section className='flex-grow mt-5'>
                <div className='w-[95%] md:w-[80%] sm:w-[90%] lg-w-[90%] h-full mx-auto '>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <div className='flex'>
                            <div className='flex flex-col gap-2 md:mr-5 md:justify-start mb-4 md:mb-0 mt-[1.25rem]'>
                                {[produto.imagemFrente, produto.imagemCostas].map((img, i) => (
                                    <img
                                        key={i}
                                        className={`w-[90px] h-[110px] object-cover cursor-pointer border ${imagemAtual === img ? 'border-[#F2A541]' : 'border-gray-200'
                                            } hover:border-[#F2A541] transition-all`}
                                        src={`/Images/products/${img}`}
                                        alt={`Thumb ${i + 1}`}
                                        onClick={() => setImagemAtual(img)}
                                    />
                                ))}
                            </div>
                            <div className='flex mt-[1.25rem]'>
                                <img
                                    className='h-[550px] w-full object-contain transition-all duration-300'
                                    src={`/Images/products/${imagemAtual}`}
                                    alt={produto.nome}
                                />
                            </div>
                        </div>
                        <div className=' w-[30%] flex flex-col gap-5 ml-6 sm:ml-0 sm:mt-5 sm:items-center'>
                            <div className='text-[#0D0D0D]'>
                                <h3 className='text-3xl font-black relative inline-block p-1 after:block after:h-[2px] after:w-full after:bg-[#F2A541] after:mt-1'>
                                    {produto.nome}
                                </h3>
                                <h4 className='mt-5 text-lg font-semibold'>{produto.preco}</h4>
                            </div>
                            <div className="mb-2">
                                <span className="font-semibold text-gray-800">Tamanho:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {TamanhosDisponiveis.map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTamanhoSelecionado(t)}
                                            className={`
                                                w-10 h-8 flex items-center justify-center 
                                                rounded border transition-all text-sm font-semibold
                                                ${tamanhoSelecionado === t
                                                    ? 'bg-[#F2A541] text-white border-white'
                                                    : 'bg-white text-black border-gray-300 hover:border-[#F2A541]'}
                                            `}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>

                            </div>
                            <span className='text-base   text-gray-600 font-grotesk'>
                                {produto.descDetalhada}</span>
                            <button
                                onClick={handleAdicionarAoCarrinho}
                                className=" bg-[#F2A541] hover:bg-[#F2A541]d18f33 text-white font-bold py-2 px-6 rounded"
                            >
                                COMPRAR
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>

    )
}

export default Details