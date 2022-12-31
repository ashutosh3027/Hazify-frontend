import API from "../utils/Axios";
class GeoApiServices {
    async getCoordinates(location, limit){
        console.log(process.env);
       return await API.get(`direct?q=${location}&limit=${limit}&appid=${process.env.REACT_APP_APPID}`);
    }
}
export default new GeoApiServices();