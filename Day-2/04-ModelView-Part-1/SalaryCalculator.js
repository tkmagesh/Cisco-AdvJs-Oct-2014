function SalaryCalculator(defaults){
    var data = defaults || {
        basic : 0,
        hra : 0,
        da : 0,
        tax : 0,
        salary : 0
    };
    var triggerChange = (function(attrName){
        var subscriptionFns = subscribers[attrName] || [];
        for(var i=0;i<subscriptionFns.length;i++)
            subscriptionFns[i].call(this);
    }).bind(this);

    this.get = function(attrName){
        return data[attrName];
    };
    this.set = function(attrName,value){
        data[attrName] = value;
        triggerChange(attrName);
    }

    var subscribers = {};
    this.addSubscriber = function(attrName,subscriptionFn){
        subscribers[attrName] = subscribers[attrName] || [];
        subscribers[attrName].push(subscriptionFn);
    };
    this.removeSubscriber = function(attrName,subsciptionFn){
        //fill in the blanks
    };

}
SalaryCalculator.prototype.calculate = function(){
    var gross = this.get("basic") + this.get("hra") + this.get("da");
    var net = gross * ((100-this.get("tax"))/100);
    this.set('salary',net);

}
