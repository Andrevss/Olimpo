# Olimpo - E-commerce de Streetwear

Um e-commerce moderno e responsivo desenvolvido em React, especializado em produtos de streetwear com foco na cultura pernambucana.

## Demonstração

[https://olimpo081.vercel.app/]

## Funcionalidades

- **Catálogo de produtos** com visualização de frente e verso
- **Sistema de carrinho** completo com persistência
- **Seleção de tamanhos** com indicação de disponibilidade
- **Design responsivo** otimizado para mobile e desktop
- **Carrossel de banners** promocionais
- **Integração WhatsApp** para finalização de pedidos
- **Navegação intuitiva** com rotas dinâmicas

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces
- **React Router** - Roteamento de páginas
- **Tailwind CSS** - Framework CSS utilitário
- **React Multi Carousel** - Componente de carousel
- **React Icons** - Biblioteca de ícones
- **Context API** - Gerenciamento de estado global

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Banner.jsx
├── pages/              # Páginas da aplicação
│   ├── Home.jsx
│   ├── Details.jsx
│   └── Cart.jsx
├── context/            # Context providers
│   └── CartProvider.jsx
├── data/               # Dados estáticos
│   └── products.js
├── assets/             # Recursos estáticos
│   └── images/
└── styles/             # Arquivos de estilo
```

## ⚡ Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/Andrevss/Olimpo.git
cd Olimpo
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm start
```

4. Abra [http://localhost:3000] no navegador

## Funcionalidades Principais

### Sistema de Carrinho
- Adicionar/remover produtos
- Seleção de tamanhos
- Cálculo automático de totais
- Persistência entre sessões

### Catálogo de Produtos
- Visualização com hover de imagens
- Filtros de tamanho disponível
- Páginas individuais de produto
- Design responsivo

### Integração WhatsApp
- Formatação automática de pedidos
- Envio direto para WhatsApp Business
- Dados completos do cliente e produtos

## Deploy

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch main

## Próximas Funcionalidades

- [ ] Sistema de busca de produtos
- [ ] Múltiplos métodos de pagamento
- [ ] Painel administrativo

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

##  Desenvolvedor

**André Victor**
- GitHub: [(https://github.com/Andrevss)]
- LinkedIn: [(https://www.linkedin.com/in/andrevs-silva/)]

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!