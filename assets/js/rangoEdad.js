let edad= parseInt (prompt ("ingrese su edad"));

if (edad <= 12 && edad > 0) {
    console.log ("su rango de edad es niño")
}
else if (edad >= 13 && edad <= 19) {
    console.log ("su rango de edad es adolescente")
}
else if (edad >= 20 && edad <= 59) {
    console.log ("su rango de edad es adulto")
}
else if (edad >= 60 && edad <= 80){
    console.log ("su rango de edad es adulto mayor")
}