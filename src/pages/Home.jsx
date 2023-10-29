import React, { useEffect, useState } from 'react';
import FetchData from '../api/fetchApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import AddAppointment from '../component/AddAppointment';
import FilterBar from '../component/Search';
import "../css/home.css"
function Home() {
	const [Data, setData] = useState([]);
	const [rechercheTerm, setRechercheTerm] = useState('');
	const [apiData, setApiData] = useState([]);
	const [datare, setDatare] = useState([]);
	const [afficherData, setAfficherData] = useState([]);
	const [ResRecherche, setReRecherche] = useState([]);
	const filtrerData = (term) => {
		setRechercheTerm(term);

	};
	const [triPar, setTriPar] = useState('aptDate');


	useEffect(() => {
		// Filtrer les données en fonction du terme de recherche
		const dataFiltree = Data.filter((item) => {
			const searchTerm = rechercheTerm ? rechercheTerm.toLowerCase() : '';
			const petName = item.petName ? item.petName.toLowerCase() : '';
			const ownerName = item.ownerName ? item.ownerName.toLowerCase() : '';
			return petName.includes(searchTerm) || ownerName.includes(searchTerm);
		});
		const Resultat = ResRecherche;
		setAfficherData(rechercheTerm ? Resultat : mergedData);
		console.log(afficherData)
	}, [Data, rechercheTerm, apiData]);


	const trierData = (critere) => {
		setTriPar(critere);
	};

	const ajouter = (rendezvous) => {
		setData([...Data, rendezvous]);
	};
	const [fetchedData, setFetchedData] = useState([]);

	const handleDataFetched = (data) => {
		// console.log(data);
		setApiData(data);
	};
	const dataFiltree = Data.filter((item) => {

		const searchTerm = rechercheTerm ? rechercheTerm.toLowerCase() : '';
		const petName = item.petName ? item.petName.toLowerCase() : '';
		const ownerName = item.ownerName ? item.ownerName.toLowerCase() : '';
		return petName.includes(searchTerm) || ownerName.includes(searchTerm);
	});


	const mergedData = [...dataFiltree, ...apiData];

	const rechercherDansMergedData = (term) => {
		if (term.trim() === '') {
			//   console.log('Aucun terme de recherche. Affichage de toutes les données :', mergedData);
		} else {
			const resultatsRecherche = mergedData.filter(({ petName, ownerName }) => {
				return (
					petName.toLowerCase().includes(term.toLowerCase()) ||
					ownerName.toLowerCase().includes(term.toLowerCase())
				);
			});

			const elements = document.querySelectorAll('.data-row');
			elements.forEach((element) => {
				const id = element.getAttribute('id');
				if (!resultatsRecherche.some(({ id }) => id === id)) {
					element.classList.add('hidden');
				} else {
					element.classList.remove('hidden');
				}
			});


			console.log(resultatsRecherche);
			setReRecherche(resultatsRecherche)
		}
	};
	useEffect(() => {
		rechercherDansMergedData(rechercheTerm);
	}, [rechercheTerm, triPar]);
	const supprimer = (aptName) => {
		const modifier = afficherData.filter((rendezvous) => rendezvous.petName !== aptName);
		setAfficherData(modifier);
	  };

	return (
		<div className="container mt-5">
			<div className="d-flex"><svg  className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
				<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
			</svg>
				<h1>Your Appointment</h1></div>
			<AddAppointment onSave={ajouter} />
			<FilterBar onSearch={filtrerData} onSort={trierData} />
			<FetchData onDataFetched={handleDataFetched} />
			{afficherData.map(({ id, petName, ownerName, aptNotes, aptDate }) => (
				<div className="data-row" key={id}>
					<div className="left">
						<button className="supprimer" onClick={() => supprimer(petName )}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="delete-icon">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
							</svg>
						</button>

						<div className="info">
							<span className="pet-name">{petName}</span>
							<div>Owner: {ownerName}</div>
							<div>Apt Notes: {aptNotes}</div>
						</div>
					</div>
					<div className="right">
						<div>Date: {aptDate}</div>
					</div>
				</div>
			))}

		</div>
	);
}

export default Home;
