// console.log(!!""); //false
// console.log(!!"asd"); // true
/*----------------------------------------------------*

// 1.What is the output of the following code block?
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); //false


// JavaScript'te, kayan noktalı sayılar tam olarak temsil edilemeyen kesirli sayılar olarak saklanır. Yani, 0.1 ve 0.2 gibi kesirli sayılar tam olarak ifade edilemezler ve bu nedenle iç karşılaştırmalarda bazen beklenmeyen sonuçlar elde edebiliriz.

// Şimdi, neden 0.1 + 0.2 ifadesinin 0.3 ile karşılaştırılınca false döndüğünü açıklayalım:

// 0.1 ve 0.2'nin içsel temsilini düşündüğümüzde, bu sayılar kesirli olarak tam olarak ifade edilemezler. JavaScript, bu sayıları yaklaşık değerlerle saklar. Sonuç olarak, 0.1 + 0.2 ifadesi, matematiksel olarak 0.3'e eşit olması gereken bir sonuç üretmek yerine, çok küçük bir yaklaşık değeri döndürür. Yani, bu ifadeyi kullandığınızda, JavaScript'in içsel kayan noktalı aritmetiği nedeniyle hassas sonuçları elde edemezsiniz.
/*----------------------------------------------------*

// 2. What is the output of the following code block?
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false

Bu iki ifadenin sonuçları, JavaScript'te tipik karşılaştırma mantığına göre beklediğinizden farklı olabilir. İlk ifade true dönerken, ikinci ifade false döner. Şimdi bu iki ifadeyi açıklayalım:

console.log(1 < 2 < 3);

Bu ifade şu şekilde işlenir:

İlk karşılaştırma 1 < 2 yapılır ve sonuç true döner.
Ardından, true < 3 yapılır. JavaScript, true'u 1 olarak kabul eder ve 1 < 3 ise doğru olduğu için sonuç true olur.
Yani, bu ifade true döner çünkü 1 < 2 ve true < 3 doğru sonuçlar verir.

console.log(3 > 2 > 1);

Bu ifade şu şekilde işlenir:

İlk karşılaştırma 3 > 2 yapılır ve sonuç true döner.
Ardından, true > 1 yapılır. Bu noktada JavaScript, true'u 1 olarak kabul eder. Şimdi 1 > 1 sorgusu yapılır, ve bu yanlış olduğu için sonuç false olur.
Yani, bu ifade false döner çünkü 3 > 2 doğru olsa da, true > 1 yanlış olduğu için sonuç false olur.

Bu tür karşılaştırmaların sonuçları, JavaScript'te karşılaştırma işlemcisinin çalışma mantığına dayanır. Daha karmaşık ifadelerde, beklenmeyen sonuçları önlemek için dikkatli olmak önemlidir. Bu nedenle, karşılaştırmaları anlamak ve gerektiğinde parantezlerle açık bir şekilde ifade etmek iyi bir uygulamadır.





Regenerate

/*----------------------------------------------------*

//3.  Write program to find the sum of positive numbers. But if the user enters a negative numbers, the loop ends, if the negative number entered is not added to sum

let sumNum = 0;
let number = +prompt("Please enter positive number");

while (number >= 0) {
  sumNum = sumNum + number;
// question mark let or const
  number = +prompt("Please enter positive number");
}
console.log(sumNum);


// ´´´´´´´´
let sum = 0; 
let number = parseInt(prompt('Enter a number: ')); 
while(number >= 0) { 
    sum += number; 
    number = parseInt(prompt('Enter a number: ')); 
    
} console.log(`The sum is ${sum}.`);

´´´´


/*----------------------------------------------------*
//4. What is the output of the following code block?
null == undefined;  //true type cek true doner
null === undefined; // false type check false

isNaN(2 + null); // 2+null(0) =2 // false
isNaN(2 + undefined); //isNaN //true
null ? console.log("true") : console.log("false"); // false

/*----------------------------------------------------*
// 5 What is the output of the following code block?
var hash = "";
var count = 1;
var n = 3;
for (var x = 1; x <= 7; x++) {
  while (hash.length != count) 
  hash += "#";
  hash += "\n";
  count = count + n; //count+=n
  n++;
}
console.log(hash);

/*----------------------------------------------------*
// 6 What is the output of the following code block?

let firstName = null;
let lastName = null;
let nickName = "coderBond";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
//? JavaScript'de ?? operatörü "nullish coalescing" olarak adlandırılır ve özellikle bir değerin null veya undefined olup olmadığını kontrol etmek için kullanılır. firstName last name null veya undefined ise nickName defgiskenine odaklanir 

/*----------------------------------------------------*
// 7.What is the output of the following code block?

function onZoom(x){
    console.log("Zoom active for",x)
}
function startClass(x,y,z){
    console.log("Class starts at",x)
    y(z)
}
startClass("20:00",onZoom,"FS")

// İlk olarak, onZoom adında bir fonksiyon tanımlanmıştır. Bu fonksiyon, bir argüman (x) alır ve bu argümanı konsol (console) üzerinde "Zoom active for" (Türkçe: "Zoom etkin, şu kişi için:") şeklinde bir mesajla birlikte yazdırır.

//Ardından, startClass adında başka bir fonksiyon tanımlanmıştır. Bu fonksiyon üç argüman alır: x, y, ve z.

x//: Saati temsil eder, yani sınıfın başlama saati gibi.
//y: Bir fonksiyonu temsil eder, onZoom gibi.
//z: Bir metni temsil eder, burada "FS" gibi.
//startClass fonksiyonu şunları yapar:

//İlk olarak, konsol üzerinde "Class starts at" (Türkçe: "Saat şu anda sınıf başlıyor:") mesajını ve x değişkenini yazdırır. Bu, sınıfın ne zaman başladığını gösterir.
//Ardından, y fonksiyonunu (bu durumda onZoom) ve z değerini birlikte çağırır. Yani, onZoom("FS") gibi bir çağrı yapar.
//Son olarak, startClass fonksiyonu çağrılırken, "20:00" saati, onZoom fonksiyonu ve "FS" metni argüman olarak geçirilir. Bu nedenle konsol çıktısı şu şekilde olur:

//"Class starts at 20:00" (Saat 20:00'de sınıf başlıyor.)
//"Zoom active for FS" (FS için Zoom etkin.)

/*----------------------------------------------------*
// 8.What is the output of the following code block?

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(5)
);

/*----------------------------------------------------*
// 9.What is the output of the following code block?
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})(); //1 undefined 2





/*----------------------------------------------------*/
// 9.What is the output of the following code block?

