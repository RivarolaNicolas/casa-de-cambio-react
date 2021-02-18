import React, { useEffect, useState } from 'react';

export default function Api(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  const BASE_URL = 'https://api.exchangeratesapi.io';

  useEffect(() => {
    fetch(`${BASE_URL}/${props.date}?base=${props.baseCurrency}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setIsLoaded(true);
        setItems(jsonData);
      });
  }, [props.baseCurrency, props.date]);

  console.log(items);
  return <div></div>;
}
