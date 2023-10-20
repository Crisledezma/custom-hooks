import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const apiKey = "1Dq4NdHCKZZoDXn7KzEv8w==nyEpJQ8QTMSHce5N";

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url, { headers: { "X-Api-Key": apiKey } });
    const data = await resp.json();
    console.log(data);

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state,
  };
};
