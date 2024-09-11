import React from 'react';

export const Schedule = () => {
    const hours = Array.from({ length: 14 }, (_, i) => i + 6);

  return (
    <div className="schedule">
      <table className="schedule-table">
        <thead>
          <tr>
            <th></th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td >{hour}</td>
              <td></td>
              <td></td>
              <td>
                
              </td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};