import React, { useState } from "react";

const Recherche = ({ onRecherche, onTrier }) => {
  const [termeRecherche, setTermeRecherche] = useState('');
  const [trierPar, setTriePar] = useState('');

  const EffectuerRecherche = () => {
    onRecherche(termeRecherche);
  };

  const EffectuerTri = () => {
    onTrier(trierPar);
  };

  return (
    <div>
      <input type="text" value={termeRecherche} onChange={(e) => setTermeRecherche(e.target.value)} />
      <button onClick={EffectuerRecherche}>Rechercher</button>

      <select value={trierPar} onChange={(e) => setTriePar(e.target.value)}>
        <option value="aptDate">Date</option>
      </select>
      <button onClick={EffectuerTri}>Trier</button>
    </div>
  );
};

export default Recherche;
