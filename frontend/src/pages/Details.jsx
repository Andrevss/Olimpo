import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { getProdutoPorSlug, secoesProdutos } from '../data/products';
import { useCart } from '../context/CartProvider';

const TamanhosDisponiveis = ['P', 'M', 'G', 'GG'];

const Details = () => {
    const { slug } = useParams();
    const produto = getProdutoPorSlug(slug);
    const [imagemAtual, setImagemAtual] = useState(produto?.imagemFrente);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
    const { addToCart } = useCart();

    // Verificar se o produto está na seção de últimos lançamentos
    const isUltimosLancamentos = secoesProdutos.ultimosLancamentos.includes(produto?.id);

    // Função para verificar se o tamanho está disponível
    const isTamanhoDisponivel = (tamanho) => {
        if (!produto.tamanhosDisponiveis) return true;
        return produto.tamanhosDisponiveis.includes(tamanho);
    };

    // Verificar se todos os tamanhos estão indisponíveis
    const todosTamanhosIndisponiveis = () => {
        if (!produto.tamanhosDisponiveis) return false;
        return TamanhosDisponiveis.every(tamanho => !isTamanhoDisponivel(tamanho));
    };

    const handleAdicionarAoCarrinho = () => {
        if (isUltimosLancamentos || todosTamanhosIndisponiveis()) {
            return; // Não permite adicionar se for últimos lançamentos ou se todos tamanhos estão indisponíveis
        }
        
        if (!tamanhoSelecionado) {
            alert('Selecione um tamanho!');
            return;
        }
        addToCart(produto, tamanhoSelecionado);
    };

    const handleSelecionarTamanho = (tamanho) => {
        if (isTamanhoDisponivel(tamanho) && !isUltimosLancamentos) {
            setTamanhoSelecionado(tamanho);
        }
    };

    // Se o produto não foi encontrado
    if (!produto) {
        return (
            <main className='font-grotesk min-h-screen flex flex-col'>
                <Header />
                <section className='flex-grow mt-5 flex items-center justify-center'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-gray-800'>Produto não encontrado</h2>
                        <p className='text-gray-600 mt-2'>O produto que você está procurando não existe.</p>
                    </div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className='font-grotesk min-h-screen flex flex-col'>
            <Header />
            <section className='flex-grow mt-5'>
                <div className='w-[95%] sm:w-[90%] lg-w-[90%] h-full mx-auto '>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <div className='flex md:flex-col-reverse'>
                            <div className='flex flex-col gap-2 md:mr-5 md:justify-start mb-4 md:mb-0 mt-[1.25rem] md:flex-row'>
                                {[produto.imagemFrente, produto.imagemCostas].map((img, i) => (
                                    <img
                                        key={i}
                                        className={`w-[90px] h-[110px] object-cover cursor-pointer border ${imagemAtual === img ? 'border-[#F2A541]' : 'border-gray-200'
                                            } hover:border-[#F2A541] transition-all `}
                                        src={img}
                                        alt={`Thumb ${i + 1}`}
                                        onClick={() => setImagemAtual(img)}
                                    />
                                ))}
                            </div>
                            <div className='flex mt-[1.25rem]'>
                                <img
                                    className='h-[550px] w-full object-contain transition-all duration-300 md:justify-start'
                                    src={imagemAtual}
                                    alt={produto.nome}
                                />
                            </div>
                        </div>
                        <div className='w-[30%] md:w-[100%] md:p-2 flex flex-col gap-5 ml-6 sm:ml-0 sm:mt-5'>
                            <div className='text-[#0D0D0D]'>
                                <h3 className='text-3xl font-black relative inline-block p-1 after:block after:h-[2px] after:w-full after:bg-[#F2A541] after:mt-1'>
                                    {produto.nome}
                                </h3>
                                
                                {/* Só mostra o preço se NÃO for últimos lançamentos */}
                                {!isUltimosLancamentos && (
                                    <h4 className='mt-5 text-lg font-semibold'>{produto.preco}</h4>
                                )}
                            </div>

                            {/* Seção de tamanhos - só aparece se NÃO for últimos lançamentos */}
                            {!isUltimosLancamentos && (
                                <div className="mb-2">
                                    <span className="font-semibold text-gray-800">Tamanho:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {TamanhosDisponiveis.map((t) => {
                                            const disponivel = isTamanhoDisponivel(t);
                                            return (
                                                <button
                                                    key={t}
                                                    onClick={() => handleSelecionarTamanho(t)}
                                                    disabled={!disponivel}
                                                    className={`
                                                        w-10 h-8 flex items-center justify-center 
                                                        rounded border transition-all text-sm font-semibold
                                                        ${!disponivel 
                                                            ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed opacity-50' 
                                                            : tamanhoSelecionado === t
                                                                ? 'bg-[#F2A541] text-white border-white'
                                                                : 'bg-white text-black border-gray-300 hover:border-[#F2A541] cursor-pointer'
                                                        }
                                                    `}
                                                >
                                                    {t}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            <span className='text-base text-justify text-gray-600 font-grotesk'>
                                {produto.descDetalhada}
                            </span>

                            {/* Botão de comprar - só aparece se NÃO for últimos lançamentos */}
                            {!isUltimosLancamentos && (
                                <button
                                    onClick={handleAdicionarAoCarrinho}
                                    disabled={todosTamanhosIndisponiveis()}
                                    className={`
                                        font-bold py-2 px-6 rounded md:mb-5 
                                        ${todosTamanhosIndisponiveis()
                                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                                            : 'bg-[#F2A541] hover:bg-orange-500 text-white'
                                        }
                                    `}
                                >
                                    {todosTamanhosIndisponiveis() ? 'PRODUTO INDISPONÍVEL' : 'COMPRAR'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Details