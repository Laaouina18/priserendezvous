import React from "react";

const AppointmentInfo = ({ Appointment, onDelete }) => {
  return (
    <div>
      <h2>{Appointment.petName}</h2>
      <h2>{Appointment.aptDate}</h2>
      <p>{Appointment.aptNotes}</p>
      <button onClick={() => onDelete(Appointment.id)}>Supprimer</button>
    </div>
  );
};

export default AppointmentInfo;
