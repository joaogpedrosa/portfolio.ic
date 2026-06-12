const texto = "Nice to meet you, I'm João Gustavo";
const elemento = document.getElementById('titulo-digitado');
let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.textContent += texto[i];
    i++;
    setTimeout(digitar, 80); // 
  }
}

digitar();


const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      
        if (entrada.isIntersecting) {
            
            entrada.target.classList.add('mostrar');
        }
    });
});


const elementosEscondidos = document.querySelectorAll('.escondido');


elementosEscondidos.forEach((elemento) => {
    observador.observe(elemento);
});
