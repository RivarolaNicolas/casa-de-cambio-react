import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../MainApp.css';

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
  }, [baseCurrency, setCurrencies, setDate, date, error]);

  const onClickHandler = (event) => {
    setBaseCurrency(event.currentTarget.value);
    console.log(event.currentTarget.value);
    event.preventDefault();
  };

  return (
    <div>
      {isLoaded ? (
        <TableContainer className="container-table" component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Moneda base</TableCell>
              <TableCell align="right">Moneda</TableCell>
              <TableCell align="right">Valor respecto a moneda base</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(currencies)
              .sort()
              .map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {baseCurrency}
                  </TableCell>
                  <TableCell align="right">
                    <Button key={key} value={key} variant="outlined" onClick={onClickHandler}>
                      {key}
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1" key={key} value={key}>
                      {value}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TableContainer>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
