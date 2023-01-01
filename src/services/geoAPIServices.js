import API from "../utils/Axios";
class GeoApiServices {
    async getCoordinates(location){
        console.log(process.env);
       return await API.get(`/api/v1/whether/requestRoute?q=${location}`);
    }
}
export default new GeoApiServices();