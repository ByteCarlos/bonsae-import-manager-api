# Use a imagem mais recente do Node (altere para 'node:lts' se quiser a LTS)
FROM node:22.12.0

# Cria e define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (se houver)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Executa o build da aplicação
RUN npm run build

# Expõe a porta (ajuste conforme sua API)
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
