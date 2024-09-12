import React from 'react';

export const ReservationCard = ({ name, email, comments, classRoom, reservationDate }) => {
    return (
        <div className="reservation-card bg-[#03b3ce81] p-4 rounded-lg shadow-lg w-[80%] m-4">
            <div className="flex flex-row justify-between">
                <p className="font-bold text-2xl">{name}</p>
                <p className="font-bold">{classRoom}</p>
                <p className="font-bold">{reservationDate}</p>
            </div>
            <p className="text-lg">{email}</p>
            <p className="text-lg w-[80%] bg-gray-400">{comments}</p>
        </div>
    );
}