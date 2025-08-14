// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Array para guardar amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();
  
  if (!nombre) {
    alert('¡Escribe un nombre!');
    return;
  }
  
  amigos.push(nombre);
  input.value = '';
  
  // Mostrar en la lista
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML += `<li>${nombre}</li>`;
}

// 3. Función para sortear
function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Necesitas mínimo 2 amigos');
    return;
  }
  
  // Copia del array para no repetir
  const copiaAmigos = [...amigos];
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  
  amigos.forEach(amigo => {
    // Filtra para no elegirse a sí mismo
    const opciones = copiaAmigos.filter(nombre => nombre !== amigo);
    if (opciones.length > 0) {
      const amigoSecreto = opciones[Math.floor(Math.random() * opciones.length)];
      resultado.innerHTML += `<li><strong>${amigo}</strong> le regala a <strong>${amigoSecreto}</strong></li>`;
      // Eliminar el elegido para no repetir
      copiaAmigos.splice(copiaAmigos.indexOf(amigoSecreto), 1);
    }
  });
  
  // Elegir al azar
 const ganador = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById('resultado').innerHTML = `
    <li>¡El amigo secreto es: <strong>${ganador}</strong>!</li>
  `;
}

// 4. Permitir usar la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') agregarAmigo();
});