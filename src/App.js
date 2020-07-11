import React from 'react';
import './App.css';
import WeatherContextProvider from './context/WeatherContextProvider';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <h1>Know the Weather</h1>
        <WeatherForm />
        <Weather />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
