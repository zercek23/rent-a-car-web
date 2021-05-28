import axios from 'axios';

class Service {
    constructor() {
        this.baseUrl = "https://localhost:44393/api";
    }

      async getData(path) {
        let url = `${this.baseUrl}${path}`;
        return await axios.get(`${url}`);
      }
    
      async putData(path, data) {
        let url = `${this.baseUrl}${path}`;
        return await axios.put(`${url}`, data);
      }
    
      async postData(path, data) {
        let url = `${this.baseUrl}${path}`;
        return await axios.post(`${url}`, data);
      }
    
      async deleteData(path) {
        let url = `${this.baseUrl}${path}`;
        return await axios.delete(`${url}`);
      }
}

export default (new Service());