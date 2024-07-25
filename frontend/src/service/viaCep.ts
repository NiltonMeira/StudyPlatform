import axios from "axios"

export const viaCepApi = axios.create({
    baseURL: "http://viacep.com.br/",
    timeout: 8000
})