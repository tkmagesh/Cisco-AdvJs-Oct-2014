/*
Create a function that returns a boolean value depending on the given value is a prime number or not.

*/

isPrime(100) // -> run the algorithm and cache the result
isPrime(100) // -> return the result from the cache



var isPrime = (function(){
    var cache = {};
    function checkPrime(n){
        if (n<=3) return true;
        for(var i=2;i<=(n/2);i++)
            if ((n % i)=== 0) return false;
        return true;
    }
    return function(n){
        if (typeof cache[n] !== "undefined"){
            console.log("from cache..");
            return cache[n];
        }
        console.log("juz processed..");
        cache[n] = checkPrime(n);
        return cache[n];
    }
})();
