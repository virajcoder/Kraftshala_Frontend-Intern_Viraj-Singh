import  { useState } from 'react';

const Search = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      onSearch(location);
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-2/3"
        placeholder="Enter city name or zip code"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md">Search</button>
    </form>
  );
};

export default Search;
