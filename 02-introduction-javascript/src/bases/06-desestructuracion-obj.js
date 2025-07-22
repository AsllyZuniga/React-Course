// Desestructuración
const persona = {
  nombre: "Tony",
  edad: 40,
  clave: "Ironman",
};

const useContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.2545,
      lng: -12.5897,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
