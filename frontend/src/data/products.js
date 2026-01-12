// Importe todas as imagens
import img1Front from '../assets/Images/products/1.png'
import img1Back from '../assets/Images/products/1-back.png'
import pantera from '../assets/Images/products/Pantera.png'
import panteraBack from '../assets/Images/products/Pantera-back.png'
import r10 from '../assets/Images/products/R10.png'
import r10Back from '../assets/Images/products/R10-back.png'

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
    tamanhosDisponiveis: []
  },
  {
    id: 2,
    slug: 'oversized-pantera',
    nome: 'Oversized Pantera Negra',
    preco: 'R$ 99,90',
    imagemFrente: pantera,
    imagemCostas: panteraBack,
    descricao: 'Camisa Oversized “Pantera Negra”, símbolo de força, identidade e resistência, relançada com uma nova abordagem visual.',
    descDetalhada: 'A Pantera Negra retorna em uma versão ainda mais original e carregada de significado. Mais do que estética, essa camisa carrega a ideia de que moda também é resistência e uma forma de expressão, afirmação e orgulho. Pensada para quem entende que vestir é comunicar, a Oversized Pantera Negra traduz atitude, identidade e presença em cada detalhe.',
    tamanhosDisponiveis: [, 'M', 'G', 'GG']
  },
  {
    id: 3,
    slug: 'oversized-ronaldinho',
    nome: 'Oversized Ronaldinho Gaúcho',
    preco: 'R$ 99,90',
    imagemFrente: r10,
    imagemCostas: r10Back,
    descricao: 'Camisa Oversized “Ronaldinho Gaúcho”, celebrando a arte e a conexão da OLIMPO com o esporte e a cultura de rua.',
    descDetalhada: 'Inspirada na genialidade de Ronaldinho Gaúcho, esta camisa representa a liberdade criativa, o improviso e a alegria que o esporte carrega. Sem seguir uma referência específica, a peça nasce do encontro entre futebol, rua e estilo urbano, traduzindo a essência de um dos maiores ícones do esporte mundial em uma peça de moda autêntica e cheia de personalidade.',
    tamanhosDisponiveis: ['P', 'M', 'G']
  },
];

// Configuração das seções - aqui você escolhe quais produtos aparecem onde
export const secoesProdutos = {
  nossosProdutos: [1, 2, 3], // IDs dos produtos que aparecem em "Nossos Produtos"
  ultimosLancamentos: [2, 3], //IDs dos produtos que aparecem em "Últimos Lançamentos"
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