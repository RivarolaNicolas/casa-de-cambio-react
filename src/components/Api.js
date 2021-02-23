import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';

export default function Api(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { data, setData, baseCurrency, setBaseCurrency, date } = props;

  const BASE_URL = 'https://api.exchangeratesapi.io';

  useEffect(() => {
    fetch(`${BASE_URL}/${date}?base=${baseCurrency}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setIsLoaded(true);
      })
      .catch((err) => setError(err));
  }, [baseCurrency, date, setData]);

  const onChangeHandler = (event) => {
    setBaseCurrency(event.currentTarget.value);
    console.log(event.currentTarget.value);
    event.preventDefault();
  };

  return (
    <div>
      {isLoaded ? (
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <Grid item xs>
            {Object.entries(data.rates).map(([key, value]) => (
              <Button key={key} value={key} onClick={onChangeHandler}>
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

// {
//   isLoaded ? (
//     <Grid container direction="column" justify="space-evenly" alignItems="center">
//       {`${Object.keys(data.rates).map((key) => {
//         return (
//           <Grid xs={6} item>
//             <p>{key}</p>
//           </Grid>
//         );
//       })}: ${Object.values(data.rates).map((value) => {
//         return (
//           <Grid xs={6} item>
//             <p>{value}</p>
//           </Grid>
//         );
//       })}`}
//     </Grid>
//   ) : (
//     <p>Cargando...</p>
//   );
// }

// <Grid container direction="column" justify="flex-start" alignItems="flex-start">
//   {
//     <div>
//       <Grid item xs>
//         {Object.keys(data.rates).map((key) => (
//           <p onClick={onChangeHandler}>{key}: </p>
//         ))}
//       </Grid>
//       <Grid item xs>
//         {Object.values(data.rates).map((value) => (
//           <p>{value}</p>
//         ))}
//       </Grid>
//     </div>
//   }
// </Grid>;
