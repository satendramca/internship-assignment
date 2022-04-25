const givenString = 'Amolya Sharma';
 // const givenString = 'Chinmay Kulkarni';
 const map = new Map();
 for (let i = 0; i < givenString.length; i += 1) {
   const key = givenString.charAt(i).toUpperCase();
   if (key !== ' ') {
     const collection = map.get(key);
     if (collection) {
       collection.count += 1;
     } else {
       map.set(key, {
         character: key,
         count: 1,
       });
     }
   }
 }
 
 for (const [, value] of map.entries()) {
   console.log(value.character + '-' + value.count)
 }