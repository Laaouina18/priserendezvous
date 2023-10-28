import React, { useState } from 'react';
import "../css/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterBar = ({ onSearch, onSort, trierPar, setTrierPar }) => {
    const [termeRecherche, setTermeRecherche] = useState('');

    const handleInputChange = (e) => {
        setTermeRecherche(e.target.value);
        onSearch(e.target.value);
    };

    const handleSelectChange = (e) => {
        setTrierPar(e.target.value);
        onSort(e.target.value);
    };

    return (
        <div className="d-flex ml-2">
            <input
                type="text"
                className="form-control mr-2"
                value={termeRecherche}
                onChange={handleInputChange}
                placeholder="Rechercher..."
            />
            <select
                className="btn "
                value={trierPar}
                onChange={handleSelectChange}
            >
                <option value="aptDate">Date</option>
            </select>
        </div>
    );
};

export default FilterBar;
