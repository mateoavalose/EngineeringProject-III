import React from 'react';
import { Link } from 'react-router-dom';
import { ReservationCard } from './ReservationCard';

export const History = ({ onLogout }) => {
    const reservations = [
        {
            name: 'John Doe',
            email: 'john@doe.com',
            comments: 'Need to use the computer',
            classRoom: '3.2B',
            reservationDate: '2022-12-12',
        },
        {
            name: 'Sara Smith',
            email: 'sara@smith.com',
            comments: 'Need to use the projector',
            classRoom: 'Piso 0',
            reservationDate: '2022-12-13',
        },
        {
            name: 'Jane Doe',
            email: 'jane@doe.com',
            comments: 'Need to use the whiteboard',
            classRoom: '3.2B',
            reservationDate: '2022-12-14',
        },
    ];

    return (
        <div className="loggedIn bg-white flex flex-col justify-center mb-12 w-[100vw] min-h-screen top-0 text-black">
          <h2 className="text-3xl font-bold text-[#004E59] bg-[#03B4CE] py-4 mb-6 text-center min-h-[100px] align-text-bottom">Reportes de Uso</h2>
          <div className="flex flex-row items-center">
            {/* History */}
            <div className="flex flex-col items-center w-[70%] border-r border-black p-4 min-h-[80vh]">
                {
                    reservations.map((reservation, index) => {
                        return (
                        <ReservationCard key={index} {...reservation} />
                        )
                    })
                }
            </div>
            {/* Filters */}
            <div className="flex flex-col items-center w-[30%]">
                <h3 className="text-xl font-bold text-[#004E59] bg-[#03B4CE] py-4 mb-20 text-center w-[80%]">
                    Filtros</h3>
                <div className="flex flex-col items-center w-[80%] bg-[#03b3ce81] mb-16">
                    <label htmlFor="email" className="text-[#004E59] font-bold">Correo</label>
                    <input type="text" id="email" className="w-[80%] p-2 mb-4 border border-black rounded-md bg-gray-400" />
                </div>
                <div className="flex flex-col items-center w-[80%] bg-[#03b3ce81] mb-16">
                    <label htmlFor="date" className="text-[#004E59] font-bold">Fecha</label>
                    <input type="date" id="date" className="w-[80%] p-2 mb-4 border border-black rounded-md bg-gray-400" />
                </div>
                <div className="flex flex-col items-center w-[80%] bg-[#03b3ce81] mb-16">
                    <label htmlFor="time" className="text-[#004E59] font-bold">Hora</label>
                    <input type="time" id="time" className="w-[80%] p-2 mb-4 border border-black rounded-md bg-gray-400" />
                </div>
                <div className="flex flex-col items-center w-[80%] bg-[#03b3ce81] mb-16">
                    <label htmlFor="court" className="text-[#004E59] font-bold">Laboratorio</label>
                    <select id="court" className="w-[80%] p-2 mb-4 border border-black rounded-md bg-gray-400">
                        <option value="1">3.2B</option>
                        <option value="2">Piso 0</option>
                    </select>
                </div>
                <button className="py-2 px-4 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all w-fit m-3.5">
                    Filtrar</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end bottom-1 right-1 space-x-2 pr-[5%]">
            <Link to="/schedule">
              <button className="py-2 px-4 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all w-fit m-3.5 jus">Reservar</button>
            </Link>
            <button className="py-2 px-4 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all w-fit m-3.5" 
              onClick={onLogout}>Logout</button>
          </div>
          
        </div>
      );
};
