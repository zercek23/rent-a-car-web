import axios from 'axios';

class Service {
    constructor() {
        this.baseUrl = "https://localhost:44393/api";
    }

    getData(path) {
        let url = `${this.baseUrl}${path}`;
        return axios.get(`${url}`);
      }
    
      putData(path, data) {
        let url = `${this.baseUrl}${path}`;
        return axios.put(`${url}`, data);
      }
    
      postData(path, data) {
        let url = `${this.baseUrl}${path}`;
        return axios.post(`${url}`, data);
      }
    
      deleteData(path) {
        let url = `${this.baseUrl}${path}`;
        return axios.delete(`${url}`);
      }
}

export default (new Service());