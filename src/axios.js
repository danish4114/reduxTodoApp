import axios from "axios";

export default function AxiosServer(method, data) {
  const baseURL = "http://localhost:3000/todo";
  if (method === "delete") {
    const URL = baseURL + "/" + data.id;
    return axios.delete(URL);
  } else if (method === "get") {
    return axios.get(baseURL);
  } else if (method === "put") {
    return axios.put(baseURL + "/" + data.i, {
      name: data.name,
      id: data.i,
      completed: data.completed
    });
  } else if (method === "postt") {
    return axios.post(baseURL, {
      name: data.name,
      completed: data.completed
    });
  }
}
