#  Node.js Backend com TypeScript, Prisma e Fastify

Este projeto é um **backend em Node.js com TypeScript**, desenvolvido para **praticar e aplicar conceitos avançados de arquitetura limpa e princípios SOLID**, integrando persistência com **PostgreSQL via Prisma e Docker**, testes unitários com **Vitest**, e exposição de API HTTP com **Fastify**.

---

##  Funcionalidades

-  Arquitetura limpa com separação de camadas (Controller, Service, Repository, Domain).  
-  Aplicação de **princípios SOLID** (SRP, DIP, etc.)  
-  Persistência de dados com **PostgreSQL** usando **Prisma ORM**.  
-  Banco de dados em container via **Docker** para ambiente isolado e replicável.  
-  Exposição de API RESTful com **Fastify**.  
-  Testes unitários utilizando **Vitest**.  
-  Criação, leitura e manipulação de pedidos e produtos.  

---

##  Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-20232A?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-0CAFFF?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-661AE6?style=for-the-badge)

-  **Node.js** – runtime do backend  
-  **TypeScript** – tipagem estática e segurança de código  
-  **Fastify** – framework HTTP rápido e leve  
-  **Prisma ORM** – mapeamento e persistência de dados  
-  **PostgreSQL** – banco de dados relacional  
-  **Docker** – containerização do banco de dados  
-  **Vitest** – testes unitários  

---

##  Fluxo de Funcionamento

1. **Recepção de requisições**  
   - Fastify recebe as requisições HTTP e direciona para os **controllers**.  

2. **Lógica de negócio**  
   - Controllers chamam os **services**, que aplicam a lógica do domínio e seguem **princípios SOLID**.  

3. **Persistência de dados**  
   - Services usam os **repositories** para ler/gravar dados no **PostgreSQL** via **Prisma**.  

4. **Testes unitários**  
   - Funções críticas são testadas com **Vitest** para garantir qualidade e confiabilidade.  

---

## 🚀 Como Rodar o Projeto

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

