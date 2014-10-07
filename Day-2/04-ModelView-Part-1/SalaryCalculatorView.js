var myApp = myApp || {};
(function (myApp) {
    function SalaryCalculatorView(model){
            window.calculator = model;
            var $root = this.$root = $("<div></div>");
            this.init = function(){
                calculator.addSubscriber("salary",function(){
                    $("#divResult",$root).html(this.get("salary"));
                });
                calculator.addSubscriber("basic",function(){
                    $("#txtBasic",$root).val(this.get("basic"));
                });
                calculator.addSubscriber("hra",function(){
                    $("#txtHra",$root).val(this.get("hra"));
                });
                calculator.addSubscriber("da",function(){
                    $("#txtDa",$root).val(this.get("da"));
                });
                calculator.addSubscriber("tax",function(){
                    $("#rangeTax",$root).val(this.get("tax"));
                    $("#spanTax",$root).text(this.get("tax") + "%");
                });

                /*View change subscriptions*/
                $root.on("change","#txtBasic",function(){
                    calculator.set("basic", parseInt(this.value,10));
                });
                $root.on("change","#txtHra",function(){
                    calculator.set("hra", parseInt(this.value,10));
                });
                $root.on("change","#txtDa",function(){
                    calculator.set("da", parseInt(this.value,10));
                });
                $root.on("change","#rangeTax",function(){
                    calculator.set("tax", parseInt(this.value,10));
                });
                $root.on("click","#btnCalculate",function(){
                    calculator.calculate();
                });

            };
            this.render = function(){
                this.$root.append($("#calculatorTemplate").html());
                return this;
            }
        }
    myApp.SalaryCalculatorView = SalaryCalculatorView;
})(myApp)