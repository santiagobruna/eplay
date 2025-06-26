# 🎮 E-commerce de Jogos Digital

O eplay é um e-commerce front-end focado em jogos digitais. Aqui, o usuário pode navegar por categorias variadas de jogos como promoções, lançamentos, ação, RPG e muito mais além de conferir os detalhes de cada jogo individualmente.

O site também permite simular o processo de compra, onde o usuário preenche dados de pagamento, entrega e produtos, e a aplicação envia essas informações para uma API fake que valida e responde com uma confirmação do pedido.

Tudo isso com uma experiência fluida e moderna, pensada para quem curte videogame e quer uma plataforma simples, bonita e funcional para encontrar e comprar seus jogos favoritos.

## Funcionalidades:

- Catálogo completo de jogos por categoria:
  - Navegue facilmente entre jogos em destaque, promoções, lançamentos, ação, RPG, esportes, simulação, luta e muito mais.

- Detalhes completos do jogo:
  - Veja informações específicas de cada jogo, incluindo preço, descrição e imagem, para ajudar na escolha.

- Simulação de compra completa:
  - Preencha dados de cobrança, entrega e pagamento (cartão com parcelas) e finalize a compra enviando os dados para a API fake.

- Hooks automáticos do RTK Query:
  - Consumo otimizado das APIs com cache e refetch automáticos, garantindo dados atualizados e melhor performance.

- Gerenciamento de estado eficiente:
  - Estado global controlado pelo Redux Toolkit para garantir que informações importantes, como carrinho e status da compra, estejam sincronizadas.

- Interface responsiva e intuitiva:
  - Layout que se adapta para diferentes tamanhos de tela, garantindo uma boa experiência tanto no desktop quanto no mobile.

- Tipagem robusta com TypeScript:
  - Segurança e previsibilidade com tipos definidos para jogos, payload de compra e respostas da API.

### Tecnologias utilizadas:
- React
- TypeScript
- Redux Toolkit Query (RTK Query)
- Vercel (API Fake)
- Styled Components.
- React Router.
  
## 📸 Demonstração
![e-play](https://github.com/user-attachments/assets/881e2c75-d9c1-4f49-8c79-e7e1a310927e)

## 📦 Como Rodar o Projeto:

1. Clone o repositório:
``` 
git clone https://github.com/santiagobruna/eplay.git

````
2. Acesse a pasta do projeto:
``` 
cd eplay

````
3. Instale as dependências:
``` 
npm install
# ou
yarn install

````
4. Execute o projeto:
``` 
npm start

````
## Acesse o projeto
Clicando aqui: https://eplay-tan.vercel.app/
