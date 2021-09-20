import axios from "axios";


export const requestAPI = {

    createHW(check:boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: check})
    },

}