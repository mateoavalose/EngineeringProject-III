import React from 'react';

export const Schedule = () => {
    const hours = Array.from({ length: 14 }, (_, i) => i + 6);

  return (
    <div className="flex flex-col justify-center mb-12 w-[100vw]">
      <h2 className="w-[100%] text-2xl font-bold text-[#004E59]">Gestión de Usuarios</h2>
      <table className="table-auto border-collapse w-[95%]">
        <thead>
          <tr>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px]"></div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Lunes</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Martes</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Miércoles</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Jueves</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Viernes</div></th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="text-black text-right align-text-top">{hour}:00</td>
              <td className="bg-gray-200 border-4 border-[#004E59] min-w-[100px]"><div className="min-h-[50px] text-black"></div></td>
              <td className="bg-gray-200 border-4 border-[#004E59] min-w-[100px]"><div className="min-h-[50px] text-black"></div></td>
              <td className="bg-gray-200 border-4 border-[#004E59] min-w-[100px]"><div className="min-h-[50px] text-black"></div></td>
              <td className="bg-gray-200 border-4 border-[#004E59] min-w-[100px]"><div className="min-h-[50px] text-black"></div></td>
              <td className="bg-gray-200 border-4 border-[#004E59] min-w-[100px]"><div className="min-h-[50px] text-black"></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};