// Bu kod bir IIFE (Immediately Invoked Function Expression) içinde bir JavaScript kod bloğunu tanımlar. Kodun sonucunu açıklamak için adım adım ilerleyelim:

// Bir IIFE tanımlanmıştır (kendi kendini çağıran bir fonksiyon ifadesi). Bu ifade, kodu hemen çalıştırmak için kullanılır. İfadenin sonundaki () bu fonksiyonu hemen çağırır.

// IIFE içinde bir try...catch bloğu başlatılmıştır. try bloğu, potansiyel olarak hata üretebilecek kodu içerir.

// throw new Error(); ifadesi try bloğunda bir hata (Error) oluşturur. Ancak bu hatayı yakalamak için bir catch bloğu vardır.

// catch (x) ifadesi, yakalanan hatanın adını x olarak alır.

// Daha sonra x adında bir değişken tanımlanır ve 1 değeri atanır. Yani, x artık 1 değerini taşır.

// Aynı satırda y adında bir değişken de tanımlanır ve 2 değeri atanır. Yani, y artık 2 değerini taşır.

// console.log(x); ifadesi catch bloğu içinde olduğundan, x değişkeninin değerini yani 1'i konsola yazdırır. Dolayısıyla, bu satırın çıktısı 1 olur.

// console.log(x); ifadesi catch bloğu dışında olduğundan, x değişkenine dışarıdan erişir. Ancak, dışarıdaki x değişkeni tanımlanmamıştır ve bu nedenle undefined değerini döndürür. Dolayısıyla, bu satırın çıktısı undefined olur.

// console.log(y); ifadesi, y değişkenine dışarıdan erişir ve y'nin değeri 2 olduğu için 2'yi konsola yazdırır.

// Sonuç olarak, kodun çıktısı şu şekildedir:

// 1 (çünkü console.log(x); ifadesi catch bloğu içindedir ve burada x, 1 değerine sahiptir.)
// undefined (çünkü console.log(x); ifadesi catch bloğu dışındadır ve burada x tanımlı değildir, bu nedenle undefined döner.)
// 2 (çünkü console.log(y); ifadesi y değişkenine erişir ve y'nin değeri 2'dir.)
/*----------------------------------------------------*
// 10.What is the output of the following code block?
let a=[10,20,30]
a[10]=100;
console.log(a[6]) //undefined???
let b=[undefined];
b[2]=1
console.log(b) // [undefined, empty, 1]
console.log(b.map(e=>99)) //[99, empty, 99]

/*----------------------------------------------------*
// 11.What is the output of the following code block?
function orderPizza(type, ingredients, callback) {
    console.log('Pizza ordered...');
    console.log('Pizza is for preparation');
    setTimeout(function () {
        let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
       $10`;
        callback(msg);
        }, 3000);
       }
       orderPizza('Vegeterian', 'Cheese', function(message){
        console.log(message);
       });
       

/*----------------------------------------------------*
// 12. What is the output of the following code block? 

class Employee{ 
    constructor(id,name){ 
    this.id=id; 
    this.name=name; 
    } 
    detail(){ 
    console.log(this.id+" "+this.name) 
    } 
    } 
   let e1=new Employee(10,"Qadir Adamson"); 
   let e2=new Employee("Victor Hug"); 
   let e3=new Employee(12)
   e1.detail(); 
   e2.detail();
   e3.detail();

/*----------------------------------------------------*
// 13. What is the output of the following code block? 

class Animal {
    constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    }
    eat() {
    return `${this.name} is eating`;
    }
    sound(){
    return `${this.name} is says`;
    }
   }
   class Cat extends Animal {
    constructor(name, weight) {
    super(name, weight);
    }
    sound(){
    return `${super.sound()} Meow!`;
    }
}
let felix=new Cat("felix",5)
console.log(felix.sound())

/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/


