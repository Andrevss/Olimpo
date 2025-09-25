// Importe todas as imagens
import img1Front from '../assets/Images/products/1.png'
import img1Back from '../assets/Images/products/1-back.png'

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
    tamanhosDisponiveis: ['P', 'M', 'G']
  },
];

// Configuração das seções - aqui você escolhe quais produtos aparecem onde
export const secoesProdutos = {
  nossosProdutos: [1], // IDs dos produtos que aparecem em "Nossos Produtos"
  // ultimosLancamentos: [2, 4], IDs dos produtos que aparecem em "Últimos Lançamentos"
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