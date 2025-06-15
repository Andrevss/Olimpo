import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";


const FeatureProduct = () => {
    const produtos = [
        { id: 1, nome: 'romário', preco: 'R$ 90,90', imagemFrente: '1.png', imagemCostas: '1-back.png' },
        { id: 2, nome: 'neymar', preco: 'R$ 89,90', imagemFrente: '2.png', imagemCostas: '2-back.png' },

    ];


    return (
        <main className='w-[90%] flex flex-wrap justify-center gap-8 mx-auto'>
            <div className='w-full text-center font-grotesk text-3xl font-bold text-[#1C1C1C] pb-[10px]'>
                <h1 className='relative inline-block after:block after:w-[100px] after:h-[2px] after:bg-[#F2A541] after:mt-1 after:mx-auto'>
                    Nossos Produtos
                </h1>
            </div>

            {produtos.map((produto, i) => (
                <div key={i} className="flex flex-col items-center w-[350px]">
                    <div className='relative group w-full h-auto overflow-hidden'>
                        {/* Imagem da frente */}
                        <img
                            className='w-full h-full cursor-pointer object-contain absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0'
                            src={`/Images/products/${produto.imagemFrente}`}
                            alt=''
                        />

                        {/* Imagem das costas */}
                        <img
                            className='w-full h-full cursor-pointer object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100'
                            src={`/Images/products/${produto.imagemCostas}`}
                            alt=''
                        />

                        {/* Botão do carrinho */}
                        <ul className='flex justify-center items-center gap-2 absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:bottom-3 group-hover:opacity-100'>
                            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#F2A541] hover:text-white hover:rotate-[720deg] transition-all'>
                                <MdOutlineShoppingCart />
                            </li>
                        </ul>
                    </div>

                    {/* Nome e preço abaixo da imagem */}
                    <div className='text-center'>
                        <h2 className='font-grotesk text-[#1C1C1C] font-semibold capitalize'>{produto.nome}</h2>
                        <span className='text-gray-700 font-grotesk'>{produto.preco}</span>
                    </div>
                </div>
            ))}
        </main>

    );
};

export default FeatureProduct;