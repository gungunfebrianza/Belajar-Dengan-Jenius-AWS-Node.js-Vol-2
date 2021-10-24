Baca Versi sebelumnya [Belajar Dengan Jenius Node.js Volume 1](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js)

# Belajar Dengan Jenius AWS & Node.js Volume 2
## Author : Gun Gun Febrianza



# Software Testing

# Mocha & Chai

**Javascript** menyediakan **framework** untuk melakukan **testing** baik untuk **node.js** atau di lingkungan **browser** yaitu **Mocha**. 

## Quick Start

Eksekusi perintah berikut :

```bash
$ mkdir learn-mocha
$ cd learn-mocha
$ npm init -y
```

Selanjutnya lakukan proses instalasi **mocha**.

## Install

Untuk instalasi dalam **local project** :

```bash
$ npm install --save-dev mocha
```

Buatlah sebuah **folder** dengan nama **test**, kemudian buat **file** dengan nama **test.js** dan isi kode berikut :

```javascript
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

Selanjutnya lakukan konfigurasi pada **script properties** dalam **package.json** :

```javascript
"scripts": {
  "test": "mocha"
}
```

Untuk mengeksekusi test :

```bash
$ npm test
```

---



## Assertions

Pada kasus di atas kita menggunakan assertion bawaan dari [node.js](https://nodejs.org/api/assert.html), kita dapat menggunakan **assertion libraries** seperti [Chai](https://www.chaijs.com/). D

Untuk memasang chai eksekusi perintah berikut :

```bash
$ npm install --save-dev chai
```

Pada **file test.js** tambahkan kode berikut :

```javascript
var chai = require("chai");
var expect = chai.expect;
```

Selanjutnya kita akan menggunakan **expect** :

```javascript
var foo = "hello";

describe("Expect String", function () {
  it("should to be a string", function () {
    expect(foo).to.be.a("string");
  });
});
```

Selanjutnya jalankan **test** :

```bash
$ npm run test
```

**Output** dari **testing** kode di atas :

```
  Array
    #indexOf()
      ✔ should return -1 when the value is not present

  Expect String
    ✔ should to be a string


  2 passing (18ms)
```

