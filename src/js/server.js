// // import axios from 'axios';
// // import axiosRetry from 'axios-retry';
// // var axiosRetry = require('axios-retry');
// // var React = require('axios-retry');
// // const rax = require('retry-axios');
// // const {axios} = require('axios');
let axiosRetry = require('axios-retry');
let axios = require('axios');

let instance = null;

class Server {

    constructor(){

        this.client = axios.create({ baseURL: 'http://jsonplaceholder.typicode.com/' });
        axiosRetry(this.client, { retries: 3 });

        if(instance){
            return instance;
        }
        else{
            instance = this;
            return instance;
        }

    }
  
    get(path,params){
        return this.client.get(path,{
            params : params
        }) 
        
    }


    post(path,data,params){
        return this.client.post(path,data,{
            params : params
        })
    }

    delete(path,id,params){
        return this.client.delete(path, { params: { 
            id: id
         } })
    }

  }

  let singletonAxiosInstance = new Server();

 module.exports = singletonAxiosInstance;
  
document.getElementById("div2").innerText = "server.js"