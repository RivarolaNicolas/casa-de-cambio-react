import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';

export default function Api(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { currencies, setCurrencies, baseCurrency, setBaseCurrency, date, setDate } = props;

  const BASE_URL = 'https://api.exchangeratesapi.io';

  useEffect(() => {
    fetch(`${BASE_URL}/${date}?base=${baseCurrency}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCurrencies(jsonResponse.rates);
        setDate(jsonResponse.date);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  }, [baseCurrency, setCurrencies, setDate, date]);

  const onClickHandler = (event) => {
    setBaseCurrency(event.currentTarget.value);
    console.log(event.currentTarget.value);
    event.preventDefault();
  };

  return (
    <div>
      {isLoaded ? (
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <Grid item xs>
            {Object.entries(currencies)
              .sort()
              .map(([key, value]) => (
                <Button key={key} value={key} onClick={onClickHandler}>
                  {key}: {value}
                </Button>
              ))}
          </Grid>
        </Grid>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
