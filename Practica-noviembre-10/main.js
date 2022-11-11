let opcion = prompt("Digite porfavor cual ejercicio quiere ejecutar 1 - 2 - 3 - 4");
switch (opcion){

    case "1":
        var Palabra = prompt("Digite una palabra")
        function invertir(let){
            if(let === ''){
                return '';
            } else {
                return invertir(let.substr(1)) + let.charAt(0);
            }
        }
    
        console.log(invertir(Palabra))
        break

    case"2":
    function contar() {
        const texto = document.getElementById('texto').
        value.trim().toLowerCase().split('');
        const repeticiones = {};
        texto.forEach( ( letra ) => {
          repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
        });
        for( let letra in repeticiones ) {
          const text = `${ letra } = ${ repeticiones[ letra ] }`;
         console.log(text)
        }      
      }
      break

    case"3":
    var vocales = prompt("Digite una palabra")
    function eliminarVocales(str) {
        let resultado = str.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, 'i')
        return resultado
    }
      const a = eliminarVocales(vocales);
      console.log(a);

      break

    case"4":
    var palabra = prompt("Digite una palabra")
    const cadenaConLetrasOrdenadas = cadena => {
        const cadenaComoArreglo = cadena.split("");
        cadenaComoArreglo.sort();
        const cadenaOrdenada = cadenaComoArreglo.join("");
        return cadenaOrdenada;
    };
    const conLetrasOrdenadas = cadenaConLetrasOrdenadas(palabra);
    console.log("Palabra original: '%s'. Palabra con letras ordenadas de forma alfabetica: '%s'", palabra, conLetrasOrdenadas);
    break

}
