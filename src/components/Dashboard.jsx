import { useState } from 'react';

import { Icon } from '@iconify/react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen flex justify-center items-center p-4`}>
      <div className="w-full max-w-md border p-4 rounded-lg space-y-6 shadow-md bg-white dark:bg-gray-800 dark:text-white">
        
        {/* Header */}
        <h1 className="text-2xl font-bold text-center">Weather Dashboard</h1>

        {/* Search Bar */}
        <div className="flex items-center border rounded-md overflow-hidden px-2">
          <input
            type="text"
            placeholder="Search city"
            className="flex-grow p-2 outline-none bg-transparent"
          />
    <Icon icon="material-symbols:search-rounded"  className='text-2xl'/>
        </div>

        {/* Current Weather */}
        <div className="border rounded-md p-4 space-y-2">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-xl font-semibold ">New York, US</h2>
              <p className="text-4xl font-bold -ml-14 ">68°F</p>
              <p className='-ml-17 -mb-10' >Cloudy</p>
            </div>
            <div className="text-6xl ">☁️</div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-4 py-1 rounded-md mt-2 ml-70"
          >
            Light/Dark
          </button>
        </div>

        {/* 5-Day Forecast */}
        <div>
          <h3 className="font-semibold mb-2 mr-70">5-Day Forecast</h3>
          <div className="grid grid-cols-5 gap-2 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
              <div key={day} className="border rounded-md p-2 space-y-1">
                <div className="text-2xl">☁️</div>
                <p className="text-sm">{day}</p>
                <p className="text-sm">70°F</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Searches */}
        <div>
          <h3 className="font-semibold mb-2 mr-70">Recent Searches</h3>
          <div className="flex gap-2">
            {['New York', 'Los Angeles', 'Chicago','America'].map((city) => (
              <button
                key={city}
                className="border px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
