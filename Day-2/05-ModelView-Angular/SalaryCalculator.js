'use strict';
function SalaryCalculator() {
    var obj = {x : 10, x : 20}
    this.basic = 0;
    this.hra = 0;
    this.da = 0;
    this.tax = 0;
    this.salary = 0;
}
SalaryCalculator.prototype.calculate = function () {
    var gross = parseInt(this.basic, 10) + parseInt(this.hra, 10) + parseInt(this.da, 10),
        net = gross * ((100 - parseInt(this.tax, 10)) / 100);
    this.salary = net;
};
