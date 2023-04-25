/*
Creado por Brian García Aguilar
contacto: gaguilarb0@gmail.com 

Tab que muestra datos de contacto de usuario

*/

import { useEffect, useState } from "react";

export default function Contacto() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos(JSON.parse(localStorage.getItem("User")));
  }, []);

  return (
    <>
      <p>{`Dirección: ${datos?.location?.street?.name} No. ${datos?.location?.street?.number}`}</p>
      <p>{`Ciudad: ${datos?.location?.city}`}</p>
      <p>{`Estado: ${datos?.location?.state}`}</p>
      <p>{`País: ${datos?.location?.country}`}</p>
      <p>{`CP: ${datos?.location?.postcode}`}</p>
      <p>{`Email: ${datos?.email}`}</p>
      <p>{`Teléfono: ${datos?.phone}   Cel: ${datos?.cell} `}</p>
      <p>{`Zona horaria: ${datos?.location?.timezone.offset}`}</p>
    </>
  );
}
