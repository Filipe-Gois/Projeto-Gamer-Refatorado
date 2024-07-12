import axios, { AxiosInstance } from "axios";

const apiPort: string = `:7168`;
const urlApi: string = `https://localhost${apiPort}/`;

//Rotas
const usuarioResource: string = `/Usuario`;
const loginResource: string = `/Login`;

const Api: AxiosInstance = axios.create({ baseURL: urlApi });

export default Api;
export { usuarioResource, loginResource };
