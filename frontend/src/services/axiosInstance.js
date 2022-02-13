import axios from "axios";
import PersistToken from "./PersistToken";

/* Como no puedo acceder a las variables de entorno desde el frontend, 
asigno el valor de esta variable desde webpack al momento de buildear la app. */
const URL = process.env.URL || 'http://localhost:5501/'
/* Creo una unica instancia de axios para usar en todos los servicios. */
const axiosInstance = axios.create({
  baseURL: `${URL}api`,
});

/* Agrego el token de usuario como header de todas las request salientes. */
axiosInstance.interceptors.request.use((config) => {
  const token = PersistToken.getPersistedToken(); 
  if (token) {
    config.headers["token"] = token;
  }
  
  return config;
});

/* Axios por defecto reemplaza los mensajes de error que envio desde el server, con este middleware evito eso */
axiosInstance.interceptors.response.use((response) => response, (error) => {
  const { err: msg } = error.response.data;
  throw new Error(msg);
});

export default axiosInstance;