import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FcCheckmark } from "react-icons/fc";
import { useCart } from '../context/CartProvider';

const Approved = () => {

  const { setCartItem } = useCart();

  useEffect(() => {
    localStorage.removeItem('cart'); // limpa o localStorage
    setCartItem([]); // limpa o estado global do carrinho
  }, []);

  return (
    <div className='min-h-screen flex flex-col font-grotesk'>
      <Header />
      <section className= 'mx-auto py-14 flex-grow'>
        <div className='w-full flex flex-row justify-center'>
            <div className='md:flex md:flex-col bg-white p-10'>
              <div className='flex text-center rounded-md align-middle mb-3'>
                <span className='mr-2 text-[24px] text-center justify-center'><FcCheckmark /></span>
                <h1 className='text-2xl font-bold text-[#F2A541] uppercase'>Pedido Aprovado</h1>
              </div>
              <div className='md:flex md:flex-col flex flex-col items-center'>
                <p className='text-lg text-[#666666] mb-1'>
                  Seu pagamento foi aprovado! Estamos preparando seu pedido. 
                  <br></br>
                  Você receberá atualizações por e-mail em breve.
                  </p>
                <button className='px-5 py-[6px] mt-3 rounded-sm hover:shadow-[#F2A541] hover:shadow-lg bg-black text-[#F2A541]'>Voltar para tela inicial</button>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Approved