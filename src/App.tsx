import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";

const baseUrl = "https://api.factoryfour.com/API_NAME/health/status";
const services = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];
const urls = services.map((service) => baseUrl.replace("API_NAME", service));

function App() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const fetchData = useCallback(async () => {
    const temp: any = [];
    const errors: any = [];

    for (const url of urls) {
      try {
        const res = await axios
          .get(url)
          .then((response) => ({
            data: response.data,
            url: response.config.url,
          }));
        temp.push(res);
      } catch (error) {
        errors.push(error);
      }
    }
    setData(temp);
    setErrors(errors);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("data: ", data);
  console.log("errors: ", errors);
  console.log("loading: ", loading);

  return (
    <div>
      <Dashboard data={data} errors={errors} loading={loading} />
    </div>
  );
}

export default App;
