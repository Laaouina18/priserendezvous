import React, { useEffect, useState } from 'react';

const FetchData = ({ onDataFetched }) => {
  const [data, setData] = useState([]);
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    if (!hasFetchedData) {
      fetch("/data/data.json")
        .then((response) => response.json())
        .then((jsonData) => {
          setData(jsonData);
          onDataFetched(jsonData); 
          setHasFetchedData(true); 
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [onDataFetched, hasFetchedData]); 

  return (
    <div className="data-container">
      
    </div>
  );
};

export default FetchData;
