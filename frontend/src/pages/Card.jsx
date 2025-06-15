import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Card = () => {

    const card_products = [1, 2]

    return (
        <div>
            <Header />
            <section className="bg-[#eeeeee]">
  <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
    <h2 className="text-xl font-bold font-grotesk mb-4">Dados para Entrega</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input placeholder="Nome" className="border p-3 rounded w-full" />
      <input placeholder="Sobrenome" className="border p-3 rounded w-full" />
      <input placeholder="Telefone" className="border p-3 rounded w-full md:col-span-2" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <input placeholder="CEP" className="border p-3 rounded w-full" />
      <input placeholder="Bairro" className="border p-3 rounded w-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
      <input placeholder="Rua" className="border p-3 rounded w-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <input placeholder="Cidade" className="border p-3 rounded w-full md:col-span-2" />
      <input placeholder="Número" className="border p-3 rounded w-full" />
    </div>
  </div>
</section>

            <Footer />
        </div>
    );
};

export default Card;