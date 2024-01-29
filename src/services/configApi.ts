import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.eazymock.net/mock/587f299e-099d-4878-b294-9913ff792f78/",
});

export default api;
