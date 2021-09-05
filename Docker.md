Baca Versi sebelumnya [Belajar Dengan Jenius Node.js Volume 1](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js)

# Belajar Dengan Jenius AWS & Node.js Volume 2
## Author : Gun Gun Febrianza



# Docker



## Node.js Project 

## Dockerization



### Dockerfile

Buat **dockerfile** dengan instruksi berikut :

```dockerfile
FROM node:12.18.1-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY ./src ./src
COPY ./videos ./videos
CMD npm start
```

#### FROM Instruction 

#### WORKDIR Instruction 

#### RUN Instruction 

#### COPY Instruction 

Perintah ini digunakan untuk menyalin **package.json & package-lock.json**, **./src** dan **./videos** ke dalam **image** yang akan kita buat.

#### CMD Instruction

### Build Command

Untuk membuat **image** dari **node.js project** yang telah kita buat eksekusi perintah berikut :

```bash
$ docker build -t video-streaming --file Dockerfile .
```

Perintah di atas akan memberikan **output** :

```
Sending build context to Docker daemon  7.899MB
Step 1/7 : FROM node:12.18.1-alpine
12.18.1-alpine: Pulling from library/node
cbdbe7a5bc2a: Pull complete 
2e2b5366d6fa: Pull complete 
e58676d46661: Pull complete 
9acc70cf2ab6: Pull complete 
Digest: sha256:3af7615925ac3a000990b74cb1f98d1ab33644a895fb88a554cd9288c9da960a
Status: Downloaded newer image for node:12.18.1-alpine
 ---> 06a4a7b5263d
Step 2/7 : WORKDIR /usr/src/app
 ---> Running in 6bae94c578df
Removing intermediate container 6bae94c578df
 ---> 1071089f3feb
Step 3/7 : COPY package*.json ./
 ---> 0d1b80566f5e
Step 4/7 : RUN npm install --only=production
 ---> Running in e5888207c577
 added 50 packages from 37 contributors and audited 333 packages in 2.91s
found 113 vulnerabilities (106 low, 1 moderate, 6 high)
  run `npm audit fix` to fix them, or `npm audit` for details
Removing intermediate container e5888207c577
 ---> 226da1595a1e
Step 5/7 : COPY ./src ./src
 ---> ca296fe960c7
Step 6/7 : COPY ./videos ./videos
 ---> 475a44501039
Step 7/7 : CMD npm start
 ---> Running in bf5f84793da4
Removing intermediate container bf5f84793da4
 ---> 9a961caeba7f
Successfully built 9a961caeba7f
Successfully tagged video-streaming:latest
```

Jika image dari **node** belum tersedia maka **docker** akan terlebih dahulu melakukan **download node image** pada **dockerhub**, terkecuali jika **image** sudah terpasang sebelumnya.

