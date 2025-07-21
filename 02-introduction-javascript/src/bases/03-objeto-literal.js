const persona = {
  nombre: "Byron",
  apellido: "Rosero",
  edad: 30,
  direccion: {
    ciudad: "Pasto",
    zip: 52145,
    lat: 45852,
    lng: 5558888,
  },
};

console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona2);
