import Axios from "axios";

export default Axios.create({
  baseURL: "http://staging.fastor.in/v1/web/orders?pass=demopass&days=1",
});
