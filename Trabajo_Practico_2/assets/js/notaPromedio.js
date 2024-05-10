let nota= parseInt(prompt ("ingrese la nota del estudiante del primer trimestre"));
let nota2= parseInt(prompt ("ingrese la nota del estudiante del segundo trimestre"));
let nota3= parseInt(prompt ("ingrese la nota del estudiante del tercer trimestre"));
let promedio= (nota + nota2 + nota3)/3;

if (promedio >= 1 && promedio <=3){
alert("Nota Insuficiente")

}else if (promedio >= 4 && promedio <= 5) {
    alert("nota regular")

} else if  (promedio >= 6 && promedio <= 7){
    alert("nota buena")

} else if (promedio >= 8 && promedio <= 9){
    alert("nota muy buena")

}else if (promedio = 10) {
    alert ("nota sobresaliente")
} else {
    alert ("numero no valido")
}