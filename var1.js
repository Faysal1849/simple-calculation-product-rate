function productCalculator(){

	var productPrice=1500;// product price rate 1500 taka
	var discount=15; // product discount 15%
	var result=productPrice /discount*100;
	document.querySelector("#amin").innerHTML=result;

}
productCalculator();