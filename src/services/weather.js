import {API} from './api'

export const getWeather = (url) => {
    return API.get(url)
}