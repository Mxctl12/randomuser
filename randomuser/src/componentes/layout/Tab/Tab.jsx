/*
Creado por Brian García Aguilar
contacto: gaguilarb0@gmail.com 

Componente de tab, con cada uno de los elementos a mostrar

*/

import { Tab } from "semantic-ui-react";
import Contacto from "./Contacto";
import Registro from "./Registro";
import Sesion from "./Sesion";

export default function Menu() {
  const panes = [
    {
      menuItem: "Contacto",
      render: () => (
        <Tab.Pane attached={false}>
          <Contacto />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Registro",
      render: () => (
        <Tab.Pane attached={false}>
          <Registro />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Sesión",
      render: () => (
        <Tab.Pane attached={false}>
          <Sesion />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <>
      <Tab menu={{ colors: "grey", tabular: false }} panes={panes} />
    </>
  );
}
