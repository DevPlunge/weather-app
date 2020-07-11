import { GET_WEATHER, LOADING_WEATHER, ERROR, ALERT, REMOVE_ALERT } from '../actions';

const WeatherReducer = ( state, action ) => {
    switch( action.type ) {
        case GET_WEATHER:
            return {
                ...state,
                isLoading: false,
                currentWeather: action.payload.others,
                temperature: action.payload.temp - 273,
                error: false,
            }
        case LOADING_WEATHER:
            return {
                ...state,
                isLoading: true,
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        case ALERT:
            return {
                ...state,
                isLoading: false,
                isAlertActive: true,
                alertMessage: action.payload,
                removeAlert: false,
                currentWeather: null,
            }
        case REMOVE_ALERT:
            return {
                ...state,
                removeAlert: true,
                alertMessage: '',
                isAlertActive: false,
            }
        default:
            return state;
    }
}

export default WeatherReducer;