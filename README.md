Baca Versi sebelumnya [Belajar Dengan Jenius Node.js Volume 1](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js)

# Belajar Dengan Jenius AWS & Node.js Volume 2
## Author : Gun Gun Febrianza







# Chapter 1 - Git 



# Chapter 2 - Node.js 



# Chapter 3 - Express.js

Notes :

**4.x API Version**, last touched on 6-17-2022



---



## API Reference

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

