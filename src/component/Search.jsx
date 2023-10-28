import React, { useState } from 'react';
import "../css/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const FilterBar = ({ onSearch, onSort, trierPar, setTrierPar }) => {
    const [termeRecherche, setTermeRecherche] = useState('');

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setTermeRecherche(searchTerm);
        onSearch(searchTerm);
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
          <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Trier
  <span className="caret"></span></button>
  <ul className="dropdown-menu">
    <li><a href="#">Date</a></li>
    <li><a href="#">Desc</a></li>
    <li><a href="#">ASC</a></li>
  </ul>
</div>
        </div>
    );
};

export default FilterBar;
