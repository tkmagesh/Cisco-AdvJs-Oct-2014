/*
create a function "track" //how you create it is up to you
that when invoked again and again, returns the number of times it is invoked
*/

var track = (function(){
   var counter = 0;
   return function(){
       return ++counter;
   }
})();
