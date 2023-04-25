/*
Creado por Brian García Aguilar
contacto: gaguilarb0@gmail.com 

Layout de Tarjeta y Tab

*/

import { Container, Grid } from "semantic-ui-react";

import Tarjeta from "./layout/Tarjeta";
import Menu from "./layout/Tab/Tab";

export default function User() {
  return (
    <>
      <Container>
        <Grid divided columns="equal" style={{ paddingTop: 35 }}>
          <Grid.Column>
            <Tarjeta />
          </Grid.Column>
          <Grid.Column width={12}>
            <Menu />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}
