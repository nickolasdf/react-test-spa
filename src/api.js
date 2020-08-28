import axios from 'axios';

const API = "https://randomuser.me/api";

const Users = {
    getUsers: params => axios.get(API, { params })
};

export default {
    Users
};
