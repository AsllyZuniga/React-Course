//Funciones en JS
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar('Ash'));

const getUser = () => ({
  uid: "ABC123",
  username: "Usuario1",
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
  uid: "DEF456",
  username: "Usuario2",
});

const usuarioActivo = getUsuarioActivo("Aslly");
console.log(usuarioActivo);
