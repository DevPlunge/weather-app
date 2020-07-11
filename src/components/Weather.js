import React, { useContext } from 'react';
import Loading from './Loading';
import Error from './Error';
import WeatherContext from '../context/WeatherContext';

const Weather = () => {

    const { currentWeather, temperature, isLoading, error } = useContext( WeatherContext );

    if( isLoading ) {
      return <Loading />;
    }

    if( error ) {
      return <Error />;
    }

    return (
        <div>
          {currentWeather &&
            <div className="weather">
                <p><strong>Temperature: { temperature } <sup>o</sup>C</strong></p>
                <p>Type: { currentWeather.description }</p>
                <p>Description: { currentWeather.description }</p>
            </div>
          }
        </div>
      );
    
}

export default Weather;
