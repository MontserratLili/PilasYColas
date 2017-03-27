//Ejercicio 1.
//**Crear un arreglo vacío de 5 elementos llamado nombres.

//**crear dos arreglos que se comporten como pilas, uno llamado nombre y otro apellido.
//**Recorrer por medio del principio LIFO las pilas para llenar el arreglo nombres con los datos concatenados.
var nombres = [];

function Stack() {

  var nombre = [];
  this.push = function(element){
  nombre.push(element);
  };
  this.pop = function(){
    return nombre.pop();
  };
  this.peek = function(){
    return nombre[nombre.length-1];
  };
  this.isEmpty = function(){
    return nombre.length > 0;
  };

  this. size = function(){
    return nombre.length;
  };

  this.clear = function(){
    nombre = [];
  };

  this.print = function(){
    console.log(nombre.toString());
  };

}


var nombre1 = new Stack();
if (!nombre1.isEmpty()) {
  nombre1.push("Laura");
  nombre1.push("Montserrat");
  nombre1.push("Lili");
  nombre1.push("Emmanuel");
  nombre1.push("Rigo");
  console.log(nombre1.size());
}

var apellido = new Stack();
if (!apellido.isEmpty()) {
  apellido.push("González");
  apellido.push("Maldonado");
  apellido.push("Ortiz");
  apellido.push("Lopez");
  apellido.push("Perez");
  console.log(apellido.size());
}

for(var i = 0; i<5; i++){
  nombres.push(nombre1.pop() + " " + apellido.pop());

}
console.log(nombres);
