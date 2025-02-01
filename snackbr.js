/***
*** SNACKBR-JS v1.1.0.0                    ***
*** Autor: TX3, SoftW.                     ***
*** Email: dj_tato3@yahoo.com              ***
*** https://github.com/TX3SoftW/snackbr-js ***

snackbr(VISIBLE, ERROR, TEXTO, CARGANDO, TEMPORIZADO, TIEMPO, ICONO);

- VISIBLE*    (boolean):              (indeterminado) Muestra u oculta el snackbar.
- ERROR*      (boolean):              (indeterminado) Muestra en color rojo si hay error (true).
- TEXTO*      (string):               (indeterminado) El texto a mostrar (se puede usar etiquetas HTML).
- CARGANDO    (boolean):              (false)         Muestra una animación de un circulo girando.
- TEMPORIZADO (boolean):              (false)         Define si pasado un tiempo en segundos se oculta automáticamente o queda visible indefinidamente.
- TIEMPO      (int):                  (3 segundo)     Tiempo en segundo antes de auto-ocultarse.
- ICONO       ("adv", "err", "info"): (indeterminado) Color del ícono en forma de admiración (!). Si no se define, no se muestra.

*Obligatorio.

Uso:
	Para mostrar;
		snackbr(true, false, "Mensaje de <strong>prueba</strong>", false, true, 6, "info");
		
	Para ocultar;
		snackbr(false);
		
Puede especificar la posición llamando al final del body a:
<script>
// Posicionar el SNACKBR
// ALTO (string): "arriba", "abajo"
// LADO (string): "izquierda", "centro", "derecha"
generarSnackbr(ALTO, LADO);
</script>

Changelog: v1.1.0.0 (2025/01/31)
	+ Agregado tema oscuro y claro automatico
	+ Se comprueba si las posiciones existen, sino se usan las por defecto
	
	* Arreglos en el codigo
	
Changelog: v1.0.0.1 (2024/01/22)
	Primera version publicada
	
***/

const snackbrOscuro = (d) => {let b = document.getElementById("snackbr").classList;if(d){b.add("oscuro");}else{b.remove("oscuro");}};
var snackbrDly = null;
var snackbrVersion = "1.1.0.0";
var snackbrPosiciones = {"alto":["arriba","abajo"],"lado":["izquierda","centro","derecha"]};

function generarSnackbr(posAltura, posLado){
	if(typeof posAltura !== 'string' || posAltura == '' || typeof posLado !== 'string' || posLado == ''){
		console.error("ERROR Snackbr: Los parámetros ingresados son incorrectos");
		console.log("Uso: generarSnackbr(string, string);");
		return false;
	}
	if(document.getElementById("snackbr") !== null){
		console.log("ERROR Snackbr: Hay un snackbar creado");
		return false;
	}
	let elTodo = document.createElement("div");
	posAltura = snackbrPosiciones.alto.includes(posAltura) ? posAltura : "abajo";
	posLado = snackbrPosiciones.lado.includes(posLado) ? posLado : "centro";
	elTodo.className = "snackbr_todo " + posAltura + " " + posLado;
	
	let elGral = document.createElement("div");
	elGral.id = "snackbr";
	elGral.className = "snackbr";
	elGral.onclick = () =>{
		snackbr(false)
	};
	elGral.title = "Haga clic para descartar";
	
	let elTexto = document.createElement("span");
	elTexto.id = "snackbr_texto";
	
	let elCargador = document.createElement("div");
	elCargador.className = "snackbr_cargador";
	
	elGral.appendChild(elTexto);
	elGral.appendChild(elCargador);
	elTodo.appendChild(elGral);
	
	document.body.appendChild(elTodo);
	
	if (window.matchMedia){
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			snackbrOscuro(event.matches);
		});
		snackbrOscuro(window.matchMedia('(prefers-color-scheme: dark)').matches);
	}

	return true;
}

// snackbr(VISIBLE, ERROR, TEXTO, CARGANDO, TEMPORIZADO, TIEMPO, ICONO);
function snackbr(s, n, a, c, k, b, r){
	if(document.getElementById("snackbr") === null){
		generarSnackbr("abajo", "centro");
		console.log("SNACKBR autogenerado...");
	}
	if((typeof n !== 'undefined' && typeof n !== 'boolean') || (typeof a !== 'undefined' && (typeof a !== 'string' || a == ''))){
		console.error("ERROR Snackbr: Los parámetros ingresados son incorrectos");
		console.log("Uso: snackbr(boolean, boolean, string, boolean, boolean, int, string);");
		return false;
	}
	let eSB = document.getElementById("snackbr");
	let eSBT = document.getElementById("snackbr_texto");
	let ePL = eSB.querySelector(".snackbr_cargador");
	a = "&nbsp;" + a;
	if(snackbrDly != null){
		clearTimeout(snackbrDly);
		snackbrDly = null;
	}
	eSB.style = "border-color:"+((n===true)?"red;":"var(--snackbr-borde);");
	if(typeof s === 'boolean' && s == true){
		if(typeof c === 'boolean' && c == true){
			ePL.style = "display:block;";
		}else{
			ePL.style = "display:none;";
		}
		if(typeof r === "string"){
			let txt = "<span class='icono ";
			switch(r){
				case "err":
					txt += "errornotif";
					eSB.style = "border-color:red";
					if(n === true){
						a = "<span class='errornotif' style='margin-rigth:10px;'>Error:</span>" + a;
					}
					break;
				case "adv":
					txt += "advnotif";
					eSB.style = "border-color:yellow";
					break;
				case "info":
					txt += "infonotif";
					eSB.style = "border-color:blue";
					break;
				default:
					break;
			}
			a = txt + '\'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16"><path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg></span>' + a;
		}
		eSBT.innerHTML = a;
		eSB.classList.add("mostrar");
		if(typeof k === 'boolean' && k == true){
			snackbrDly = setTimeout(function(){
				let ntrvl = setInterval(function(){
					if(eSB.parentElement.querySelector(':hover') !== eSB){
						eSB.classList.remove("mostrar");
						clearInterval(ntrvl);
					}
				},500);
			},(typeof b === 'number')?b*1000:3000);
		}
	}else{
		eSB.classList.remove("mostrar");
	}
}
