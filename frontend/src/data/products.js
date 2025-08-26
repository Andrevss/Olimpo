// Importe todas as imagens
import img1Front from '../assets/Images/products/1.png'
import img1Back from '../assets/Images/products/1-back.png'
{/*import img2Front from '../assets/Images/products/2.png'
import img2Back from '../assets/Images/products/2-back.png'
import img3Front from '../assets/Images/products/3.png'
import img3Back from '../assets/Images/products/3-back.png'
import img4Front from '../assets/Images/products/4.png'
import img4Back from '../assets/Images/products/4-back.png'*/}

const produtos = [
  {
    id: 1,
    slug: 'regata-hellcife',
    nome: 'Regata Hellcife',
    preco: 'R$ 85,00',
    imagemFrente: img1Front,
    imagemCostas: img1Back,
    descricao: 'Regata "Hellcife" com estampa frontal de tubarão, inspirada no calor e na cultura de Recife',
    descDetalhada: 'Esta regata carrega referências regionais marcantes da cidade do Recife. O nome "Hellcife" faz alusão ao calor característico da região, enquanto a estampa frontal traz o tubarão, símbolo emblemático das praias recifenses. Um item que une estilo, identidade e cultura local em uma peça única de streetwear.',
    tamanhosDisponiveis: ['P', 'M', 'G', 'GG']
  },
  {
    id: 2,
    slug: 'camisa-nova-colecao',
    nome: 'Camisa Nova Coleção',
    preco: 'R$ 95,00',
    imagemFrente: img1Front,
    imagemCostas: img1Back,
    descricao: 'Nova camisa da coleção 2024',
    descDetalhada: 'Descrição detalhada da nova camisa da coleção...',
    tamanhosDisponiveis: ['P', 'M', 'G', 'GG']
  },
  {
    id: 3,
    slug: 'regata-verao-2024',
    nome: 'Regata Verão 2024',
    preco: 'R$ 89,00',
    imagemFrente: img1Front,
    imagemCostas: img1Back,
    descricao: 'Regata exclusiva da coleção verão',
    descDetalhada: 'Regata perfeita para os dias quentes de verão...',
    tamanhosDisponiveis: ['PP', 'P', 'M', 'G']
  },
  {
    id: 4,
    slug: 'camiseta-streetwear',
    nome: 'Camiseta Streetwear',
    preco: 'R$ 79,00',
    imagemFrente: img1Front,
    imagemCostas: img1Back,
    descricao: 'Camiseta com design urban e moderno',
    descDetalhada: 'Camiseta que representa o estilo urbano contemporâneo...',
    tamanhosDisponiveis: ['P', 'M', 'G', 'GG']
  },
  // Adicione quantos produtos quiser aqui
];

// Configuração das seções - aqui você escolhe quais produtos aparecem onde
export const secoesProdutos = {
  nossosProdutos: [1], // IDs dos produtos que aparecem em "Nossos Produtos"
  ultimosLancamentos: [2, 4], // IDs dos produtos que aparecem em "Últimos Lançamentos"
};

// Função para buscar produtos por IDs
export const getProdutosPorIds = (ids) => {
  return ids.map(id => produtos.find(produto => produto.id === id)).filter(Boolean);
};

// Função para buscar um produto específico por ID
export const getProdutoPorId = (id) => {
  return produtos.find(produto => produto.id === id);
};

// Função para buscar produto por slug (útil para páginas de detalhes)
export const getProdutoPorSlug = (slug) => {
  return produtos.find(produto => produto.slug === slug);
};

// Exportar todos os produtos também
export default produtos;