/*
Creado por Brian García Aguilar
contacto: gaguilarb0@gmail.com 

Tab que muestra datos de registro de usuario

*/

import { useEffect, useState } from "react";
import moment from "moment";

export default function Registro() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos(JSON.parse(localStorage.getItem("User")));
  }, []);

  return ( 
  <>
    <p> {`Fecha de Registro: ${moment(datos?.registered?.date).format("DD/MM/YY")}`} </p> 
    <p>{`Tiempo desde el registro: ${datos?.registered?.age} años`}</p>
  </>
  );
}