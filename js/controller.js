var myApp = angular.module('myApp', ["chart.js"]);

myApp.factory('Legs', function () {
    var Legs = {};
    var now = new Date("2012-02-29");
    Legs.cast = [
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-02"),
                Week: "1",
                Set: "1",
                Time: "1",
                Measurement: "15",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-03"),
                Week: "1",
                Set: "2",
                Time: "1",
                Measurement: "15",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-08"),
                Week: "2",
                Set: "1",
                Time: "1",
                Measurement: "15",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-09"),
                Week: "2",
                Set: "2",
                Time: "1",
                Measurement: "15",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-15"),
                Week: "3",
                Set: "1",
                Time: "1",
                Measurement: "20",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-17"),
                Week: "3",
                Set: "2",
                Time: "1",
                Measurement: "20",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-22"),
                Week: "4",
                Set: "1",
                Time: "1",
                Measurement: "20",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-24"),
                Week: "4",
                Set: "2",
                Time: "1",
                Measurement: "20",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-28"),
                Week: "5",
                Set: "1",
                Time: "1",
                Measurement: "22",
            },
            {
                trainerId: "0011",
                DateTime: new Date("2015-10-31"),
                Week: "5",
                Set: "2",
                Time: "1",
                Measurement: "22",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-02"),
                Week: "1",
                Set: "1",
                Time: "1",
                Measurement: "11",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-03"),
                Week: "1",
                Set: "2",
                Time: "1",
                Measurement: "12",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-08"),
                Week: "2",
                Set: "1",
                Time: "1",
                Measurement: "12",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-09"),
                Week: "2",
                Set: "2",
                Time: "1",
                Measurement: "14",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-15"),
                Week: "3",
                Set: "1",
                Time: "1",
                Measurement: "18",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-17"),
                Week: "3",
                Set: "2",
                Time: "1",
                Measurement: "20",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-22"),
                Week: "4",
                Set: "1",
                Time: "1",
                Measurement: "22",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-24"),
                Week: "4",
                Set: "2",
                Time: "1",
                Measurement: "23",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-28"),
                Week: "5",
                Set: "1",
                Time: "1",
                Measurement: "24",
            },
            {
                trainerId: "0012",
                DateTime: new Date("2015-10-31"),
                Week: "5",
                Set: "2",
                Time: "1",
                Measurement: "26",
            }
    ];
    return Legs;
})

.controller('LegsCtrl', function($scope,Legs) {

         $scope.legs = Legs;
         $scope.set = [];
         $scope.summary = "Trainee ID"
         $scope.type1 = true
          
           $scope.summaryBy = function(){
            
             var labels_sum = [];

            if($scope.summary == 'Trainee ID'){
                $scope.set = [];
                $scope.type1 = true
                $scope.type2 = false
                $scope.typeChart = "chart chart-line"
                $scope.series = ['Trainee: 0011', 'Trainee: 0012'];
                var tmp = [];
                var tmp2 = [];
                angular.forEach(Legs.cast, function(value, key){
                    if(value.trainerId == '0011'){
                        tmp.push(parseInt(value.Measurement))
                        labels_sum.push(value.DateTime.toLocaleDateString())
                    }
                    if(value.trainerId == '0012'){
                        tmp2.push(parseInt(value.Measurement))
                    }
                  })
                $scope.set.push(tmp)
                $scope.set.push(tmp2)
                $scope.labels = labels_sum;
            }
                
            if($scope.summary == 'Week'){
                $scope.set = [];
                $scope.type1 = false
                $scope.type2 = true
                $scope.typeChart = "chart chart-bar";
                $scope.series = ['Trainee:0011(set1)', 'Trainee:0011(set2)', 'Trainee:0012(set1)', 'Trainee:0012(set2)'];
                var tmp = []
                var tmp2 = []
                var tmp3 = []
                var tmp4 = []
                var tmp5 = []
                angular.forEach(Legs.cast, function(value, key){
                    if(value.trainerId == '0011'){
                        if(value.Set == 1){
                           
                            tmp.push(parseInt(value.Measurement))
                            labels_sum.push("Week" + value.Week)
                            console.log(value.Week)  
                        }
                        if(value.Set == 2){
                            
                            tmp2.push(parseInt(value.Measurement))  
                        }
                        
                    }
                    if(value.trainerId == '0012'){
                        if(value.Set == 1){
                           
                            tmp3.push(parseInt(value.Measurement))
                            
                        }
                        if(value.Set == 2){
                            
                            tmp4.push(parseInt(value.Measurement))  
                        }
                    }
                    
                  })
                $scope.set.push(tmp)
                $scope.set.push(tmp2)
                $scope.set.push(tmp3)
                $scope.set.push(tmp4)
                
                $scope.labels = labels_sum;
            }
            
                    
           }
           $scope.summaryBy();
              });