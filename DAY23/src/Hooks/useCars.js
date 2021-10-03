import { useState, useEffect } from "react";

export const useCars = (initial) => {
  const [car, setCar] = useState(initial);
  const [index, setIndex] = useState(0);
  useEffect(async () => {
    try {
      const res = await fetch(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
      );
      const data = await res.json();
      console.log(data);
      setCar(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return {
    car,
    setCars: async (path) => {
      const res = await fetch(`${path}`);
      const data = await res.json();
      console.log(data);
      setCar(data);
    },
    display: () => {
      return car !== undefined ? car[index].nome : "Nothing";
    },
    next: () => {
      if (index < car.length) setIndex(index + 1);
    },
    prev: () => {
      if (index > 0) setIndex(index - 1);
    },
  };
};
