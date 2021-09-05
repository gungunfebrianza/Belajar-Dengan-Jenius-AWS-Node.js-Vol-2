Baca Versi sebelumnya [Belajar Dengan Jenius Node.js Volume 1](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js)

# Belajar Dengan Jenius AWS & Node.js Volume 2
## Author : Gun Gun Febrianza



# Docker



## Node.js Project 

## Dockerization



### Dockerfile

Buat dockerfile dengan instruksi berikut :

```dockerfile
FROM node:12.18.1-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY ./src ./src
COPY ./videos ./videos
CMD npm start
```



### Build Command

Untuk membuat **image** dari **node.js project** yang telah kita buat eksekusi perintah berikut :

```bash
$ docker build -t video-streaming --file Dockerfile .
```

