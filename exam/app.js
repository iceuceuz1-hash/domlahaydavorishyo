



// function aziz(str) {


//     let [tag, count] = str.split('*');
    
   
//     return tag.repeat(Number(count));
// }


// console.log(aziz("masala*2"));




// console.log(aziz("aziz*1"));  



// console.log(aziz("exam*3"));  



// =======================================



// function examaziz(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {


//         sum += i;
//     }
//     return sum;
// }

// console.log(examaziz(3));  


// console.log(examaziz(10)); 


// console.log(examaziz(7));  


// ====================================




// function aziz(num, obj) {

//     return num >= obj.engpasi && num <= obj.oxirgaca;
// }


// console.log(aziz(4, { engpasi: 0, oxirgaca: 5 }));  


// console.log(aziz(4, { engpasi: 4, oxirgaca: 5 }));  


// console.log(aziz(4, { engpasi: 6, oxirgaca: 10 }));



// ============================================

// function exam(jonka) {
//     let squared = jonka ** 2;
    
//     return String(squared).endsWith(String(jonka));
// }


// console.log(exam(1));  



// console.log(exam(3));  




// console.log(exam(6));  



// console.log(exam(95)); 

// ========================================

// function qachontugedi(arr) {
//     return arr.map((item, index) => item + index);
// }


// console.log(qachontugedi([0, 0, 0, 0, 0])); 

// console.log(qachontugedi([1, 2, 3, 4, 5])); 




// console.log(qachontugedi([5, 4, 3, 2, 1])); 

// ===========================================

// function oldimdegiyusufkot(num) {
   



//     return String(num).length;
// }


// console.log(oldimdegiyusufkot(123));    


// console.log(oldimdegiyusufkot(56));          

// console.log(oldimdegiyusufkot(7154));        


// console.log(oldimdegiyusufkot(61217311514));



// console.log(oldimdegiyusufkot(0));   

// ===============================


// function htmlprizbor(num) {
    
//     return Number(String(num).split('').sort((a, b) => b - a).join(''));
// }


// console.log(htmlprizbor(123));   


// console.log(htmlprizbor("001")); 



// console.log(htmlprizbor(999));  

// ===================================================

// function html(min, max) {
    
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// console.log(html(5, 9)); 

// console.log(html(5, 9)); 



// console.log(html(5, 9)); 

// hammasi 5 zerikdimmmmmmm
// ============================


// function kalbasa(n) {
//   let str = n.toString();
//   let len = str.length;
  
//   let sum = str.split('').reduce((acc, digit) => {
//     return acc + Math.pow(Number(digit), len);
//   }, 0);

//   return sum === n;
// }


// console.log(kalbasa(153));  


// console.log(kalbasa(370)); 



// console.log(kalbasa(1652)); 

// zerkidiim kalbasaaaaaaaaaaa

// ======================================

// function iwantmoney(str) {
//   let match = str.match(/[A-Z]/g);
//   return match ? match.length : 0;
// }


// console.log(iwantmone("fvLzpxmgXSDrobbgMVrc")); 


// console.log(iwantmoney("JMZWCneOTFLWYwBWxyFw"));

// pul keree want moneeeey





