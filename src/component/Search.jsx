import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterBar = ({ onRecherche, onTri }) => {
  const [isTriVisible, setIsTriVisible] = useState(false);
  const [termeRecherche, setTermeRecherche] = useState('');
  const [tri, setTri] = useState({
    option: '',
    direction: 'asc'
  });

  const toggleTriOptions = () => {
    setIsTriVisible(!isTriVisible);
  };

  const valeurRecherche = (e) => {
    const searchTerm = e.target.value;
    setTermeRecherche(searchTerm);
    onRecherche(searchTerm);
  };

  const ChangerOpt = (option) => {
    setTri((prevState) => ({
      ...prevState,
      option: option,
    }));
  };

  const appliquerTri = () => {
    onTri(tri);
	setIsTriVisible(false)
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
      <button className="btn btn-primary" onClick={toggleTriOptions}>
        Trier
      </button>
      {isTriVisible ? (
        <div className="tri">
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="triNom">
              Pet Name
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="triNom"
              onChange={() => ChangerOpt('petName')}
              checked={tri.option === 'petName'}
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
              onChange={() => ChangerOpt('ownerName')}
              checked={tri.option === 'ownerName'}
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
              onChange={() => ChangerOpt('aptDate')}
              checked={tri.option === 'aptDate'}
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="triAscendant"
              onChange={() => setTri((prevState) => ({ ...prevState, direction: 'asc' }))}
              checked={tri.direction === 'asc'}
              disabled={!tri.option}
            />
            <label className="form-check-label" htmlFor="triAscendant">
              Ascendant
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="triDescendant"
              onChange={() => setTri((prevState) => ({ ...prevState, direction: 'desc' }))}
              checked={tri.direction === 'desc'}
              disabled={!tri.option}
            />
            <label className="form-check-label" htmlFor="triDescendant">
              Descendant
            </label>
          </div>
          <button className="btn btn-primary" onClick={appliquerTri}>
            Trier
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FilterBar;
