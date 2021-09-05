Baca Versi sebelumnya [Belajar Dengan Jenius Node.js Volume 1](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js)

# Belajar Dengan Jenius AWS & Node.js Volume 2
## Author : Gun Gun Febrianza

# Table of Contents

1. [Docker](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#docker)
   - [Node.js Example Project](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#nodejs-example-project)
   - [Dockerization](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#dockerization)
     - [Dockerfile](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#dockerfile)
       - [FROM Instruction](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#from-instruction)
       - [WORKDIR Instruction](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#workdir-instruction)
       - [RUN Instruction](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#run-instruction)
       - [COPY Instruction](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#copy-instruction)
       - [CMD Instruction](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#cmd-instruction)
     - [Build Command](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#build-command)
       - [Tag Argument](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#tag-argument)
     - [Run Command](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#run-command)
       - [Detach Mode](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#detach-mode)
       - [Binding Port](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#binding-port)
       - [Image Name](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#image-name)
     - [Docker Logs](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#docker-logs)
   - [Docker Compose](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#docker-compose)
     - [Install docker-compose](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md#install-docker-compose)



# Docker

**Docker** adalah **package manager** yang dapat kita gunakan untuk melakukan **bundling code**, **assets**, **configuration** dan **dependencies** yang kita buat. Sebagai contoh kita dapat melakukan **packing** aplikasi **node.js**, **golang**, **java** atau **bash script** yang telah kita buat ke dalam sebuah **image** atau **docker image**. Selanjutnya **image** tersebut dapat kita distribusikan ke tempat sistem penyimpanan data tersentral yang disebut dengan **container registry** agar bisa digunakan oleh **developer** lainnya.  

----



## Node.js Example Project 

Untuk aplikasi **node.js** yang akan dijadikan **example** dalam **project** ini terdapat dalam **folder src** dengan nama **example-1**.

-----



## Dockerization

Tujuan dari pembuatan **image** atau **containerizing** adalah agar lebih mudah untuk melakukan **shipping** dan **deployment**. Untuk membuat sebuah **image** kita perlu membuat sebuah **dockerfile** terlebih dahulu. **Dockerfile** adalah sekumpulan instruksi bagaimana membangun sebuah **image**.

---------



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

Untuk memahami instruksi **dockerfile** di atas, mas gun akan menjelaskannya satu persatu :

#### FROM Instruction 

**From Instruction** digunakan untuk menentukan **base Image**, artinya **image** yang kita buat memerlukan **node:12.18.1-alpine image** untuk bisa berjalan.

#### WORKDIR Instruction 

**Directory** yang akan digunakan dalam **image**.

#### RUN Instruction 

**Run Instruction** digunakan agar kita bisa mengeksekusi perintah tertentu sebelum **image** dapat digunakan.

#### COPY Instruction 

Perintah ini digunakan untuk menyalin **package.json & package-lock.json**, **./src** dan **./videos** ke dalam **image** yang akan kita buat.

#### CMD Instruction

**CMD Instruction** digunakan untuk agar kita dapat mengeksekusi **node.js project** dalam **image**.

--------



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

#### Tag Argument

Saat kita mengeksekusi perintah build pada docker kita menggunakan **flag -t**, tujuannya agar kita dapat memberikan penamaan pada **image** yang akan kita buat. Jika kita tidak menggunakan **flag -t** maka **docker** akan memberikan nama random secara otomatis.

```bash
$ docker images
```

Jika perintah di atas kita eksekusi maka kita dapat melihat **images** yang telah kita buat dan tanam :

|   Repository    |      Tag       |   Image ID   |    Created     |  Size  |
| :-------------: | :------------: | :----------: | :------------: | :----: |
| video-streaming |     latest     | 9a961caeba7f | 25 minutes ago |  93MB  |
|      node       | 12.18.1-alpine | 06a4a7b5263d | 14 months ago  | 89.3MB |
|      node       |     latest     | 1016313cda78 |  10 days ago   | 907MB  |

Jika kita perhatikan **node** versi **alpine** memiliki **size** yang lebih kecil dan hemat dibandingkan dengan **node** yang versi **non-alpine**.

---------



### Run Command

Setelah kita membuat **image** selanjutnya kita dapat melakukan **booting image video-streaming** menjadi sebuah **container** dengan mengeksekusi perintah berikut :

```bash
$ docker run -d -p 3000:3000 video-streaming
```

Jika kita bedah perintah run di atas maka terdapat **Detach Mode**, **Binding Port** dan **Image Name** :

#### Detach Mode

Pada perintah di atas terdapat **flag -d** yang digunakan untuk melakukan **detach mode** agar **container** berjalan di belakang layar (**background**).  **Container** akan berjalan di dalam **background**, untuk memastikan **container** sudah berjalan di dalam **background** eksekusi perintah **docker ps** :

| Container ID | Image           | Command                | Created       | Status           | Ports                                     | Names     |
| ------------ | --------------- | ---------------------- | ------------- | ---------------- | ----------------------------------------- | --------- |
| d15d5073f41a | video-streaming | "docker-entrypoint.s…" | 3 minutes ago | Up 3 minutes ago | 0.0.0.0:3000->3000/tcp, :::3000->3000/tcp | zan_katak |

#### Binding Port

Pada perintah di atas terdapat **flag -p** yang digunakan untuk melakukan **binding port** dari **host operating system** dan **container** yang kita buat. Konsepnya seperti **port forwarding** ketika terdapat **traffic** dari **port 3000** kita dapat mengarahkannya menuju **port** **3000** dalam **container** yang telah kita buat.

#### Image Name

Pada perintah di atas kita memberikan **image name** dengan nama **video-streaming**.

### Docker logs

Untuk membaca **logs** dari **container** eksekusi perintah berikut :

```bash
$ docker logs d15d5073f41a
```

Parameter yang dibutuhkan adalah **container id** yaitu **d15d5073f41a**.

-------



### Publish Image

#### Private Docker Registry 

Jika anda menggunakan **Microsoft Azure** anda dapat menggunakan **Container Registry** yang bisa anda dapatkan melalui **Marketplace**.

#### Public Docker Registry



---------



## Docker Compose

**Docker compose** dapat kita gunakan untuk melakukan konfigurasi, **build**, **run** dan **manage** lebih dari 1 **containers** dalam waktu yang bersamaan. Selanjutnya untuk memanajemen sekumpulan **container** kita akan menggunakan **kubernetes**.

Pada fase ini kita akan melakukan **scaling up** dari 1 **container** menjadi lebih dari 1 **container**.

### Install docker-compose

Untuk melakukan instalasi **docker-compose** eksekusi perintah berikut :

```bash
$ docker curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Saat buku ini ditulis **docker-compose** yang digunakan adalah versi **1.29.2,** selanjutnya eksekusi perintah di bawah ini :

```bash
$ docker chmod +x /usr/local/bin/docker-compose
```

Untuk memastikan bahwa **docker-compose** telah terpasang eksekusi perintah berikut :

```bash
$ docker-compose --version
docker-compose version 1.29.2, build 5becea4c
```

