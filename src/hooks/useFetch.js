import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsPending(true);
        let res = await fetch(url);
        let data = await res.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (err) {
        setData(null);
        setError(err.message);
        setIsPending(false);
      }
    };

    sendRequest();
  }, []);

  return { data, isPending, error };
}

export default useFetch;
