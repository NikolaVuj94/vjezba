function bouncer(arr) {
    arr = arr.filter(function (n) { 
       return (n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && isNaN()!=NaN); });
     return arr;
   }
   