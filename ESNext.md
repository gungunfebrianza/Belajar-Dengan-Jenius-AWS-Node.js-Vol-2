Baca Versi sebelumnya [Belajar Dengan Jenius Node.js Volume 1](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-AWS-Node.js)

# Belajar Dengan Jenius AWS & Node.js Volume 2
## Author : Gun Gun Febrianza



# ES Next

## ES 2021

### ReplaceAll()

ES2021 telah mengeluarkan **method** terbaru yang dapat mempermudah kita untuk mengganti seluruh **substring** di dalam sebuah **string**. Perhatikan contoh kode di bawah ini :

```javascript
let source = "Maudy Cantik, Maudy Manis, Maudy Pintar";
let newStr = source.replaceAll("Maudy", "Maudya Ayunda Faza");

console.log(newStr);
```

Output :

```
//output : Maudya Ayunda Faza Cantik, Maudya Ayunda Faza Manis, Maudya Ayunda Faza Pintar
```

Selain itu kita dapat menggunakan **callback** menggunakan **method replaceAll()** seperti pada contoh kode di bawah ini :

```javascript
let str = "Maudy Cantik, MAudy Manis, maudy Pintar";

let pattern = /maudy/gi;

newStr = str.replaceAll(pattern, function (match, offset, str) {
  if (match === "MAudy") return "MAUDYA AYUNDA FAZA";
  if (match === "Maudy") return "Maudya Ayunda Faza";
  if (match === "maudy") return "maudya ayunda faza";
  return "";
});

console.log(newStr);
```

Output :

```
//output : Maudya Ayunda Faza Cantik, MAUDYA AYUNDA FAZA Manis, maudya ayunda faza Pintar
```

