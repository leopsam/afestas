# AFestas

## Descrição
O AFestas é um sistema desenvolvido para a empresa AFestas, cuja visão é entregar o melhor evento para os clientes, como aniversários, festas de 15 anos, casamentos, entre outros. O sistema facilita a comunicação entre o organizador e o cliente, mostrando todos os temas de festas disponíveis e relatos de clientes satisfeitos.

## Funcionalidades
- Facilidade de comunicação entre organizador e cliente
- Exibição de temas de festas disponíveis
- Relatos de clientes satisfeitos

## Tecnologias Utilizadas
- **Linguagem:** TypeScript
- **Contêineres:** Docker
- **ORM:** Prisma
- **Testes:** Jest, Supertest
- **Front-end:** React
- **Back-end:** Node.js, Express
- **Banco de Dados:** Postgres, SQL
- **Cache:** Redis
- **Integração e Entrega Contínua:** CI/CD
- **Serviços em Nuvem:** AWS
- **Outras:** várias outras tecnologias

## Instalação
Siga as instruções abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
    ```bash
    git clone https://github.com/leopsam/afestas.git
    cd afestas
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    POSTGRES_USERNAME=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_DB=afesta
    JWT_SECRET=top_secret
    PORT=4000
    DATABASE_URL=postgresql://postgres:postgres@postgres:5432/afesta?schema=public
    ```

4. Inicie a aplicação:
    ```bash
    npm start
    ```

## Licença
Este projeto está licenciado sob a Mozilla Public License Version 2.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Status do Projeto
Este projeto está em desenvolvimento.

Link para o Projeto: [https://github.com/leopsam/afestas](https://github.com/leopsam/afestas)
