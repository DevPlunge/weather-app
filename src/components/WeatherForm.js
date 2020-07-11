import React, { useState, useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import Alert from './Alert';

const WeatherForm = () => {

    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');

    const { onSubmit, isAlertActive, alertMessage } = useContext( WeatherContext );


    // handlers
    const onChangeHandler = ( e ) => {
        const targetValue = e.target.value;
        const targetName = e.target.name; 
        switch( targetName ) {
            case 'city':
                setCity(targetValue);
                break;
            case 'country':
                setCountry(targetValue);
                break;
            default:
                setCity('');
                setCountry('');
        }
    }

    const onSubmitHandler = ( e ) => {
        e.preventDefault();
        // validate inputs
        
        onSubmit( city, country );
    }

    return (
        <div className="weather-form">
            { isAlertActive && <Alert message={ alertMessage } /> }
            <form onSubmit = { onSubmitHandler }>
                <input 
                    type="text" 
                    name="city" 
                    placeholder="City" 
                    value={ city }
                    onChange={ onChangeHandler }
                />
                <input 
                    type="text" 
                    name="country" 
                    placeholder="Country" 
                    value={ country }
                    onChange={ onChangeHandler }
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default WeatherForm;
