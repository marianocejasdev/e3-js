const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Función para renderizar la pizza o el mensaje de error
function renderResult(pizza) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (pizza) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = pizza.imagen;
    img.alt = pizza.nombre;

    const name = document.createElement('h2');
    name.textContent = pizza.nombre;

    const price = document.createElement('p');
    price.textContent = `Precio: $${pizza.precio}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    resultDiv.appendChild(card);

    // Guardar en localStorage
    localStorage.setItem('lastPizza', JSON.stringify(pizza));
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    errorMessage.textContent = 'No se encontró una pizza con ese ID.';
    resultDiv.appendChild(errorMessage);
  }
}

// Función para manejar el formulario
function handleFormSubmit(event) {
  event.preventDefault();

  const pizzaId = parseInt(document.getElementById('pizza-id').value);

  if (isNaN(pizzaId)) {
    renderResult(null);
    return;
  }

  const pizza = pizzas.find(pizza => pizza.id === pizzaId);
  renderResult(pizza);
}

// Inicializar el formulario
const pizzaForm = document.getElementById('pizza-form');
pizzaForm.addEventListener('submit', handleFormSubmit);

// Cargar la última pizza buscada desde localStorage al iniciar
window.addEventListener('load', () => {
  const lastPizza = JSON.parse(localStorage.getItem('lastPizza'));
  if (lastPizza) {
    renderResult(lastPizza);
  }
});