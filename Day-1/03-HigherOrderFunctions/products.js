(function () {
    'use strict';
    var products = [
        {id : 7, name : "Pen", cost : 70, units : 80, category : 2},
        {id : 5, name : "Hen", cost : 40, units : 50, category : 1},
        {id : 9, name : "Ten", cost : 60, units : 70, category : 2},
        {id : 4, name : "Len", cost : 80, units : 30, category : 1},
        {id : 6, name : "Zen", cost : 50, units : 90, category : 2},
        {id : 2, name : "Den", cost : 30, units : 20, category : 1}
    ];

    var sort = function (list) {
        for(var i=0;i<list.length-1;i++)
            for(var j=i+1;j<list.length;j++)
                if (list[i].id > list[j].id){
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
    };

    sort(products);
    console.log("sorted by id");
    console.table(products);

    //modify the sort function in such a way that the function can be used to sort an array of "any" object by "any" attribute
     var sort = function (list,attrName) {
        for(var i=0;i<list.length-1;i++)
            for(var j=i+1;j<list.length;j++)
                if (list[i][attrName] > list[j][attrName]){
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
    };
    sort(products,"units");
    console.log("sorted by units");
    console.table(products);


    var sort = function (list,comparerFn) {
        for(var i=0;i<list.length-1;i++)
            for(var j=i+1;j<list.length;j++)
                if (comparerFn(list[i],list[j]) > 0){
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
    };

    var productComparerByValue = function(p1,p2){
        var p1Value = p1.cost * p1.units,
            p2Value = p2.cost * p2.units;
        if (p1Value < p2Value) return -1;
        if (p1Value === p2Value) return 0;
        return 1;
    }
    sort(products,productComparerByValue);
    console.log("sorted by 'value'");
    console.table(products);

    //filter
    var filter = function(list, criteriaFn){
        var result = [];
        for(var i = 0;i<list.length;i++)
            if (criteriaFn(list[i]))
                result.push(list[i]);
        return result;
    }
    var affordableProductCriteria = function(product){
        return product.cost <= 50;
    }
    var allAffordableProducts = filter(products,affordableProductCriteria);
    console.log("Affordable products");
    console.table(allAffordableProducts);

    var inverseCriteriaFn = function(criteriaFn){
        return function(){
            return !criteriaFn.apply(this,[].slice.call(arguments));
        }
    }
    var costlyProductCriteria = inverseCriteriaFn(affordableProductCriteria);
    var allCostlyProducts = filter(products,costlyProductCriteria);
    console.log("Costly products");
    console.table(allCostlyProducts);

    /*
    min
    max
    sum
    avg
    countBy

    all
    any

    */
    
    var min = function(list,selectorFn){
        var result = selectorFn(list[0]);
        for(var i=1;i<list.length;i++){
            var value = selectorFn(list[i]);
            if (value < result) result = value;
        }
        return result;
    }
    var costSelectorFn = function(product){ return product.cost; }
    var minCost = min(products,costSelectorFn);
    console.log("Min cost = ", minCost);
    
    var min = function(list,selector){
        var selectorFn = (typeof selector === "function") ? selector : function(product){ return product[selector]; }; 
        var result = selectorFn(list[0]);
        for(var i=1;i<list.length;i++){
            var value = selectorFn(list[i]);
            if (value < result) result = value;
        }
        return result;
    }
    
    var minUnits = min(products,"units");
    console.log("Min units = ", minUnits);
    
    var all = function(list,criteriaFn){
        for(var i=0;i<list.length;i++)
            if (!criteriaFn(list[i])) return false;
        return true;
    }
    
    var any = function(list,criteriaFn){
        for(var i=0;i<list.length;i++)
            if (criteriaFn(list[i])) return true;
        return false;
    }
    var map = function(list,transform){
        var result = [];
        for(var i=0;i<list.length;i++)
            result.push(transform(list[i]));
        return result;
    }
    
    

}());
