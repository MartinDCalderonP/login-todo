import { useState, useEffect } from "react";

export default function useFetch<T>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<T>();

  const fetchData = async (url: string, options?: RequestInit) => {
    if (!url) return;

    setLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const optionsWithSignal: RequestInit = {
      ...options,
      signal,
    };

    fetchData(url, optionsWithSignal);

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return { data, loading, error, fetchData };
}
