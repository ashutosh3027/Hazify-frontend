import API from "../utils/Axios";
class GeoApiServices {
    async getCoordinates(location, limit=10, page){
        console.log(location, limit, page);
       return await API.get(`/api/v1/whether/requestRoute?q=${location}&limit=${limit}&page=${page}`);
    }
}
export default new GeoApiServices();