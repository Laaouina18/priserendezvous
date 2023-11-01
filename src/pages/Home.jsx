import React, { useEffect, useState } from 'react';
import FetchData from '../api/fetchApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import AddAppointment from '../component/AddAppointment';
import AppointmentList from '../component/AppointmentInfo';
import FilterBar from '../component/Search';
import "../css/home.css"
function Home() {
	const [Data, setData] = useState([]);
	const [rechercheTerm, setRechercheTerm] = useState('');
	const [apiData, setApiData] = useState([]);
	const [afficherData, setAfficherData] = useState([]);
	const [ResRecherche, setReRecherche] = useState([]);
	const [triPar, setTriPar] = useState('aptDate');
	const filtrerData = (term) => {
		setRechercheTerm(term);
	};
	useEffect(() => {
		setAfficherData(rechercheTerm ? ResRecherche : mergedData);
		console.log(afficherData)
	}, [Data, rechercheTerm, apiData]);


	const trierData = (critere) => {
		setTriPar(critere);
		console.log(critere)
	};

	const ajouter = (rendezvous) => {
		setData([...Data, rendezvous]);
	};


	const handleDataFetched = (data) => {
		// console.log(data);
		setApiData(data);
	};
	const mergedData = [...Data, ...apiData];

	const rechercherDansMergedData = (term) => {
		if (term.trim() === '') {
			//   console.log('Aucun', mergedData);
		} else {
			const resultatsRecherche = mergedData.filter(({ petName, ownerName }) => {
				return (
					petName.toLowerCase().includes(term.toLowerCase()) ||
					ownerName.toLowerCase().includes(term.toLowerCase())
				);
			});
			// console.log(resultatsRecherche);
			setReRecherche(resultatsRecherche)
		}
	};
	useEffect(() => {
		rechercherDansMergedData(rechercheTerm);
	}, [rechercheTerm]);
	const supprimer = (aptName) => {
		const modifier = afficherData.filter((rendezvous) => rendezvous.petName !== aptName);
		setAfficherData(modifier);
	  };
	  useEffect(() => {
		const triData = [...afficherData].sort((a, b) => {
			const option = triPar.option;
			const direction = triPar.direction === 'asc' ? 1 : -1;
	
			if (option === 'aptDate') {
				const dateA = new Date(a[option]);
				const dateB = new Date(b[option]);
	
				if (dateA < dateB) {
					return -1 * direction;
				}
				if (dateA > dateB) {
					return 1 * direction;
				}
				return 0;
			} else {
				if (a[option] < b[option]) {
					return -1 * direction;
				}
				if (a[option] > b[option]) {
					return 1 * direction;
				}
				return 0;
			}
		});
	
		const filteredData = triPar ? triData : mergedData;
		setAfficherData(filteredData);
		// console.log(afficherData)
	}, [triPar]);
	
	
	

	return (
		<div className="container mt-5">
			<div className="d-flex"><svg  className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
				<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
			</svg>
				<h1>Your Appointment</h1></div>
			<AddAppointment onSave={ajouter} />
			<FilterBar onRecherche={filtrerData} onTri={trierData} />
			<FetchData onDataFetched={handleDataFetched} />
			<AppointmentList appointments={afficherData} />
		</div>
	);
}

export default Home;
