# 🚀 API Express.js com TypeScript

Este projeto é uma API RESTful desenvolvida com [Express.js](https://expressjs.com/) e [TypeScript](https://www.typescriptlang.org/), com estrutura modular e pronta para escalabilidade.

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev) (para desenvolvimento)
- [dotenv](https://www.npmjs.com/package/dotenv) (variáveis de ambiente)

## 📁 Estrutura de Pastas

```
src/
├── controllers/     # Lógica dos endpoints
├── routes/          # Definições de rotas
├── services/        # Regras de negócio
├── connection/      # Configurações de conexão com o banco
├── utils/           # Funções utilitárias
├── types/           # Tipagens personalizadas
└── index.ts         # Ponto de entrada da aplicação
```

## 🚀 Instalação

```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/sua-api.git](https://github.com/ByteCarlos/bonsae-import-manager-api.git)

# Acesse a pasta do projeto
cd bonsae-import-manager-api

# Instale as dependências
npm install
```

## ▶️ Executando o Projeto

### Ambiente de Desenvolvimento

```bash
npm run dev
```

### Ambiente de Produção

```bash
npm run build
npm start
```

## 🛠️ Scripts disponíveis

```bash
npm run dev       # Inicia o servidor com ts-node-dev
npm run build     # Compila o projeto para JavaScript
npm start         # Executa o código compilado
```

## 📌 Requisitos

- Node.js v18+
- npm

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis:

```
PORT=3333
MONGO_URL=mongodb://admin:pass@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.0
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=bonsae_import_db
```
