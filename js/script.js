function calcularIMC(){
	
	let altura = document.getElementById('altura').value;
	let peso =   document.getElementById('peso').value;
	let result = document.getElementById('result');
	


	//Substitui vírgula por ponto

	altura =  altura.replace(',','.');
	peso   =  peso.replace(',','.');
	

	//calcular imc

	let calculo = peso / (altura*altura);
	calculo = calculo.toFixed(2);

	result.innerHTML += calculo.replace(',','.') + '<br />';

	//Mostra se o usuário está dentro do peso ideal ou não

	if(calculo < 18.5)
		imc.innerHTML = ('Você está abaixo do peso');
	else if (calculo >= 18.5 && calculo <= 24.9)
		imc.innerHTML = ('Você está no peso Ideal');
	else if(calculo >= 25 && calculo <= 29.9)
		imc.innerHTML = ('Você está acima do peso');
	else if (calculo >= 30 && calculo <= 40)
		imc.innerHTML = ('Você está com obesidade');
	else
		imc.innerHTML = ('Você está com obesidade mórbida');

}

function verificarInput(event){
	var x = event.key;
	if(x != 0 && x != 1 && x != 2 && x != 3 && x != 4 && x != 5 && x != 6 && x != 7 && x != 8 && x != 9 && x != ',' && x != '.' && x != 'Backspace' && x != 'Delete' && x != 'ArrowLeft' && x != 'ArrowRight'){
		alert('Caractere inválido');
		document.getElementById('altura').value = '';
		document.getElementById('peso').value = '';
	}
	} 