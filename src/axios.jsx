import axios from "axios";

/*  const instance = axios.create({
  baseURL: "http://192.168.204.87:5000", 
});  */
 const instance = axios.create({
  baseURL: "https://deployment-1-pqjc.onrender.com", 
}); 

export default instance;

/* http://192.168.96.87:5000/table/Alumni_Info */