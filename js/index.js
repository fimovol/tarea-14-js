let app = angular.module("MyApp",[])

app.controller("formCtrl", function($scope){
    $scope.master = { empleado: "001", horas: "0", tarifa:"0",sueldoneto:"0" }
    $scope.calcular = function(){
        $scope.user = $scope.master
        sueldobruto = $scope.master.horas * $scope.master.tarifa
        descuento = 0
        if(sueldobruto <= 500){
            descuento = 0
        }else if (sueldobruto >= 501 && sueldobruto <= 1000){
            descuento = 0.02
        }else if(sueldobruto >= 1001 && sueldobruto <= 4000){
            descuento = 0.08
        }else if(sueldobruto >= 4001 && sueldobruto <= 8000){
            descuento = 0.15
        }
        else if(sueldobruto >= 8001 && sueldobruto <= 10000){
            descuento = 0.21
        }else{
            descuento = 0.3
        }
        $scope.master.sueldoneto = sueldobruto-(sueldobruto*descuento)
    }
    $scope.calcular()
})