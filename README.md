#  Node.js Backend com TypeScript, Prisma e Fastify

Este projeto é um **backend em Node.js com TypeScript**, desenvolvido para **praticar e aplicar conceitos avançados de arquitetura limpa e princípios SOLID**, integrando persistência com **PostgreSQL via Prisma e Docker** e exposição de API HTTP com **Fastify**.

---

##  Funcionalidades

-  Arquitetura limpa com separação de camadas (Controller, Service, Repository, Domain).  
-  Aplicação de **princípios SOLID** (SRP, DIP, etc.)  
-  Persistência de dados com **PostgreSQL** usando **Prisma ORM**.  
-  Banco de dados em container via **Docker** para ambiente isolado e replicável.  
-  Exposição de API RESTful com **Fastify**.  
-  Criação, leitura e manipulação de pedidos e produtos.  

---

##  Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-20232A?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-0CAFFF?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

-  **Node.js** – runtime do backend  
-  **TypeScript** – tipagem estática e segurança de código  
-  **Fastify** – framework HTTP rápido e leve  
-  **Prisma ORM** – mapeamento e persistência de dados  
-  **PostgreSQL** – banco de dados relacional  
-  **Docker** – containerização do banco de dados

---

##  Fluxo de Funcionamento

1. **Recepção de requisições**  
   - Fastify recebe as requisições HTTP e direciona para os **controllers**.  

2. **Lógica de negócio**  
   - Controllers chamam os **services**, que aplicam a lógica do domínio e seguem **princípios SOLID**.  

3. **Persistência de dados**  
   - Services usam os **repositories** para ler/gravar dados no **PostgreSQL** via **Prisma**.  
 

---
## Consultar End Points

Baixe postman ou insonminia:

Postman: https://dl.pstmn.io/download/latest/win64

Insonminia: https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app&source=website


Rotas da API

A API foi implantada no Render e pode ser acessada pela URL base:

```bash
https://system-orders-api.onrender.com
```

## PRODUCTS
🔹 Listar produto por ID

```bash
https://system-orders-api.onrender.com/products/:id
```

🔹 Criar um novo produto

```bash
https://system-orders-api.onrender.com/products
```

Body (JSON):

```bash
{
  "nome": "Teclado Mecânico RGB",
  "preco": 249.90,
  "estoque": 15
}
```

Resposta esperada:
```bash
{
  "id": "1",
  "nome": "Teclado Mecânico RGB",
  "preco": 249.90,
  "estoque": 15,
  "data": "2025-10-17T12:00:00.000Z"
}
```


## ORDERS
🔹 Listar pedido por ID

```bash
https://system-orders-api.onrender.com/orders/:id
```

🔹 Criar um novo pedido
```bash
https://system-orders-api.onrender.com/orders
```

Body (JSON):

```bash
[
    {
    "productId": 1,
    "quantidade": 2
    },
    {
    "productId": 1,
    "quantidade": 2
    }

]
```

Resposta esperada:

```bash
{
    "id": 1,
    "total": "80",
    "data_pedido": "2025-10-17T13:49:01.530Z",
    "produtos": [
        {
            "id": 1,
            "produto_Id": 1,
            "pedidos_Id": 1,
            "quantidade": 1,
            "preco_Unitario": "40",
            "produtos": {
                "id": 1,
                "nome": "xxxx",
                "preco": "xx.xx",
                "estoque": 2
            }
        },
        {
            "id": 1,
            "produto_Id": 1,
            "pedidos_Id": 1,
            "quantidade": 2,
            "preco_Unitario": "x",
            "produtos": {
                "id": 1,
                "nome": "xxxx",
                "preco": "xx.xx",
                "estoque": 2
            }
        }
    ]
}
```
Resumo de Endpoints

```bash
GET  /products/:id     -> Retorna um produto pelo ID
POST /products         -> Cria um novo produto
GET  /orders/:id       -> Retorna um pedido pelo ID
POST /orders           -> Cria um novo pedido
```

## Como Rodar o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Inicialize o banco de dados via Docker
docker-compose up -d

# Rode as migrações do Prisma
npx prisma migrate dev

# Inicie o servidor em modo desenvolvimento
npm run dev

# Execute os testes
npm run test

