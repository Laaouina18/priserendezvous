import React, { useEffect, useState } from 'react';
import FetchApi from '../api/fetchApi';
import AddAppointment from '../component/AddAppointment';

function Home() {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await FetchApi({ urlApi: 'data/data.json' });
            setData(response);
			
       console.log('Réponse de l\'API :', response);

        };
        fetchData();
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('addedData')) || [];
        setNewData(storedData);
    }, []);

    const handleSave = (formData) => {
        const updatedData = [...newData, formData];
        setNewData(updatedData);
        localStorage.setItem('addedData', JSON.stringify(updatedData));
    };

    return (
        <div>
            <AddAppointment onSave={handleSave} />
            <div>
              
                {data &&
                    data.map((item, index) => (
                        <div key={index} className='border border-solid m-1 rounded-[5px]'>
                            <p>{item.petName}</p>
                            <p>{item.ownerName}</p>
                            <p>{item.aptNotes}</p>
                            <p>{item.aptDate.split(' ')[0]}</p> 
                        </div>
                    ))}

               
                {newData &&
                    newData.map((item, index) => (
                        <div key={index} className='border border-solid m-1 rounded-[5px]'>
                            <p>{item.petName}</p>
                            <p>{item.ownerName}</p>
                            <p>{item.aptNotes}</p>
                            <p>{item.aptDate}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Home;
