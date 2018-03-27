// JavaScript Document
app.controller('MainController',['$scope', function($scope){
	
	//$scope.var= {
	//	Hasil : 0,
	//	NumberC : 0
	//};
	$scope.logtoConsole=function(index) {
		var isiitem=$scope.item[index];
		console.log(isiitem);
	}
	$scope.Count=function(Number) {
		Hasil : 0

		$scope.item[index].beli+=1;
		for(var i=1;i<Number;i++) {
			Hasil = i*Number;
		}

		console.log($Hasil);
	}
	$('#Hasil').click(function(){
		var Answer = 1
		var Num = $('#Angka1').val();
		var Pkt	= $('#Angka2').val();
		console.log(Pkt);
		if(Pkt === '') {
			for(var i=1;i<Num;i++) {
				Answer = i*Num;
			}
		} else {
			for(var i=0;i<Pkt;i++) {
				Answer = Answer*Num;
			}
		}
		$('#HasilAkhir').val(eval(Answer));
	});
	$('#Picker').click(function(){
		var Color = $('#RGB').val()
		document.getElementById("myDiv").style.backgroundColor = Color;
		$('#PickAnswer').val(eval(Color));
	});
}]);
