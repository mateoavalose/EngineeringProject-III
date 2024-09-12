import React from 'react';
import { Link } from 'react-router-dom';

export const History = ({ onLogout }) => {
    return (
        <div className="loggedIn bg-white flex flex-col justify-center mb-12 w-[100vw] min-h-screen top-0 text-black">
          <h2 className="text-3xl font-bold text-[#004E59] bg-[#03B4CE] py-4 mb-6 text-center min-h-[100px] align-text-bottom">Historial de Reservas</h2>
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center w-[70%] border-r border-black p-4 min-h-[80vh]">
                
            </div>
            <div className="flex flex-col items-center w-[30%]">
                
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
