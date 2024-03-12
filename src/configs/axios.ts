import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://auth-qa.qencode.com',
})

export default instanse;