/*
Creado por Brian García Aguilar
contacto: gaguilarb0@gmail.com 

Tab que muestra datos de sesión de usuario

*/

import { useEffect, useState } from "react";

export default function Sesion() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos(JSON.parse(localStorage.getItem("User")));
  }, []);

  return (
    <>
      <p> {`UUID: ${datos?.login?.uuid}`} </p>
      <p> {`Usuario: ${datos?.login?.username}`} </p>
      <p> {`Password: ${datos?.login?.password}`} </p>
    </>
  );
}
