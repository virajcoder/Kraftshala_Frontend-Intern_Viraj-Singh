# React + Vite


Overview:

This Weather Application is a responsive web app that allows users to fetch and display current weather information for any valid location (city name or zip code). The app is built using HTML, Tailwind CSS, JavaScript, and React with Vite as the build tool. Weather data is fetched from the Open Weather API.

Features:-

Display current location, temperature, date, and time.
Input field for users to enter a location (city name or zip code).
Button to fetch and display weather information for the entered location.
Handle API responses and errors gracefully.
Responsive design ensuring compatibility with desktop, tablet, and mobile devices.
Installation:-

1)Install dependencies:

npm install

Start the development server:
npm run dev

Build the application for production:-
npm run build

Usage:-

Open the application in your browser (usually at http://localhost:3000 when running the development server).
View the current weather for your location displayed by default.
Enter a city name or zip code in the input field.
Click the search button to fetch and display the weather information for the entered location.
API Integration:-

The application uses the Open Weather API to fetch weather data. Added my API key to the application. Created a ".env" file in the root of your project and added :

WEATHER_API_KEY="[https://openweathermap.org/api](https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY})"
LOCATION_API_KEY="https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}"
API_KEY='bed43062226c16a6df0e7ea41a16a388'


Error Handling:-

If the user enters an invalid location or there is an issue with the API connection, an error message is displayed to inform the user. Feedback is provided to the user in case of invalid input or connection issues.

File Structure:-

WETHER-APP

node_modules public src .eslintrc.cjs .gitignore <> index.html {} package-lock.json {} package.json JS postcss.config.js README.md JS tailwind.config.js JS vite.config.js

Development Notes:-

HTML: Basic structure of the application.
Tailwind CSS: Used for styling the application.
JavaScript: For the application's logic.
React: Framework used to build the UI components.
Vite: Build tool for development and production builds.
