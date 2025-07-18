import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartProvider';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Shipping = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const opcaoEntrega = watch('opcaoEntrega')

    console.log({ errors })
    const onSubmit = (data) => {
        console.log(data)
    };
    const [isEditing, setIsEditing] = useState(true)
    const [formData, setFormData] = useState({});
    const { cartItems, decreaseQuantity, increaseQuantity, removeFromCart } = useCart();

    const totalItens = cartItems.reduce((acc, item) => acc + item.quantidade, 0);
    const totalGeral = cartItems.reduce((acc, item) => {
        const preco = parseFloat(item.preco.replace("R$", "").replace(",", "."));
        return acc + preco * item.quantidade;
    }, 0);

    const handleFinalizarPedido = async () => {
        const items = cartItems.map(item => ({
            id: item.id,
            title: `${item.nome} - ${item.tamanho}`,
            quantity: item.quantidade,
            unitPrice: parseFloat(item.preco.replace('R$', '').replace(',', '.')),
        }));

        const response = await fetch("http://localhost:5000/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(items),
        });
        const data = await response.json();
        if (data?.init_point) {
            window.location.href = data.init_point;
        } else {
            console.error("Erro ao gerar link:", data);
        }
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            {isEditing ? (
                <section className='bg-[#eeeeee] flex-grow'>
                    <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14'>
                        <div className='w-full flex '>  
                            <div className='w-[67%] md-lg:w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-white p-10 shadow-sm rounded-md'>
                                        <h2 className='text-[#0D0D0D] font-bold pb-3 font-grotesk text-lg'>Informações para Entrega</h2>
                                        <form>
                                            <div className='flex flex-col gap-1 mb-2 w-full font-grotesk'>
                                                <select
                                                    id='opcaoEntrega'
                                                    name='opcaoEntrega'
                                                    className={`w-full px-3 py-2 rounded-md ${errors.opcaoEntrega ? 'outline outline-[1px] outline-[#ff4848]' : 'border border-slate-200'}`}
                                                    {...register('opcaoEntrega', { required: true })}
                                                >
                                                    <option value=''>Selecione uma opção</option>
                                                    <option value='entrega'>Entrega</option>
                                                    <option value='retirada'>Retirada</option>
                                                </select>
                                                {errors.opcaoEntrega && (
                                                    <p className="text-[#ff4848] text-xs font-semibold mt-1">
                                                        Por favor, selecione a forma de entrega
                                                    </p>
                                                )}
                                            </div>

                                            {opcaoEntrega === 'entrega' && (
                                                <>
                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='name'>Nome Completo</label>
                                                            <input
                                                                {...register('nome', { required: true, minLength: 1 })}
                                                                type='text'
                                                                className={`w-full px-3 py-2 rounded-md ${errors.nome ? 'outline outline-[1.5px] outline-[#ff4848]' : 'border border-slate-200'}`}
                                                                name='nome'
                                                                id='nome'
                                                                placeholder='Insira seu nome completo'
                                                            />
                                                            {errors?.nome?.type === 'required' && (<p className='text-[#ff4848] text-sm font-semibold'>Nome é obrigatório</p>)}
                                                            {errors?.nome?.type === 'minLength' && (<p className='text-[#ff4848] text-sm font-semibold'>Insira um nome válido</p>)}

                                                        </div>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='phone'>Telefone</label>
                                                            <input
                                                                {...register('telefone', { required: true, minLength: 11, maxLength: 11 })}
                                                                type='number'
                                                                className={`appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full px-3 py-2 rounded-md ${errors.telefone ? 'outline outline-[1.5px] outline-[#ff4848]' : 'border border-slate-200'}`}
                                                                name='telefone'
                                                                id='telefone'
                                                                placeholder='(11) 1.1111-0000'
                                                            />
                                                            {errors?.telefone?.type === 'required' && (<p className='text-[#ff4848] text-sm font-semibold'>Telefone é obrigatório</p>)}
                                                            {errors?.telefone?.type === 'minLength' && (<p className='text-[#ff4848] text-sm font-semibold'>Número inválido</p>)}
                                                            {errors?.telefone?.type === 'maxLength' && (<p className='text-[#ff4848] text-sm font-semibold'>Número inválido</p>)}

                                                        </div>
                                                    </section>

                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='rua'>Rua</label>
                                                            <input
                                                                {...register('rua', { required: true })}
                                                                type='text'
                                                                className={`w-full px-3 py-2 rounded-md ${errors.rua ? 'outline outline-[1.5px] outline-[#ff4848]' : 'border border-slate-200'}`}
                                                                name='rua'
                                                                id='rua'
                                                                placeholder='Insira sua rua'
                                                            />
                                                            {errors?.rua?.type === 'required' && (<p className='text-[#ff4848] text-sm font-semibold'>Rua é obrigatório</p>)}
                                                        </div>
                                                        <div className='flex flex-col gap-1 mb-2'>
                                                            <label htmlFor='numero'>Número</label>
                                                            <input
                                                                {...register('numero', { required: true })}
                                                                type='number'
                                                                className={`appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full px-3 py-2 rounded-md ${errors.numero ? 'outline outline-[1.5px] outline-[#ff4848]' : 'border border-slate-200'}`}
                                                                name='numero'
                                                                id='numero'
                                                                placeholder='Número'
                                                            />
                                                            {errors?.numero?.type === 'required' && (<p className='text-[#ff4848] text-sm font-semibold'>Número é obrigatório</p>)}
                                                        </div>

                                                    </section>
                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='bairro'>Bairro</label>
                                                            <input
                                                                {...register('bairro', { required: true })}
                                                                type='text'
                                                                className={`w-full px-3 py-2 rounded-md ${errors.bairro ? 'outline outline-[1.5px] outline-[#ff4848]' : 'border border-slate-200'}`}
                                                                name='bairro'
                                                                id='bairro'
                                                                placeholder='Insira seu bairro'
                                                            />
                                                            {errors?.bairro?.type === 'required' && (<p className='text-[#ff4848] text-sm font-semibold'>Bairro é obrigatório</p>)}
                                                        </div>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='cidade'>Cidade</label>
                                                            <input
                                                                {...register('cidade', { required: true })}
                                                                type='text'
                                                                className={`w-full px-3 py-2 rounded-md ${errors.cidade ? 'outline outline-[1.5px] outline-[#ff4848]' : 'border border-slate-200'}`}
                                                                name='cidade'
                                                                id='cidade'
                                                                placeholder='Insira sua Cidade'
                                                            />
                                                            {errors?.cidade?.type === 'required' && (<p className='text-[#ff4848] text-sm font-semibold'>Cidade é obrigatório</p>)}
                                                        </div>
                                                    </section>

                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='complemento'>Complemento</label>
                                                            <input
                                                                {...register('complemento')}
                                                                type='text'
                                                                className={`w-full px-3 py-2 rounded-md border border-slate-200`}
                                                                name='complemento'
                                                                id='complemento'
                                                                placeholder='Insira detalhes adicionais a sua entrega'
                                                            />
                                                        </div>
                                                    </section>

                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <button
                                                                type="button"
                                                                onClick={handleSubmit((data) => {
                                                                    onSubmit(data);
                                                                    setFormData(data);
                                                                    setIsEditing(false);
                                                                })}
                                                                className='px-3 py-[6px] rounded-sm hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'
                                                            >
                                                                {isEditing ? 'Salvar' : 'Editar'}
                                                            </button>
                                                        </div>
                                                    </section>
                                                </>
                                            )}
                                            {opcaoEntrega === 'retirada' && (
                                                <p className="text-sm italic text-gray-600 font-grotesk">*Retirada será feita em ponto físico após confirmação do pedido. Em caso de dúvidas, consulte nossa <Link to="/Politicas" className='italic underline'><strong>política de frete</strong></Link>.</p>
                                            )}

                                        </form>
                                    </div>
                                </div>
                            </div>
                            {cartItems.length > 0 && (
                                <section className='w-[33%] md-lg:w-full '>{/* resumo do pedido */}
                                    <div className='pl-3 md-lg:pl-0 md-lg:mt-5'>
                                        <div className='bg-white font-grotesk text-[#0D0D0D] flex flex-col p-3 rounded-md '>
                                            <h2 className='text-lg font-bold'>Resumo do Pedido</h2>
                                            <div className='flex justify-between mt-2'>
                                                <span>Produtos</span>
                                                <span>{totalItens}</span>
                                            </div>
                                            <div className='flex justify-between mt-2'>
                                                <span>Total</span>
                                                <span>R$ {totalGeral.toFixed(2)}</span>
                                            </div>
                                            <button
                                                onClick={handleSubmit((data) => {
                                                    onSubmit(data);
                                                    handleFinalizarPedido();
                                                })}
                                                className='px-5 py-[6px] mt-3 rounded-sm hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'
                                            >Finalizar Pedido</button>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                <section className='bg-[#eeeeee]'> {/* informações da entrega após preenchimento */}
                    <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14'>
                        <div className='w-full flex flex-wrap'>
                            <div className='w-[67%] md-lg:w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-white p-10 shadow-sm rounded-md'>
                                        <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='nome'>Nome</label>
                                                <p className="">{formData.nome}</p>
                                            </div>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='telefone'>Telefone</label>
                                                <p className="">{formData.telefone}</p>
                                            </div>
                                        </section>

                                        <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='rua'>Rua</label>
                                                <p className="">{formData.rua}</p>
                                            </div>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='bairro'>Bairro</label>
                                                <p className="">{formData.bairro}</p>
                                            </div>

                                        </section>
                                        <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='cidade'>Cidade</label>
                                                <p className="">{formData.cidade}</p>
                                            </div>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='numero'>Número</label>
                                                <p>{formData.numero}</p>
                                            </div>
                                        </section>
                                        {formData.complemento && (
                                            <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label className="font-bold" htmlFor='complemento'>Complemento</label>
                                                    <p className="">{formData.complemento}</p>
                                                </div>
                                            </section>
                                        )}
                                        <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEditing(!isEditing)}
                                                    className='px-3 py-[6px] rounded-sm hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'
                                                >
                                                    {isEditing ? 'Salvar' : 'Editar'}
                                                </button>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            {cartItems.length > 0 && (
                                <section className='w-[33%] md-lg:w-full'>{/* resumo do pedido */}
                                    <div className='pl-3 md-lg:pl-0 md-lg:mt-5'>
                                        <div className='bg-white font-grotesk text-[#0D0D0D] flex flex-col p-3'>
                                            <h2 className='text-x1 font-extrabold'>Resumo do Pedido</h2>
                                            <div className='flex justify-between mt-2'>
                                                <span>Produtos</span>
                                                <span>{totalItens}</span>
                                            </div>
                                            <div className='flex justify-between mt-2'>
                                                <span>Total</span>
                                                <span>R$ {totalGeral.toFixed(2)}</span>
                                            </div>
                                            <button
                                                type='submit'
                                                onClick={handleSubmit((data) => {
                                                    onSubmit(data);
                                                    handleFinalizarPedido();
                                                })}
                                                className='px-5 py-[6px] mt-3 rounded-sm font-extrabold hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'
                                            >Finalizar Pedido</button>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </section>
            )}
            {cartItems.length > 0 && (
                <section className='bg-[#eeeeee]'>
                    <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto pb-10'>
                        <div className='w-full flex flex-wrap'>
                            <div className='w-[67%] md-lg:w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-white p-10 shadow-sm rounded-md'>
                                        <div className="flex justify-between items-center pb-3">
                                            <h2 className='text-[#0D0D0D] text-lg font-bold font-grotesk'>Informações da Compra</h2>
                                        </div>
                                        <ul className='font-grotesk'>
                                            {cartItems.map((item, index) => (
                                                <div className="flex justify-between items-center w-full ">
                                                    <div className="flex items-center">
                                                        <img src={`/Images/products/${item.imagemFrente}`} alt={item.nome} className="w-[150px]" />
                                                        <li className="flex flex-col justify-center gap-2">
                                                            <strong>{item.nome} | Tamanho: {item.tamanho}</strong>
                                                            {item.preco}
                                                            <span onClick={() => removeFromCart(item.id, item.tamanho)} className="text-sm text-red-600 font-semibold cursor-pointer hover:underline mt-4">
                                                                Remover
                                                            </span>
                                                        </li>

                                                    </div>

                                                    <div className="flex items-center gap-2 cursor-pointer">
                                                        <button
                                                            onClick={() => decreaseQuantity(item.id, item.tamanho)}
                                                            className="px-3 py-1 bg-[#d6932e] hover:bg-[#a86f20] text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="font-semibold w-6 text-center">{item.quantidade}</span>
                                                        <button
                                                            onClick={() => increaseQuantity(item.id, item.tamanho)}
                                                            className="px-3 py-1 bg-[#d6932e] hover:bg-[#a86f20] text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                                                        >
                                                            +
                                                        </button>

                                                    </div>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <Footer />
        </div>
    );
};

export default Shipping;