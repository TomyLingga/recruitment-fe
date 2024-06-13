import axios from "axios";

const baseURL = 'http://localhost:8000/api/';

class calonKaryawan {
    // Get Data
    static async getKontak(id, bearer) {
        try {
            const res = await axios.get(`${baseURL}kontak_pelamar/${id}`, bearer);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    // Post Data
    static async postkontak(data, bearer) {
        try {
            const res = await axios.post(`${baseURL}kontak_pelamar`, data, bearer);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }
}
export default calonKaryawan;