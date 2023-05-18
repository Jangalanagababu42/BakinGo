import React, { useEffect, useState } from "react";

export default function Home() {
  const [apiData, setData] = useState();
  const getApiData = async () => {
    try {
      const response = await fetch("/api/products");
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(apiData, "apidata");

  useEffect(() => {
    getApiData();
  }, []);
  return <div>Home page</div>;
}
