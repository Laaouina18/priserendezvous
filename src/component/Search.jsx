import React, { useState } from 'react';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterBar = ({ onSearch, onSort, trierPar, setTrierPar }) => {
  const [termeRecherche, setTermeRecherche] = useState('');

  const valeurRecherche = (e) => {
    const searchTerm = e.target.value;
    setTermeRecherche(searchTerm);
    onSearch(searchTerm); // Appel de la fonction de recherche parente avec le terme de recherche en temps réel
  };

  const  valeurTri= (e) => {
    setTrierPar(e.target.value);
    onSort(e.target.value); // Appel de la fonction de tri parente avec le critère de tri sélectionné
  };

  return (
    <div className="d-flex ml-2">
      <input
        type="text"
        className="form-control mr-2"
        value={termeRecherche}
        onChange={valeurRecherche}
        placeholder="Rechercher..."
      />
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
          Trier
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="#" onClick={() => valeurTri('date')}>
              Date
            </a>
          </li>
          <li>
            <a href="#" onClick={() => valeurTri('desc')}>
              Desc
            </a>
          </li>
          <li>
            <a href="#" onClick={() => valeurTri('asc')}>
              ASC
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
