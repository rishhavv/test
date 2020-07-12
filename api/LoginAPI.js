import Axios from "axios";

export default Axios.create({
  baseURL: "staging.fastor.in/v1/web/auth/login",
});
