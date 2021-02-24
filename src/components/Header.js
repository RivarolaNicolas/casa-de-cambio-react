import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

export default function Header(props) {
  const { date, setDate } = props;

  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    setTodayDate(new Date().toISOString().split('T')[0]);
  }, []);

  const onChangeHandler = (event) => {
    setDate(event.currentTarget.value);
    console.log(event.currentTarget.value);
    event.preventDefault();
  };

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item xs={12}>
        <h1>Casa de Cambio</h1>
      </Grid>
      <Grid item xs>
        <label htmlFor="date">Selecciona la fecha que te interesa: </label>
        <input
          id="date"
          type="date"
          defaultValue={date}
          max={todayDate}
          onChange={onChangeHandler}
        ></input>
      </Grid>
    </Grid>
  );
}
