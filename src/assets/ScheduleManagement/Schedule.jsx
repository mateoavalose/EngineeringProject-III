import React from 'react';

export const Schedule = () => {
    const hours = Array.from({ length: 14 }, (_, i) => i + 6);

  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="text-center py-2 border-b border-gray-300">Lunes</th>
            <th className="text-center py-2 border-b border-gray-300">Martes</th>
            <th className="text-center py-2 border-b border-gray-300">Miércoles</th>
            <th className="text-center py-2 border-b border-gray-300">Jueves</th>
            <th className="text-center py-2 border-b border-gray-300">Viernes</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="text-center py-2 border-b border-gray-300">{hour}:00</td>
              <td className="text-center py-2 border-b border-gray-300"></td>
              <td className="text-center py-2 border-b border-gray-300">
                {hour === 12 ? (
                  <div className="flex justify-center items-center">
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      qasa8w2h1
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    {hour === 10 && (
                      <div className="flex justify-center items-center">
                        <span className="text-cyan-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm font-medium text-gray-900">
                          asd8b313
                        </span>
                      </div>
                    )}
                    {hour === 11 && (
                      <div className="flex justify-center items-center">
                        <span className="text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </td>
              <td className="text-center py-2 border-b border-gray-300"></td>
              <td className="text-center py-2 border-b border-gray-300"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};