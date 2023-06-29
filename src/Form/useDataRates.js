import { useEffect, useState } from "react";

const useDataRates = () => {
  const [rates, setRates] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.exchangerate.host/latest?base=PLN`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setRates({
          rates: data.rates,
          date: data.date
        });
      } catch {
        setRates({
          status: "error",
        })
      }
    };

    setTimeout(fetchData, 1500);
  }, []);

  return rates;
}

export default useDataRates;