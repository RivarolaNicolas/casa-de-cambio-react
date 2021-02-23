import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';

export default function Header(props) {
  const { data } = props;

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item xs={12}>
        <h1>Casa de Cambio</h1>
      </Grid>
      <Grid item xs>
        <label htmlFor="date">Selecciona la fecha que te interesa: </label>
        <input id="date" type="date" defaultValue={data.date} max={data.date}></input>
      </Grid>
    </Grid>
  );
}
