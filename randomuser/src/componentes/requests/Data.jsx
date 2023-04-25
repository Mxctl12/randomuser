/*
Creado por Brian García Aguilar
contacto: gaguilarb0@gmail.com 

Realiza petición de datos a la api y los guarda en 
localstorage para distribución en appweb

*/

import axios from "axios";

async function Peticion() {
  try {
    const response = await axios.get("https://randomuser.me/api/");

    const datosUsuario = response.data.results[0];
    localStorage.setItem("User", JSON.stringify(datosUsuario));
  } catch (error) {
    console.error(error);
  }
}

export default function Data() {
  Peticion();
}
