import { useState, useEffect } from 'react';

function FetchApi({ apiUrl }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addData = async (newData) => {
    try {
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      fetchData(); // Refresh data after adding a new item
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      fetchData(); // Refresh data after deleting an item
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [apiUrl]);

  return { data, addData, deleteData };
}

export default FetchApi;
