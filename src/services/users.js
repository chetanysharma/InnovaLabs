import axios from 'axios';
import BASE_URL from '../config/config'

const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (err) {
        console.log('error', err);
    }

};

const createUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, data, {
            // headers: {
            //     'Content-Type': 'application/json;charset=UTF-8',
            //     'Authorization': 'Basic ' + btoa(authToken || localStorage.getItem('authToken') + ':')
            // }
        });
        return response.data;
    } catch (err) {
        console.log('error', err);
    }
};

export default {
    getUsers,
    createUser,
}