import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const FilterBar = ({ onRecherche, onTri, onTriDirection, triAscendant }) => {
  const [termeRecherche, setTermeRecherche] = useState('');
  const [triOption, setTriOption] = useState(null);
  const [triDirection, setTriDirection] = useState('asc');
  const [isTriVisible, setIsTriVisible] = useState(false);
  const toggleTriOptions = () => {
    setIsTriVisible(!isTriVisible); 
  };
  const valeurRecherche = (e) => {
    const searchTerm = e.target.value;
    setTermeRecherche(searchTerm);
    onRecherche(searchTerm);
  };

  const changerTri = (option) => {
    let direction = 'asc';
    if (triOption === option) {
      // Si l'utilisateur clique sur l'option déjà sélectionnée, changer la direction du tri
      direction = triDirection === 'asc' ? 'desc' : 'asc';
    }
    setTriDirection(direction);
    setTriOption(option);
    onTri(option, direction);
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
	  <button className="btn btn-primary" onClick={toggleTriOptions}>Trier</button>
	  {isTriVisible ?(
	  <div className="tri">
	  <div className="form-check form-check-inline">
      
        <label className="form-check-label" htmlFor="triNom">
          pet Name
        </label>
		<input
          className="form-check-input"
          type="checkbox"
          id="triNom"
          onChange={() => changerTri('petName')}
          checked={triOption === 'petName'}
        />
      </div>
      <div className="form-check form-check-inline">
        
        <label className="form-check-label" htmlFor="triOwner">
          Owner Name
        </label>
		<input
          className="form-check-input"
          type="checkbox"
          id="triOwner"
          onChange={() => changerTri('ownerName')}
          checked={triOption === 'ownerName'}
        />
      </div>
      <div className="form-check form-check-inline">
     
        <label className="form-check-label" htmlFor="triDate">
          Date
        </label>
		<input
          className="form-check-input"
          type="checkbox"
          id="triDate"
          onChange={() => changerTri('aptDate')}
          checked={triOption === 'aptDate'}
        />
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="triAscendant"
          onChange={() => setTriDirection('asc')}
          checked={triDirection === 'asc'}
          disabled={!triOption}
        />
        <label className="form-check-label" htmlFor="triAscendant">
          Asc
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="triDescendant"
          onChange={() => setTriDirection('desc')}
          checked={triDirection === 'desc'}
          disabled={!triOption}
        />
        <label className="form-check-label" htmlFor="triDescendant">
          Desc
        </label>
      </div>
	  </div>
	  ):null}
      
    </div>
  );
};

export default FilterBar;
