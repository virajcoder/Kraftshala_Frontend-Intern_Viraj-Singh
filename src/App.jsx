import  { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Search from './components/Search';

const API_KEY = 'bed43062226c16a6df0e7ea41a16a388';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWeatherDataForCurrentLocation();
    // Check for dark mode preference on initial load
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const fetchWeatherDataForCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          )
            .then(response => {
              if (!response.ok) {
                throw new Error('Location not found');
              }
              return response.json();
            })
            .then(data => {
              setLocations([data.name]);
            })
            .catch(error => {
              console.error('Error fetching current location weather:', error);
              setError(error.message);
              setIsLoading(false);
            });
        },
        error => {
          console.error('Error getting current location:', error);
          setError(error.message);
          setIsLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setError('Geolocation is not supported by this browser.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (locations.length > 0) {
      fetchWeatherData();
    }
  }, [locations]);

  const fetchWeatherData = async () => {
    setIsLoading(true);
    const updatedWeatherData = [];
    for (const location of locations) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Location not found');
        }

        const data = await response.json();
        updatedWeatherData.push(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error.message);
        setWeatherData([]);
        setIsLoading(false);
        return;
      }
    }
    setWeatherData(updatedWeatherData);
    setError(null);
    setIsLoading(false);
  };

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const addLocation = location => {
    setLocations(prevLocations => [...prevLocations, location]);
  };

  const removeLocation = index => {
    setLocations(prevLocations =>
      prevLocations.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="min-h-screen bg-yellow-600 dark:bg-gray-900 transition-colors duration-300">
      <Header toggleDarkMode={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <div className="container mx-auto p-4">
        
        <Search onSearch={addLocation} />
        {error ? (
          <p className="text-red-500 text-center mt-4">{error}</p>
        ) : null}
        {isLoading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {weatherData.map((data, index) => (
              <WeatherCard
                key={index}
                weatherData={data}
                onRemove={() => removeLocation(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
