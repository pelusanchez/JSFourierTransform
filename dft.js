/**
Discrete Fourier Transform
	Returns the DFT of the array of	numbers passed by argument.

	Usage:

		Example: Discrete Fourier Transform of 16 terms of sine: (2PI/16*t) in 1 second.
		dft([	0,
				0.3826834323650898,
				0.7071067811865475,
				0.9238795325112867,
				1,
				0.9238795325112867,
				0.7071067811865476,
				0.3826834323650899,
				1.2246467991473532e-16,
				-0.38268343236508967,
				-0.7071067811865475,
				-0.9238795325112865,
				-1,
				-0.9238795325112866,
				-0.7071067811865477,
				-0.3826834323650904])
*/
function dft(datos){
	var salida = {Re: [], Im: []};	//Salida de los datos (real e imaginario)
	var N = datos.length-1;
	for(var k = 0; k<=N; k++){ // Rellenamos con Ceros
		salida.Re.push(0);
		salida.Im.push(0);
	}
	var Oreal, Oimaginario;
	for(var k = 0; k<=N/2; k++){
		for(var n = 0; n<=N;n++){
			Oreal = datos[n]*Math.cos(2*Math.PI*n*k/N);
			Oimaginario = datos[n]*Math.sin(2*Math.PI*n*k/N);
			salida.Re[k] += Oreal;
			salida.Im[k] -= Oimaginario;
			salida.Re[N-k] += Oreal;
			salida.Im[N-k] -= Oimaginario;
		}
	}
	return salida;
}