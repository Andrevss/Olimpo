import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartProvider';

const Shipping = () => {

    const [deliveryOption, setDeliveryOption] = useState('');
    const [state, setState] = useState({
        nome: '',
        telefone: '',
        rua: '',
        bairro: '',
        cidade: '',
        numero: '',
    })
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const [isEditing, setIsEditing] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!state.nome) newErrors.nome = true;
        if (!state.telefone) newErrors.telefone = true;
        if (!state.rua) newErrors.rua = true;
        if (!state.bairro) newErrors.bairro = true;
        if (!state.cidade) newErrors.cidade = true;
        if (!state.numero) newErrors.numero = true;
        if (deliveryOption === 'entrega' && Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsEditing(false);
    };
    const [errors, setErrors] = useState({});
    const { cartItems } = useCart();

    const totalItens = cartItems.reduce((acc, item) => acc + item.quantidade, 0);
    const totalGeral = cartItems.reduce((acc, item) => {
        const preco = parseFloat(item.preco.replace("R$", "").replace(",", "."));
        return acc + preco * item.quantidade;
    }, 0);

    const gerarMensagemWhatsApp = (cartItems, state, deliveryOption) => {
        let mensagem = "*Resumo do Pedido:*%0A";

        cartItems.forEach(item => {
            mensagem += `• ${item.nome} - ${item.preco} - Tam: ${item.tamanho} - Qtde: ${item.quantidade}%0A`;
        });

        const total = cartItems.reduce((acc, item) => {
            const preco = parseFloat(item.preco.replace("R$ ", "").replace(",", "."));
            return acc + preco * item.quantidade;
        }, 0);

        mensagem += `%0A*Total:* R$ ${total.toFixed(2).replace(".", ",")}%0A%0A`;

        mensagem += "*Dados do Cliente:*%0A";
        mensagem += `• Nome: ${state.nome}%0A`;
        mensagem += `• Telefone: ${state.telefone}%0A`;

        if (deliveryOption === "entrega") {
            mensagem += `• Endereço: ${state.rua}, Nº ${state.numero}, ${state.bairro}, ${state.cidade}%0A`;
            mensagem += `• Forma de entrega: Entrega no endereço%0A`;
        } else {
            mensagem += `• Forma de entrega: Retirada na loja%0A`;
        }

        return mensagem;
    };
    const handleFinalizarPedido = () => {
        const mensagem = gerarMensagemWhatsApp(cartItems, state, deliveryOption);
        const telefone = "558197146120"; 
        const url = `https://wa.me/${telefone}?text=${mensagem}`;

        window.open(url, "_blank");
    };



    return (
        <div>
            <Header />
            {isEditing ? (
                <section className='bg-[#eeeeee]'>
                    <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14'>
                        <div className='w-full flex flex-wrap'>
                            <div className='w-[67%] md-lg:w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-white p-10 shadow-sm rounded-md'>
                                        <h2 className='text-[#0D0D0D] font-bold pb-3 font-grotesk'>Informações para Entrega</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className='flex flex-col gap-1 mb-2 w-full font-grotesk'>
                                                <select
                                                    id='deliveryOption'
                                                    name='deliveryOption'
                                                    className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-600 rounded-md'
                                                    value={deliveryOption}
                                                    onChange={(e) => setDeliveryOption(e.target.value)}
                                                >
                                                    <option value=''>Selecione uma opção</option>
                                                    <option value='entrega'>Entrega</option>
                                                    <option value='retirada'>Retirada</option>
                                                </select>
                                            </div>

                                            {deliveryOption === 'entrega' && (
                                                <>
                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='name'>Nome</label>
                                                            <input
                                                                onChange={inputHandle}
                                                                value={state.nome}
                                                                type='text'
                                                                className={`w-full px-3 py-2 border ${errors.nome ? 'border-red-600' : 'border-green-600'} border-slate-200 outline-none focus:border-green-600 rounded-md`}
                                                                name='nome'
                                                                id='nome'
                                                                placeholder='Insira seu nome '
                                                            />
                                                        </div>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='phone'>Telefone</label>
                                                            <input
                                                                onChange={inputHandle}
                                                                value={state.telefone}
                                                                type='text'
                                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-600 rounded-md'
                                                                name='telefone'
                                                                id='telefone'
                                                                placeholder='(11) 1.1111-0000'
                                                            />
                                                        </div>
                                                    </section>

                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='rua'>Rua</label>
                                                            <input
                                                                onChange={inputHandle}
                                                                value={state.rua}
                                                                type='text'
                                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-600 rounded-md'
                                                                name='rua'
                                                                id='rua'
                                                                placeholder='Insira sua rua'
                                                            />
                                                        </div>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='bairro'>Bairro</label>
                                                            <input
                                                                onChange={inputHandle}
                                                                value={state.bairro}
                                                                type='text'
                                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-600 rounded-md'
                                                                name='bairro'
                                                                id='bairro'
                                                                placeholder='Insira seu bairro'
                                                            />
                                                        </div>

                                                    </section>
                                                    <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                                        <div className='flex flex-col gap-1 mb-2 w-full'>
                                                            <label htmlFor='cidade'>Cidade</label>
                                                            <input
                                                                onChange={inputHandle}
                                                                value={state.cidade}
                                                                type='text'
                                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-600 rounded-md'
                                                                name='cidade'
                                                                id='cidade'
                                                                placeholder='Insira sua Cidade'
                                                            />
                                                        </div>
                                                        <div className='flex flex-col gap-1 mb-2'>
                                                            <label htmlFor='numero'>Número</label>
                                                            <input
                                                                onChange={inputHandle}
                                                                value={state.numero}
                                                                type='text'
                                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-600 rounded-md'
                                                                name='numero'
                                                                id='numero'
                                                                placeholder='Número'
                                                            />
                                                        </div>
                                                    </section>
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
                                                </>
                                            )}
                                            {deliveryOption === 'retirada' && (
                                                <p className="text-sm italic text-gray-600 font-grotesk">* Retirada será feita na loja física após confirmação do pedido.</p>
                                            )}

                                        </form>
                                    </div>
                                </div>
                            </div>
                            {cartItems.length > 0 && (
                                <section className='w-[33%] md-lg:w-full'>{/* resumo do pedido */}
                                    <div className='pl-3 md-lg:pl-0 md-lg:mt-5'>
                                        <div className='bg-white font-grotesk text-[#0D0D0D] flex flex-col p-3'>
                                            <h2 className='text-x1 font-bold'>Resumo do Pedido</h2>
                                            <div className='flex justify-between mt-2'>
                                                <span>Produtos</span>
                                                <span>{totalItens}</span>
                                            </div>
                                            <div className='flex justify-between mt-2'>
                                                <span>Total</span>
                                                <span>R$ {totalGeral.toFixed(2)}</span>
                                            </div>
                                            <button onClick={handleFinalizarPedido} className='px-5 py-[6px] mt-3 rounded-sm hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'>Finalizar Pedido</button>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                <section className='bg-[#eeeeee]'>
                    <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-14'>
                        <div className='w-full flex flex-wrap'>
                            <div className='w-[67%] md-lg:w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className='bg-white p-10 shadow-sm rounded-md'>{/* informações da entrega após preenchimento */}
                                        <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='name'>Nome</label>
                                                <p className="">{state.nome}</p>
                                            </div>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='phone'>Telefone</label>
                                                <p className="">{state.telefone}</p>
                                            </div>
                                        </section>

                                        <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='rua'>Rua</label>
                                                <p className="">{state.rua}</p>
                                            </div>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='bairro'>Bairro</label>
                                                <p className="">{state.bairro}</p>
                                            </div>

                                        </section>
                                        <section className='flex md:flex-col md:gap-2 w-full gap-5 text-[#0D0D0D] font-grotesk'>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='cidade'>Cidade</label>
                                                <p className="">{state.cidade}</p>
                                            </div>
                                            <div className='flex flex-col gap-1 mb-2 w-full'>
                                                <label className="font-bold" htmlFor='numero'>Número</label>
                                                <p>{state.numero}</p>
                                            </div>
                                        </section>
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
                                            <button onClick={handleFinalizarPedido} className='px-5 py-[6px] mt-3 rounded-sm font-extrabold hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'>Finalizar Pedido</button>
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
                                        <h2 className='text-[#0D0D0D] font-bold pb-3 font-grotesk'>Informações da Compra</h2>
                                        <ul className='font-grotesk'>
                                            {cartItems.map((item, index) => (
                                                <div className='flex flex-wrap gap-1 mb-2 w-full'>
                                                    <img src={`/Images/products/${item.imagemFrente}`} alt={item.nome} className="w-[150px]" />
                                                    <li className='flex flex-col justify-center px-10 gap-1' key={index}>
                                                        <strong> Camisa {item.nome}</strong> {item.preco} - Tamanho: {item.tamanho} - Quantidade: {item.quantidade}
                                                    </li>
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