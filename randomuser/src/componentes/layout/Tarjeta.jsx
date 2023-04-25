/*
Creado por Brian García Aguilar
contacto: gaguilarb0@gmail.com 

Tarjeta de datos principales de usuario

*/

import { Card, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import moment from "moment";

export default function Tarjeta() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos(JSON.parse(localStorage.getItem("User")));
  }, []);

  return (
    <>
      <Card>
        <Image src={datos?.picture?.large} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{`${datos?.name?.title} ${datos?.name?.first} ${datos?.name?.last}`}</Card.Header>
          <Card.Meta>{datos?.gender}</Card.Meta>
          <Card.Description>
            <p>B-Day: {moment(datos?.dob?.date).format("DD/MM/YY")}</p>
            <p>Edad: {datos?.dob?.age}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Nacionalidad: {datos?.nat}</p>
          <p>
            {datos?.id?.name}: {datos?.id?.value}
          </p>
        </Card.Content>
      </Card>
    </>
  );
}
