import React, { useState } from 'react';

const AddAppointment = ({ onSave }) => {
    const [formData, setFormData] = useState({
        OwnerName: '',
        petName: '',
        aptDate: '',
        aptTime: '',
        aptNotes: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Appeler la fonction onSave pour passer les données au composant Home
        onSave(formData);

        // Réinitialisation du formulaire
        setFormData({
            OwnerName: '',
            petName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: '',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
        <label>Pet Name</label>
        <input type="text" value={formData.petName} onChange={(e) => setFormData({ ...formData, petName: e.target.value })} />
        <label>Owner Name</label>
        <input type="text" value={formData.OwnerName} onChange={(e) => setFormData({ ...formData, OwnerName: e.target.value })} />
        <label>Appointment Date</label>
        <input type="date" value={formData.aptDate} onChange={(e) => setFormData({ ...formData, aptDate: e.target.value })} />
        <label>Appointment Time</label>
        <input type="time" value={formData.aptTime} onChange={(e) => setFormData({ ...formData, aptTime: e.target.value })} />
        <label>Appointment Notes</label>
        <textarea value={formData.aptNotes} onChange={(e) => setFormData({ ...formData, aptNotes: e.target.value })}></textarea>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default AddAppointment;
