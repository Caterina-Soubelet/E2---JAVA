const pizzas = [
  {
    id: 1,
    nombre: "pizza de Pepperoni",
    precio: 2500,
    ingredientes: ["Muzzarella", "pepperoni", "Albahaca"],
  },

  {
    id: 2,
    nombre: "pizza de Hawaiana",
    precio: 1700,
    ingredientes: ["Muzzarella", "Ananá", "Jamón"],
  },

  {
    id: 3,
    nombre: "pizza Marinara",
    precio: 1720,
    ingredientes: ["Muzzarella", "Ajo", "Perejil", "Cebolla"],
  },

  {
    id: 4,
    nombre: "pizza Americana",
    precio: 1780,
    ingredientes: ["Muzzarella", "Huevo", "Aceituna","Parmesano"],
  },

  {
    id: 5,
    nombre: "pizza Romana",
    precio: 2220,
    ingredientes: ["Muzzarella", "Anchoas", "Alcaparras", "Aceite de Oliva", "Orégano"],
  },

  {
    id: 6,
    nombre: "pizza Diávola",
    precio: 2500,
    ingredientes: ["Muzzarella", "Tomate", "Chorizo" "Salamen"],
  },
];


// a)  Las pizzas que tengan un id impar.

const idImpar = pizzas.filter((pizzas) => {
    return pizzas.id % 2 !== 0;
  
  });

  idImpar.forEach((pizzas)) => {
  
  console.log(`La ${pizzas.nombre} tiene id impar`);
});

/* b) Responder: ¿Hay alguna pizza que valga menos de $600? */
console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?")

const menorA = (precio) => {
  return pizzas.some ((id) => {
    return id.precio < precio;

  })
  ? console.log(`Hay pizzas  que valen menos de $${precio}`)
  : console.log(`No hay pizzas  con valor menor a $${precio}`);
};
menorA(600);
console.log("--------------------------------------------------------");

/* 
c- El nombre de cada pizza con su respectivo precio.*/

console.log("c) El nombre de cada pizza con su respectivo precio.");
                        
for (let index = 0; index < 6; index++) {
    
    console.log("La  " + pizzas[index].nombre + " Cuesta  $ " + pizzas[index].precio);

}
console.log("--------------------------------------------------------");



/*d- Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes */

console.log("d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual)");

for (let index = 0; index < 6; index++) {
    console.log("__________________________________________")
    console.log("La " + pizzas[index].nombre + " tiene los siguientes ingredientes:");
    
for (let index1 = 0; index1 < 3; index1++) {

    console.log(pizzas[index].ingredientes[index1]);
    
}}
console.log("--------------------------------------------------------");
  