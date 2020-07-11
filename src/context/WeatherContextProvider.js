import React, { useReducer } from 'react';
import WeatherContext from './WeatherContext';
import WeatherReducer from './WeatherReducer';
import { GET_WEATHER, LOADING_WEATHER, ERROR, ALERT, REMOVE_ALERT } from '../actions';
import axios from 'axios';

const WeatherContextProvider = ( props ) => {

    const initialState = {
        isLoading: null,
        currentWeather: null,
        temperature: null,
        error: null,
        isAlertActive: false,
        alertMessage: '',
        removeAlert: false,
    };

    const [ state, dispatch ] = useReducer( WeatherReducer, initialState );

    // action dispatchers
    const onSubmit = async ( city, country ) => {
        if( city === '' && country === '' ) {
            console.log('Both are emtpy!');
            dispatch({ type: ALERT, payload: 'Please enter city and country!' });
            setTimeout(() => { dispatch({ type: REMOVE_ALERT }) }, 2000);
        } else if( city === '' ) {
            // console.log('City is empty!');
            dispatch({ type: ALERT, payload: 'Please enter a city!' });
            setTimeout(() => { dispatch({ type: REMOVE_ALERT }) }, 2000);
        } else if( country === '' ) {
            // console.log('Country is empty!');
            dispatch({ type: ALERT, payload: 'Please enter a country!' });
            setTimeout(() => { dispatch({ type: REMOVE_ALERT }) }, 2000);
        } else {
            try {
                dispatch({ type: LOADING_WEATHER });
                const weatherInfo = await axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=f8412a6c4b46a95a704d79d10f28f6ee&q=${ city },${ country }`);
                // console.log( weatherInfo.data.main.temp, weatherInfo.data.weather[0] );
                dispatch({ type: GET_WEATHER, payload: { temp: weatherInfo.data.main.temp, others: weatherInfo.data.weather[0] } });
                
            } catch( err ) {
                dispatch({ type: ERROR });
                console.log('Error occured!');
            }   
        }
          
    }

    return (
        <WeatherContext.Provider
            value={{ 
                isLoading: state.isLoading,
                currentWeather: state.currentWeather,
                temperature: state.temperature,
                error: state.error,
                isAlertActive: state.isAlertActive,
                alertMessage: state.alertMessage,
                onSubmit: onSubmit
            }}
        >
            { props.children }
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;


