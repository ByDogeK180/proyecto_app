# Usamos la imagen base de Node.js
FROM node:14

# Configuramos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias de Node.js
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código de la aplicación
COPY . .

# Exponemos el puerto en el que corre el servicio
EXPOSE 80

# Comando para correr la aplicación
CMD ["node", "index.js"]
