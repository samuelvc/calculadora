
//contiene un array de las teclas
var teclas = document.getElementsByClassName('tecla');
var display = document.getElementById('display');
var operando1 = '';
var operando2 = '';
var operador = '';
var resultado = '0';
var signo = '';
var igual = 0; //esta en 0 cuando no se ha presionado la tecla de =

// Library definition
/*var calculadora = ( function(){
	
	return {
		//metodo para realizar la operacion de sumar
		suma: function(param1, param2){
		  return parseFloat(param1) + parseFloat(param2);
		}
	}
	
	return {
		//metodo para realizar la operacion de restar
		resta: function(param1, param2){
		  return parseFloat(param1) - parseFloat(param2);
		}
	}
	
	return {
		//metodo para realizar la operacion de multiplica
		multiplicar: function(param1, param2){
		  return parseFloat(param1) * parseFloat(param2);
		}
	}
	
	return {
		//metodo para realizar la operacion de division
		dividir: function(param1, param2){
		  return parseFloat(param1) / parseFloat(param2);
		}
	}	

})(); */

function suma(param1, param2){
  return parseFloat(param1) + parseFloat(param2);
}

function resta(param1, param2){
  return parseFloat(param1) - parseFloat(param2);
}

function multiplicar(param1, param2){
  return (parseFloat(param1) * parseFloat(param2)).toFixed(2);
}

function dividir(param1, param2){
  return (parseFloat(param1) / parseFloat(param2)).toFixed(2);
}

//se obtienen tolas teclas que contiene la class tecla.
for(var i=0; i<teclas.length; i++){
	teclas[i].addEventListener('mousedown', doMouseDown, true);
	teclas[i].addEventListener('mouseup', doMouseUp, true);
	teclas[i].style="cursor: pointer;"
}

function doMouseUp(e){
	//alert(e.target)
	//e.target.className = "tecla";
	//console.log(e.target)
}

//Evento mouseDown de cada tecla
function doMouseDown(e){
	//console.log(e.target.alt);
	var click = e.target.alt + '';
	switch (click) 
	{
		case "0": case "1": case "2":
		case "3": case "4": case "5":
		case "6": case "7": case "8":
		case "9":
			if(operador == '')
			{
				//si el primer numero es cero solo se escribe una sola vez al inicio del operador
				if(click === "0")
				{
					if(operando1.length == 0)
					{
						operando1 = '0';
					}
					else
					{
						if(operando1.length < 8){
							if(operando1 !== click)
							{
								operando1 = operando1 + '' + click;
							}
						}
					}
				}else
				{
					if(operando1.length < 8)
					{
						operando1 = operando1 + '' + click;
					}
				}

				display.innerHTML = operando1 + '' + operador + '' + operando2;
				
				if(operando1 === "0")
					operando1 = ''
			}else
			{
				if(igual == 1){
					operando2 = '';
					igual = 0;
				}

				if(click === "0")
				{
					if(operando2.length == 0)
					{
						operando2 = '0';
					}
					else
					{
						if(operando2.length < 8){
							if(operando2 !== click)
							{
								operando2 = operando2 + '' + click;
							}
						}
					}
				}else
				{
					if(operando2.length < 8)
					{
						operando2 = operando2 + '' + click;
					}
				}

				display.innerHTML = operando1 + '' + operador + '' + operando2;
				
				if(operando2 === "0")
					operando2 = ''
			}
		break;
		case "punto":
			if(operador == '')
			{
				if(operando1.length == 0){
					operando1 = '0.';
					resultado = operando1;
					display.innerHTML = resultado;
					return;
				}

				if(operando1.length < 8)
				{
					for(i=0; i<operando1.length; i++) 
					{
						var c = operando1.charAt(i);
						if(c == ".")
							return;
					}
					operando1 = operando1 + '.';
					resultado = operando1;
				}
				display.innerHTML = resultado;
			}else
			{
				if(operando2.length == 0){
					operando2 = '0.';
					display.innerHTML = operando1 + '' + operador + '' + operando2;
					return;
				}

				if(operando2.length < 8){
					for(i=0; i<operando2.length; i++) 
					{
						var c = operando2.charAt(i);
						if(c == ".")
							return;
					}

					operando2 = operando2 + '.';
				}
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}
		break;
		case "igual":
			switch(operador){
				case '+':
					//operando1 = calculadora.suma(operando1, operando2);
					operando1 = suma(operando1, operando2);
					resultado = operando1;
					//operador = '';
					display.innerHTML = resultado;
					igual = 1;
				break;
				case '-':
					//operando1 = calculadora.resta(operando1, operando2);
					operando1 = resta(operando1, operando2);
					resultado = operando1;
					//operador = '';
					display.innerHTML = resultado;
					igual = 1;
				break;
				case '*':
					//operando1 = calculadora.multiplicar(operando1, operando2);
					operando1 = multiplicar(operando1, operando2);
					resultado = operando1;
					//operador = '';
					display.innerHTML = resultado;
					igual = 1;
				break;
				case '/':
					//operando1 = calculadora.dividir(operando1, operando2);
					operando1 = dividir(operando1, operando2);
					resultado = operando1;
					//operador = '';
					display.innerHTML = resultado;
					igual = 1;
				break;
			}
		break;
		case "mas":
			if(operador == ''){
				operador = '+';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}else
			{
				operador = '+';
				operando2 = '';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}
		break;
		case "menos":
			if(operador == ''){
				operador = '-';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}else
			{
				operador = '-';
				operando2 = '';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}
		break;
		case "por":
			if(operador == ''){
				operador = '*';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}else
			{
				operador = '*';
				operando2 = '';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}
		break;
		case "dividido":
			if(operador == ''){
				operador = '/';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}else
			{
				operador = '/';
				operando2 = '';
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}
		break;
		case "On":
			operando1 = '';
			operando2 = '';
			operador = '';
			resultado = '0';
			signo = '';
			display.innerHTML = resultado;
		break;
		case "signo":
			if(signo == ""){
				signo = '-';
			}else{
				signo = '';

				if(operador == ''){
					if(operando1.includes("-")){
						operando1 = operando1.substring(1, operando1.length);
						display.innerHTML = operando1 + '' + operador + '' + operando2;
						return;
					}
				}else{
					if(operando2.includes("-")){
						operando2 = operando2.substring(1, operando2.length);
						display.innerHTML = operando1 + '' + operador + '' + operando2;
						return;
					}
				}
			}

			if(operador == '')
			{
				for(i=0; i<operando1.length; i++) 
				{
					var c = operando1.charAt(i);
					if(c == "-"){
						return;
					}
				}

				operando1 = signo + operando1;
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}else{
				for(i=0; i<operando2.length; i++) 
				{
					var c = operando2.charAt(i);
					if(c == "-")
						return;
				}

				operando2 = signo + operando2;
				display.innerHTML = operando1 + '' + operador + '' + operando2;
			}
		break;
	}
}