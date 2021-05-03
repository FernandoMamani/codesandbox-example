import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};
console.log(mascota);
console.log(mascota.edad);
console.log(mascota.razas);
const { edad } = mascota;
console.log(edad);
const web = {
  nombre: "bluuweb",
  links: {
    enlace: "www.bluuweb.cl"
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/bluuweb",
      nombre: "bluuweb yt"
    },
    facebook: {
      enlace: "facebook.com/bluuweb",
      nombre: "bluuweb fb"
    }
  }
};
const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace, nombre);

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.results);
    let arrayNombres = [];
    data.results.forEach((element) => {
      console.log(element.name);
      arrayNombres.push(element.name);
    });
    console.log(arrayNombres);
  })
  .catch((error) => console.log(error));

// assync await

const obtenerPokemon = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    const arrayNombres = data.results.map((poke) => poke.name);
    console.log(arrayNombres);
    const filterPoke = data.results.filter((poke) => poke.name !== "bulbasaur");
    console.log(filterPoke);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemon();
