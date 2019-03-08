// require('./server.js')
// // import singletonAxiosInstance from './Server';
let singletonAxiosInstance = require('./server.js')


class Api {

    constructor() {
        this.server = singletonAxiosInstance;
    }

    getUsers(params, s = success, e = error){
        this.server.get('/users/', params)
            .then(
                data => {
                    s(data.data);
                }
            )
            .catch(err => {
                console.log("err");
                e(err)
            })
    }

    getUser(id, params, s = success, e = error){
        this.server.get(`/users/${id}`, params)
            .then(data => s(data.data))
            .catch(err => e(err))
    }

    postUser(data, params, s = success, e = error){
        this.server.post(`/users/`, data, params)
            .then(data => s(data.data))
            .catch(err => e(err))
    }

    deleteUser(id, params, s = success, e = error){
        this.server.delete(`/users/${id}`,id, params)
            .then(data => s(data.data))
            .catch(err => e(err))
    }


}

const success = (data) => {
    console.log("Data : ", data);
}

const error = (err) => {
    console.log("Error : ", err);
}


const api = new Api();

api.getUsers();

module.exports = api;
window.api = api;

