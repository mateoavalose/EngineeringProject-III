import { useState, useEffect } from 'react';

export const Schedule = () => {
  const hours = Array.from({ length: 14 }, (_, i) => i + 6);

    // State to manage the content of each cell
    const [schedule, setSchedule] = useState(Array(14).fill(Array(5).fill(null)));
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeCell, setActiveCell] = useState({ rowIdx: null, colIdx: null });

  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const [currentDay, setCurrentDay] = useState(null);
  useEffect(() => {
    const today = new Date().getDay();
    // Adjust to match our table where Monday is the first day
    setCurrentDay(today === 0 ? 6 : today - 1); // Make Sunday 6 for consistency, as we're starting with Monday
  }, []);

  // Input values in the popup form
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    comments: ''
  });
  // Open the popup when the '+' button is clicked
  const handleOpenPopup = (rowIdx, colIdx) => {
    setActiveCell({ rowIdx, colIdx });
    setIsPopupOpen(true);
  };
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  // Save the form data when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, comments } = formValues;
    // Update the schedule array to store data
    const updatedSchedule = schedule.map((row, rowIdx) =>
      row.map((cell, colIdx) =>
        rowIdx === activeCell.rowIdx && colIdx === activeCell.colIdx
          ? { name, email, comments }
          : cell
      )
    );
    setSchedule(updatedSchedule);
    setIsPopupOpen(false);
    setFormValues({ name: '', email: '', comments: '' });
  };
  // Function to handle closing the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setFormValues({ name: '', email: '', comments: '' });
  };

  // Function to handle deleting text from a cell
  const handleDeleteText = (rowIdx, colIdx) => {
    const updatedSchedule = schedule.map((row, i) =>
      row.map((cell, j) => (i === rowIdx && j === colIdx ? '' : cell))
    );
    setSchedule(updatedSchedule);
  };

  // Function to handle viewing information (demo )
  const handleViewInfo = (text) => {
    alert(`Information: ${text}`);
  };

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  return (
    <div className="flex flex-col justify-center mb-12 w-[100vw]">
      <h2 className="w-[100%] text-2xl font-bold text-[#004E59]">Gestión de Usuarios</h2>
      <table className="table-auto border-collapse w-[95%]">
        <thead>
          <tr>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px]"></div></th>
            {daysOfWeek.map((day, idx) => (
              <th key={idx} className="p-2 max-w-[100px]">
                <div className={`min-h-[50px] text-black flex items-end justify-center ${ currentDay === idx ? 
                  'font-bold text-blue-500' : ''}`}>{day}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, rowIdx) => (
            <tr key={hour}>
              <td className="text-black text-right align-text-top">{hour}:00</td>
              {[...Array(5)].map((_, colIdx) => (
                <td key={colIdx} className="bg-gray-200 border-4 border-[#004E59] min-w-[100px] relative">
                  <div className="min-h-[50px] text-black relative flex flex-col justify-between">
                    <div>{schedule[rowIdx][colIdx]?.name || ''}</div>
                    <div className="flex absolute bottom-1 right-1 space-x-2">
                      {schedule[rowIdx][colIdx] ? (
                        <>
                          {/* Information button */}
                          <button className="bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                            onClick={() => handleViewInfo(schedule[rowIdx][colIdx])}>i</button>
                          {/* Delete button */}
                          <button className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                            onClick={() => handleDeleteText(rowIdx, colIdx)}>x</button>
                        </>
                      ) : (
                        /* Add text button */
                        <button className="bg-[#004E59] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                          onClick={() => handleOpenPopup(rowIdx, colIdx)}>+</button>
                      )}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button onClick={handleClosePopup} className="absolute top-0 right-0 m-2">X</button>
            <h2 className="text-xl font-bold mb-4">Adicionar una Reserva</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-200 rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Correo Institucional</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-200 rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Comentarios</label>
                <textarea
                  name="comments"
                  value={formValues.comments}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-200 rounded text-black"
                />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Añadir</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
