// useFetch custom hook
import { useEffect, useState, useCallback } from "react";
import axios, { AxiosError } from "axios";

type UseFetchResult = [any[], any[]];

const useFetch = (endpoints: string[]): UseFetchResult => {
  const [data, setData] = useState<any[]>([]);
  const [errors, setErrors] = useState<any[]>([]);

  const fetchData = useCallback(async (endpoints: string[]): Promise<any> => {
    const temp: any = [];
    const errors: any = [];

    for (const url of endpoints) {
      try {
        const res = await axios.get(url).then((response) => ({
          data: response.data,
          url: response.config.url?.replace("https://api.factoryfour.com", ""),
        }));
        temp.push(res);
      } catch (error: any) {
        const err = error as AxiosError;
        errors.push({
          status: err.response?.status,
          url: err.config.url?.replace("https://api.factoryfour.com", ""),
          data: err.response?.data,
        });
      }
    }
    // Update data per 15 seconds
    setTimeout(() => fetchData(endpoints), 15000);

    setData(temp);
    setErrors(errors);
  }, []);

  useEffect(() => {
    fetchData(endpoints);
  }, [fetchData, endpoints]);

  return [data, errors];
};

export default useFetch;
