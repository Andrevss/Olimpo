import { useState } from 'react';
import { MdOutlineShoppingCart, MdCheck } from "react-icons/md";
import { useCart } from '../../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import { getProdutosPorIds, secoesProdutos } from '../../data/products'; // Novo arquivo para últimos lançamentos
import { IoIosArrowDown } from "react-icons/io";


const TamanhosDisponiveis = ['P', 'M', 'G', 'GG'];

const FeatureProduct = () => {
    const [sizeOption, setSizeOption] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [addedProduct, setAddedProduct] = useState(null);

    const { addToCart } = useCart();
    const navigate = useNavigate();

    const isTamanhoDisponivel = (produto, tamanho) => {
        if (!produto.tamanhosDisponiveis) return true;
        return produto.tamanhosDisponiveis.includes(tamanho);
    };

    const mostrarPopupConfirmacao = (produto, tamanho) => {
        setAddedProduct({ ...produto, tamanho });
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
            setAddedProduct(null);
        }, 4000);
    };

    // Função para renderizar uma seção de produtos
    const renderSecaoProdutos = (listaProdutos, titulo) => (
        <>
            <div className='w-full text-center font-grotesk text-3xl font-bold text-[#1C1C1C] pb-[10px]'>
                <h1 className='relative inline-block after:block after:w-[100px] after:h-[2px] after:bg-[#F2A541] after:mt-1 after:mx-auto'>
                    {titulo}
                </h1>
            </div>

            {listaProdutos.map((produto, i) => (
                <div key={`${titulo}-${i}`} className="flex flex-col items-center w-[280px] sm:w-[320px] md:w-[350px]">
                    <div className='relative group w-full h-auto overflow-hidden'>
                        <img
                            onClick={() => navigate(`/product/${produto.slug}`)}
                            className='w-full h-full cursor-pointer object-contain absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0'
                            src={produto.imagemFrente}
                            alt={produto.nome}
                        />

                        <img
                            className='w-full h-full cursor-pointer object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100'
                            src={produto.imagemCostas}
                            alt=''
                        />

                        <ul className='flex justify-center items-center gap-2 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-700 group-hover:bottom-3 group-hover:opacity-100'>
                            <li className='w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#F2A541] hover:text-white hover:rotate-[720deg] transition-all'
                                onClick={() => {
                                    const tamanhoSelecionado = sizeOption[produto.id];
                                    if (!tamanhoSelecionado) {
                                        alert("Selecione um tamanho antes de adicionar ao carrinho.");
                                        return;
                                    }

                                    addToCart(produto, tamanhoSelecionado);
                                    mostrarPopupConfirmacao(produto, tamanhoSelecionado);
                                }}>
                                <MdOutlineShoppingCart className='text-sm sm:text-base' />
                            </li>
                            <li className="relative">
                                <select
                                    id='sizeOption'
                                    name='sizeOption'
                                    className='w-[40px] h-[26px] sm:w-[46px] sm:h-[30px] appearance-none bg-white border rounded-lg text-xs sm:text-sm font-grotesk text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2A541] focus:border-transparent pr-5'
                                    value={sizeOption[produto.id] || ''}
                                    onChange={(e) => setSizeOption(prev => ({
                                        ...prev,
                                        [produto.id]: e.target.value
                                    }))}
                                >
                                    <option value=''></option>
                                    {TamanhosDisponiveis.map((tamanho) => {
                                        const disponivel = isTamanhoDisponivel(produto, tamanho);
                                        return (
                                            <option
                                                key={tamanho}
                                                value={tamanho}
                                                disabled={!disponivel}
                                                className={!disponivel ? 'text-gray-400 bg-gray-100' : ''}
                                            >
                                                {tamanho}
                                            </option>
                                        );
                                    })}
                                </select>

                                {/* Seta customizada */}
                                <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
                                    <IoIosArrowDown  className="w-3 h-3 text-gray-600" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='text-center mt-2'>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-grotesk text-[#1C1C1C] font-semibold capitalize'>{produto.nome}</h2>
                        <span className='text-sm sm:text-base text-gray-700 font-grotesk'>{produto.preco}</span>
                    </div>
                </div>
            ))}
        </>
    );

    return (
        <>
            <main className='w-[95%] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mx-auto'>
                {/* Seção Nossos Produtos */}
                {renderSecaoProdutos(getProdutosPorIds(secoesProdutos.nossosProdutos), "Nossos Produtos")}

                <div className='w-full h-8'></div>

                {/* Seção para ser usada quando tivermos uma variedade maior de produtos */}
                {/*renderSecaoProdutos(getProdutosPorIds(secoesProdutos.ultimosLancamentos), "Últimos Lançamentos")*/}
            </main>

            {showPopup && addedProduct && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-lg p-6 max-w-sm mx-4 shadow-2xl transform animate-scale-up'>
                        <div className='flex items-center justify-center mb-4'>
                            <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center'>
                                <MdCheck className='text-white text-2xl' />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-lg font-grotesk font-bold text-[#1C1C1C] mb-2'>
                                Produto Adicionado!
                            </h3>
                            <p className='text-gray-600 font-grotesk mb-2'>
                                <strong>{addedProduct.nome}</strong>
                            </p>
                            <p className='text-gray-500 font-grotesk text-sm mb-4'>
                                Tamanho: {addedProduct.tamanho} | {addedProduct.preco}
                            </p>
                            <button
                                onClick={() => setShowPopup(false)}
                                className='bg-[#F2A541] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-grotesk'
                            >
                                Continuar Comprando
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeatureProduct;