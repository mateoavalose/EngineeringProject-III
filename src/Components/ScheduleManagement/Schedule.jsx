import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Schedule = ({ onLogout }) => {
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
  const [confirmPopup, setConfirmPopup] = useState({ isOpen: false, rowIdx: null, colIdx: null, entry: null });
  const handleDeleteCell = (rowIdx, colIdx) => {
    const entry = schedule[rowIdx][colIdx]; // Get the entry for this cell
    setConfirmPopup({ isOpen: true, rowIdx, colIdx, entry });
  };
  const confirmDelete = () => {
    const { rowIdx, colIdx } = confirmPopup;
    const newSchedule = [...schedule];
    newSchedule[rowIdx][colIdx] = null; // Clear the entry from the schedule
    setSchedule(newSchedule);
    setConfirmPopup({ isOpen: false, rowIdx: null, colIdx: null, entry: null });
  };
  
  const cancelDelete = () => {
    setConfirmPopup({ isOpen: false, rowIdx: null, colIdx: null, entry: null });
  };

  // Function to handle viewing information
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [viewedEntry, setViewedEntry] = useState(null);

  const handleViewInfo = (rowIdx, colIdx) => {
    console.log("Schedule:", schedule);
    console.log("Row Index:", rowIdx, "Column Index:", colIdx);
    
    const entry = schedule[rowIdx]?.[colIdx];
    if (entry) {
      setViewedEntry(entry);
      setIsInfoPopupOpen(true);
    } else {
      console.error("No entry found for this cell.");
    }
  };

  // Add a function to close the info popup
  const handleCloseInfoPopup = () => {
    setIsInfoPopupOpen(false);
    setViewedEntry(null); // Reset the viewed entry
  };
  

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  return (
    <div className="loggedIn bg-white flex flex-col justify-center mb-12 w-[100vw] min-h-screen top-0">
      <h2 className="text-3xl font-bold text-[#004E59] bg-[#03B4CE] py-4 mb-6 text-center min-h-[100px] align-text-bottom">Gestión de Usuarios</h2>
      <table className="table-auto border-collapse w-[95%] min-h-[80vh]">
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
                            onClick={() => handleViewInfo(rowIdx, colIdx)}>i</button>
                          {/* Delete button */}
                          <button className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                            onClick={() => handleDeleteCell(rowIdx, colIdx)}>x</button>
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
          <div className="bg-white p-8 rounded-lg shadow-lg relative min-w-[35vw] min-h-[60vh]">
            <button onClick={handleClosePopup} className="absolute top-0 right-0 py-2 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all">X</button>
            <h2 className="text-xl font-bold text-[#004E59] bg-[#03B4CE] py-4 mb-4 text-center">Adicionar una Reserva</h2>
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
                  className="w-full p-2 bg-gray-200 rounded text-black min-h-[15vh]"
                />
              </div>
              <button type="submit" className="w-fit mx-auto py-2 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all">Añadir</button>
            </form>
          </div>
        </div>
      )}

      {/* Information Popup */}
      {isInfoPopupOpen && viewedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button onClick={handleCloseInfoPopup} className="absolute top-0 right-0 m-2 text-red-500">X</button>
            <h2 className="text-xl font-bold mb-4">Información de la Reserva</h2>
            <div className="mb-4 text-black">
              <strong>Nombre:</strong> {viewedEntry.name}
            </div>
            <div className="mb-4 text-black">
              <strong>Correo Institucional:</strong> {viewedEntry.email}
            </div>
            <div className="mb-4 text-black">
              <strong>Comentarios:</strong> {viewedEntry.comments}
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Popup */}
      {confirmPopup.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-[#004E59] text-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">¿Está seguro de que quiere eliminar la reserva de <i>{confirmPopup.entry?.name}</i>?</h2>
            <div className="flex justify-between">
              <button className="px-4 py-2 rounded" onClick={confirmDelete}>Aceptar</button>
              <button className="px-4 py-2 rounded" onClick={cancelDelete}>Rechazar</button>
            </div>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-end bottom-1 right-1 space-x-2 pr-[5%]">
        <Link to="/history">
          <button className="py-2 px-4 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all w-fit m-3.5 jus">Historial</button>
        </Link>
        <button className="py-2 px-4 bg-[#004E59] text-[#03B4CE] rounded-md hover:bg-[#03B4CE] hover:text-[#004E59] transition-all w-fit m-3.5" 
          onClick={onLogout}>Logout</button>
      </div>
      
    </div>
  );
};
