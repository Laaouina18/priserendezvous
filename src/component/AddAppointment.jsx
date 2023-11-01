import React, { useState } from 'react';
import "../css/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const AddAppointment = ({ onSave }) => {
    const validateForm = () => {
        let isValid = true;

        if (formData.petName.trim() === '') {
            isValid = false;
        }

        if (formData.ownerName.trim() === '') {
            isValid = false;
        }

        if (formData.aptDate === '') {
            isValid = false;
        }

        if (formData.aptTime === '') {
            isValid = false;
        }

        if (formData.aptNotes.trim() === '') {
            isValid = false;
        }
        return isValid;
    };
	const [formData, setFormData] = useState({
		ownerName: '',
		petName: '',
		aptDate: '',
		aptTime: '',
		aptNotes: '',
	});

	const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSave(formData);
            setFormData({
                ownerName: '',
                petName: '',
                aptDate: '',
                aptTime: '',
                aptNotes: '',
            });
         
        }else{
			alert("vailler remplir tout les champs");
		}
    };

	return (
		<div className="rendezvous">
		<div className="add">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-save">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
</svg>

		<h3>Add Appointment</h3>
		</div> 
	            <form className="form-horizontal" onSubmit={handleSubmit}>
			
                <div className="form-group row">
                    <label className="control-label col-sm-2" htmlFor="petName">Pet Name:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="petName"
                            placeholder="Enter pet name"
                            value={formData.petName}
                            onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                       required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-sm-2" htmlFor="ownerName">Owner Name:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="ownerName"
                            placeholder="Enter owner name"
                            value={formData.ownerName}
                            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
							required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-sm-2" htmlFor="aptDate">Appointment Date:</label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            id="aptDate"
                            value={formData.aptDate}
                            onChange={(e) => setFormData({ ...formData, aptDate: e.target.value })}
							required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-sm-2" htmlFor="aptTime">Appointment Time:</label>
                    <div className="col-sm-10">
                        <input
                            type="time"
                            className="form-control"
                            id="aptTime"
                            value={formData.aptTime}
                            onChange={(e) => setFormData({ ...formData, aptTime: e.target.value })}
							required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-sm-2" htmlFor="aptNotes">Notes:</label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="aptNotes"
                            placeholder="Enter notes"
                            value={formData.aptNotes}
                            onChange={(e) => setFormData({ ...formData, aptNotes: e.target.value })}
							required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className=" submit">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>
            </form>
		</div>
	);
};

export default AddAppointment;
