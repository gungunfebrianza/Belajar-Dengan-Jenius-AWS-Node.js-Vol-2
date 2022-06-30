Baca Versi sebelumnya [Belajar Dengan Jenius Node.js Volume 1](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js)

# Belajar Dengan Jenius AWS & Node.js Volume 2
## Author : Gun Gun Febrianza







# Chapter 1 - Git 



# Chapter 2 - Node.js

Last touched on 6-29-2022

| Parameter                        | Value                       | Note |
| -------------------------------- | --------------------------- | ---- |
| Official Website                 | https://nodejs.org/en/      |      |
| Node.js Latest Version (LTS)     | 16.15.1                     |      |
| Node.js Latest Version (Current) | 18.14.0                     |      |
|                                  |                             |      |
| Node.js Blog                     | https://nodejs.org/en/blog/ |      |





Saat kita sedang melakukan pemasangan **module** terdapat dua mode yaitu :

- **devDependencies** adalah **module** yang dibutuhkan saat melakukan **development**.
- **dependencies** adalah **module** yang dibutuhkan saat **runtime**.



# Chapter 3 - Express.js

Last touched on 6-29-2022

| Parameter  | Value                                     | Note |
| ---------- | ----------------------------------------- | ---- |
| Repository | 3.14.0 - https://github.com/prisma/prisma |      |
| Website    | [www.prisma.io](https://www.prisma.io)    |      |
|            |                                           |      |







---



## API Reference

Notes :

**4.x API Version**, last touched on 6-17-2022

### Express Object 

Untuk membuat sebuah **express applications** gunakan **top level function express()** yang telah di **export** oleh **express module**.  Perhatikan kode di bawah ini :

```javascript
var express = require('express')
var app = express()
```



### Methods

#### express.json()

**express.json()** adalah sebuah **built-in middleware function** dalam **express**, fungsinya digunakan untuk melakukan **parsing** atas permintaan (**request**) yang memiliki **payload** dalam format **JSON** dan menjadi basis dalam **middleware body-parser**.







## CORS

**CORS** (**Cross-Origin Resource Sharing**) dan **SOP** (**Same-Origin Policy**) adalah sebuah **server-side configurations** yang dapat di gunakan oleh **client** atau tidak sama sekali. 



## JSON Web Token (JWT)

A <---JSON---> B

**JSON Web Token (JWT)** digunakan untuk berbagi informasi dengan aman antar dua entitas menggunakan **JSON Object**, ketika JWT telah di produksi tidak terdapat cara untuk mengubah konten di dalamnya. JWT selalu ditandatangani menggunakan **Cryptographic Hashing** seperti **RSA**, untuk memverifikasi integritas informasi yang ada di dalam **JSON Object**.

Struktur **JSON Web Token (JWT)** :

1. Header
2. Payload
3. Signature



# Chapter 4 - Prisma.js

Last touched on 6-29-2022

| Parameter  | Value                                     | Note |
| ---------- | ----------------------------------------- | ---- |
| Repository | 3.14.0 - https://github.com/prisma/prisma |      |
| Website    | [www.prisma.io](https://www.prisma.io)    |      |
|            |                                           |      |

**Prisma** adalah **Open Source Object Relational Mapper (ORM)** Generasi Terbaru (**Next-generation ORM**). Dikatakan terbaru karena **Prisma** adalah **project open source** untuk **Node.js** dan **typescript** yang ditulis menggunakan bahasa pemrograman **Rust**.

Prisma dapat digunakan dalam **Node.js** dan **Typescript Application** di **back-end system**. **Prisma** dapat digunakan di dalam arsitektur **microservices** dan **serverless**. Kita bisa menerapkan Prisma untuk mempermudah pembangunan **REST API**, **GraphQL API** dan **gRPC API**.



## Learning Path

Untuk rute mempelajari prisma bisa dimulai dengan :

1. [Prisma Concept](https://www.prisma.io/docs/concepts)
2. [Prisma Guides](https://www.prisma.io/docs/guides)
   - [Database Guide](https://www.prisma.io/docs/guides/database)
   - [Optimization](https://www.prisma.io/docs/guides/performance-and-optimization)
   - [Testing](https://www.prisma.io/docs/guides/testing/unit-testing)
   - [Deployment](https://www.prisma.io/docs/guides/deployment)



## Object Relational Mapper (ORM)

**Object Relational Mapper (ORM)** adalah sebuah **framework** yang menyediakan abstraksi agar sumber data yang tidak kompatibel  untuk pengolahan dara dapat digunakan pada suatu **database**. Prisma memiliki tiga **development tools**, diantaranya adalah :

1. **Prisma Client** - Untuk memproduksi **tyfe-safe database client** secara otomatis.
2. **Prisma Migrate** - Untuk melakukan **data modelling** secara **declarative** dan kustomisasi **migrations**.
3. **Prisma Studio** - Sebuah **Web Application** berbasis **Graphic User Interface (GUI)** untuk mengolah **database**.



## Examples



### Create MySQL CRUD Project

Buat **directory project** dengan nama **sqlite-prisma** kemudian di dalam **directory** eksekusi perintah di bawah ini :

```bash
$ npm init -y
```

Selanjutnya kita akan melakukan pemasangan **module**, terdapat dua mode pemasangan yaitu :

- **devDependencies** adalah **module** yang dibutuhkan saat melakukan **development**.
- **dependencies** adalah **module** yang dibutuhkan saat **runtime**.



#### Install Typescript

Pertama kita akan melakukan instalasi **typescript development tools** :

```bash
$ npm install typescript ts-node @types/node --save-dev
```

Di bawah ini adalah penjelasan **modules** yang kita pasang :

1. **Module typescript** digunakan agar kita memiliki **TypeScript toolchains**.
2. **Module ts-node** digunakan agar kita bisa menjalankan **typescript applications**.
3. **Module @types/node** digunakan agar **Node.js** yang kita pakai dapat menggunakan  **Type Definitions** dalam **Typescript**.



----



#### Generate tsconfig

Eksekusi perintah di bawah ini untuk memproduksi file konfigurasi **TypeScript** :

```bash
$ tsc --init
```

Selanjutnya ubah isi **file** konfigurasi dari **tsconfig.json** menjadi :

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```



----



#### Install Prisma

Selanjutnya install **Prisma** dengan cara mengeksekusi perintah di bawah ini :

```bash
$ npm install prisma --save-dev
```



----



#### Setup Prisma

Saat **database server** telah berjalan menggunakan **docker** selanjutnya adalah **setup prisma** dengan cara mengeksekusi perintah di bawah ini :

```bash
$ npx prisma init
```

Setelah mengeksekusi perintah di atas terdapat **folder** dengan nama **prisma** dan **.env file** yang akan kita gunakan untuk menentukan koneksi ke **database**. 

Perintah di atas akan memberikan **output** :

```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started 
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.      
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```



---



#### Config .env

Isi dari **.env file** :

```
DATABASE_URL="mysql://USERNAME:PASSWORD@localhost:3306/DATABASENAME"
```

Dalam **file .env** terdapat informasi :

-  **User Credentials username** dan **password** ke **database** yang kita isi.
- **Port Number MySQL** di **3306**.
- **Database name** yang akan kita gunakan, jika belum di buat anda harus membuatnya terlebih dahulu.

---



#### Create Schema

Pada **folder prisma** terdapat **file** dengan nama **scheme.prisma** yang dapat kita gunakan untuk melakukan **data modelling** :

```pri
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model ExtendedProfile {
  id        Int    @id @default(autoincrement())
  biography String
  user      User   @relation(fields: [userId], references: [id])
  userId    Int    @unique
}

model User {
  id           Int              @id @default(autoincrement())
  name         String?
  email        String           @unique
  profileViews Int              @default(0)
  role         Role             @default(USER)
  posts        Post[]
  profile      ExtendedProfile?
}

model Post {
  id         Int        @id @default(autoincrement())
  title      String
  published  Boolean    @default(true)
  author     User       @relation(fields: [authorId], references: [id])
  authorId   Int
  comments   Json?
  views      Int        @default(0)
  likes      Int        @default(0)
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[]
}

enum Role {
  USER
  ADMIN
}
```

Pada tahap ini kita akan menentukan **data model** dalam **Prisma schema file**, selanjutnya **data model** akan di **mapping** ke dalam **database** menggunakan **Prisma Migrate**. Proses **mapping** terjadi dengan cara mengeksekusi sekumpulan **SQL Statements** yang telah diproduksi secara otomatis untuk membuat sekumpulan **tables** sesuai dengan **data model** yang diberikan.



----



#### Push Prisma

**Push Prisma Scheme** ke dalam **database MySQL** dengan mengeksekusi perintah berikut :

```bash
$ npx prisma db push
```



---



#### Prisma Studio

Untuk memastikan bahwa table sudah dibuat kedalam mysql database gunakan Prisma Studio.

Setelah itu eksekusi perintah di bawah ini :

```bash
$ npx prisma studio

Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Prisma Studio is up on http://localhost:5555
```

Selanjutnya anda bisa membuka **browser** dengan alamat **localhost** di **port 5555**.



---



#### Main Script

Buatlah **File** dengan nama **Index.ts**, dengan kerangka berikut :

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // CRUD SCRIPT
}
main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

```



----



#### Create Single Record

Untuk membuat **Single Record** tambahkan kode berikut di dalam **entrypoint** di **main function** :

```typescript
// CREATE SINGLE RECORD
const user = await prisma.user.create({
    data: {
        email: "gungunfebrianza@cryptolibertarian.id",
        name: "Gun Gun Febrianza",
    },
});
```



----



#### Prisma Seeder

Tambahkan **script** berikut pada **package.json** :

```javascript
  "prisma": {
    "seed": "ts-node --transpile-only prisma/seed.ts"
  },
```

**Flag --transpile-only** digunakan untuk mempercepat eksekusi dengan mengabaikan proses **typechecking** sehingga bisa mengurangi beban **memory (RAM)**. Jalankan dengan perintah berikut :

```bash
$ npx prisma db seed
```

Perintah ini digunakan jika ingin melakukan uji coba manipulasi data, namun untuk proses **seeding** prisma menyediakan perintah  satu lagi yaitu :

```bash
$ npx prisma migrate reset
```

Perintah ini akan melakukan penghapusan data dan otomatis mengeksekusi perintah **seeding** sekaligus. Jika kita ingin mencegah proses **seeding** saat mengeksekusi migrate dan reset tambahkan **Flag** :

```
--skip-seed
```



---



### Create SQLite CRUD Project

Buat **directory project** dengan nama **sqlite-prisma** kemudian di dalam **directory** eksekusi perintah di bawah ini :

```bash
$ npm init -y
```

Selanjutnya kita akan melakukan pemasangan **module**, terdapat dua mode pemasangan yaitu :

- **devDependencies** adalah **module** yang dibutuhkan saat melakukan **development**.
- **dependencies** adalah **module** yang dibutuhkan saat **runtime**.



#### Install Typescript

Pertama kita akan melakukan instalasi **typescript development tools** :

```bash
$ npm install typescript ts-node @types/node --save-dev
```

Di bawah ini adalah penjelasan **modules** yang kita pasang :

1. **Module typescript** digunakan agar kita memiliki **TypeScript toolchains**.
2. **Module ts-node** digunakan agar kita bisa menjalankan **typescript applications**.
3. **Module @types/node** digunakan agar **Node.js** yang kita pakai dapat menggunakan  **Type Definitions** dalam **Typescript**.

----



#### Generate tsconfig

Eksekusi perintah di bawah ini untuk memproduksi file konfigurasi **TypeScript** :

```bash
$ tsc --init
```

Selanjutnya ubah isi **file** konfigurasi dari **tsconfig.json** menjadi :

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```



#### Setup Docker

```bash
$ nano docker-compose.yml
```

isi dengan konfigurasi berikut :

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:13
    restart: always
    environment:
      - POSTGRES_USER=africa
      - POSTGRES_PASSWORD=village_people
    volumes:
      - postgres:/var/lib/postgresql/data
    ports:
      - '5432:5432'
volumes:
  postgres:
```

Launch docker :

```bash
$ docker-compose up -d
```

kemudian eksekusi :

```bash
$ docker ps 
```



----



#### Install Prisma

Selanjutnya install Prisma dengan cara mengeksekusi perintah di bawah ini :

```bash
$ npm install prisma --save-dev
```



----



#### Setup Prisma

Saat **database server** telah berjalan menggunakan **docker** selanjutnya adalah **setup prisma** dengan cara mengeksekusi perintah di bawah ini :

```bash
$ npx prisma init
```

Setelah mengeksekusi perintah di atas terdapat **folder** dengan nama **prisma** dan **.env file** yang akan kita gunakan untuk menentukan koneksi ke **database**. 

Perintah di atas akan memberikan **output** :

```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started 
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.      
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```



---



#### Config .env

Isi dari **.env file** :

```
DATABASE_URL="file:./dev.db"
```



---



#### Create Schema

Pada **folder prisma** terdapat **file** dengan nama **scheme.prisma** yang dapat kita gunakan untuk melakukan **data modelling** :

```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  Int?
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

```

Pada tahap ini kita akan menentukan **data model** dalam **Prisma schema file**, selanjutnya **data model** akan di **mapping** ke dalam **database** menggunakan **Prisma Migrate**. Proses **mapping** terjadi dengan cara mengeksekusi sekumpulan **SQL Statements** yang telah diproduksi secara otomatis untuk membuat sekumpulan **tables** sesuai dengan **data model** yang diberikan.



#### Prisma Migration

Jika anda telah menentukan **data model** eksekusi perintah di bawah ini untuk melakukan **migration** :

```bash
$ npx prisma migrate dev --name init

Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database "mydb", schema "public" at "localhost:5432"

PostgreSQL database mydb created at localhost:5432

Applying migration `20220606035836_init`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20220606035836_init/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (3.14.0 | library) to .\node_modules\@prisma\client in 63ms
```



#### Prisma Client

**Prisma Client** untuk memproduksi **tyfe-safe query builder** yang digunakan untuk berinteraksi dengan **database** dari **Node.js Applications** dan **TypeScript Applications**. 

```bash
$ npm install @prisma/client
```

Selanjuntnya buatlah **directory** bernama **src** dan di dalamnya buat **file** dengan nama **index.ts**, tulis kode di bawah ini :

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });
  // use `console.dir` to print nested objects
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

```



#### Update Package.json Script

Tambahkan command dev :

```json
  "scripts": {
    "dev": "ts-node ./script.ts"
  },
```



---



#### Prisma Studio

Setelah itu eksekusi perintah di bawah ini :

```bash
$ npx prisma studio

Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Prisma Studio is up on http://localhost:5555
```

Selanjutnya anda bisa membuka **browser** dengan alamat **localhost** di **port 5555**.



----



# Chapter 5 - Postman



## Postman Interceptor

**Postman Interceptor** adalah sebuah **Chrome Extension** yang menjadi jembatan untuk bisa terintegrasi dengan **Postman Dekstop Apps**. Dengan **interceptor** kita bisa mendapatkan **network request** dan **cookies** dari **chrome browser** yang kita gunakan.

Setelah **interceptor** berjalan di dalam **chrome browser** kita bisa melakukan **debug session**.

**Install Postman Interceptor** disini :

```
https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en
```

Pada **Postman Dekstop App footer** klik **Capture Request**, kemudian **install Interceptor Bridge**.



# Chapter 6 - [Docker](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js-Vol-2/blob/main/Docker.md)



# Chapter 7 - Amazon Web Services 

* ### Subchapter 1 – AWS Resources	

  * ### Computing Power	

    * Amazon Lightsail	
    * Amazon Elastic Compute Cloud (EC2)	
    * Amazon Elastic Container Service (ECS)	

  * ### Storage Power	

    * Amazon Simple Storage Service (S3)	
    * Amazon Glacier	
    * Amazon Elastic Block Store (EBS)	
    * Amazon Elastic File System (EFS)	

***

* ### Subchapter 2 – AWS CLI V1 & V2	

  * ### Command Line Interface (CLI)	

    * Linux Shell	
    * Windows Command Line	
    * Remote	

  * ### AWS CLI V2	

    * Install AWS CLI V2 on Linux	
    * Install AWS CLI V2 on MacOS	
    * Install AWS CLI V2 on Windows	

  * ### AWS CLI V1	

    * Install AWS CLI	
    * Upgrade AWS CLI	
    * Verify AWS CLI	

***

* ### Subchapter 3 – AWS IAM	

  * ### Create IAM User	

    * Set User Details	
    * AWS Access Type	
    * Set Permission	
    * Tags	
    * IAM User Credential	

  * ### AWS Configuration	

  * ### Create IAM Role	

    * Add Policy to Role	
    * AWS Lambda Role	
    * AWS Lambda Basic Execution Role	
    * AWS Xray Write Only Access	
    * Tag & Review	
    * Trust Relationships	

***

* ### Subchapter 4 – AWS Lambda	

  * ### Lambda Concept	

    * Handler	
    * Runtime	

  * ### Lambda Function	

    * Create Lambda Function	

***

* ### Subchapter 5 – AWS API Gateway	

  * ### API Gateway Service	

    * HTTP API	
    * REST API	
    * WebSocket API	

  * ### API & App Developer	

    * API Developer	
    * App Developer	

  * ### API Gateway Features	

    * Resources Management	
    * Method Execution Management	
    * Staging Management	
    * Models Management	
    * Throttling Management	
    * AWS CloudWatch Integration	
    * AWS X-Ray Integration	
    * AWS Cognito Integration	
    * AWS WAF Integration	
    * Export API	
    * Deployment History	
    * Documentation	
    * Dashboard Metrics	

  * ### REST API	

    * Create REST API	
    * Create Resource	
    * Create Method	
    * Integration Request	
    * Test API	
    * Deploy API	
    * Export to Postman	

   * ### Debugging & Troubleshooting	

  ***

* ### Subchapter 6 – API Gateway & Lambda	

***



# Chapter 8 - Big Data

* ### Subchapter 1 – Introduction to Database	

  * ### Database Function	

    * Data Management	
    * Scalability	
    * Data Heterogenity	
    * Eficiency	
    * Persistence	
    * Reliability	
    * Consistency	
    * Non-redundancy	

  * ### Use Case Database	

    * Aplikasi Penjualan (Sales)	
    * Aplikasi Accounting	
    * Aplikasi HR (Human Resources)	
    * Aplikasi Manufaktur	
    * Aplikasi e-Banking	
    * Aplikasi Keuangan	

  * ### Data Analytic	

***

* ### Subchapter 2 – AWS Database	

  * ### Managed Relational Database	

    * Amazon Relational Database Service (RDS)	
    * Amazon Aurora	

  * ### Nonrelational Database	

    * Amazon DynamoDB	
    * Amazon DocumentDB	

  * ### Data Warehouse Database	

    * Amazon Redshift	

  * ### In-memory Data store Database	

    * Amazon ElastiCache	

  * ### Time-series Database	

    * Amazon TimeStream	

  * ### Ledger Database

    * Amazon Quantum Ledger Database (QLDB)	

  * ### Graph Database	

    * Amazon Neptune	

  * ### Database Migration Service	

    * Amazon Database Migration Service (DMS)	

***

* ### Subchapter 3 – Introduction to Big Data	

***

* ### Subchapter 4 – Introduction to NoSQL	

 * ### CAP Theorem	

   * Consistency	
   * Availability	
   * Partition Tolerance	

 * ### BASE Approach	

   * Basic Availability	
   * Soft State	
   * Eventual Consistency	

 * ### Keunggulan NoSQL?	

   * Schemaless	
   * Scalable	

 * ### Klasifikasi NoSQL Database	

  * Key-value Store	

   * Column-oriented	

   * Graph	

   * Document Oriented	

 * ### Big Data & NoSQL	

***

* ### Chapter 8	

* ### Web Service	

***

* ### Subchapter 1 – API	

***

* ### Subchapter 2 – Remote Procedure Call	

 * ### JSON-RPC	

***

* ### Subchapter 3 – REST	

 * ### RESTful Web Service	

   * Uniform Interface	
   * Client-Server Architecture	
   * Stateless	
   * Cacheable	
   * Layered System	
   * Code on demand	

* ### Daftar Pustaka	

* ### Tentang Penulis	

