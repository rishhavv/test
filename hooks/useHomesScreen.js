import { useState, useEffect } from "react";
import fetchApi from "../api/FetchAPI";
import Axios from "axios";

export default ({ menu }) => {
  const [HomePosts, setHomePosts] = useState([]);
  const [errorMessage, setError] = useState("");
  const [HomeLoadingIndicator, setHomeLoadingIndicator] = useState(false);

  const HomePostsData = async () => {
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6ImRlbW9AZmFzdG9yLmFpIiwibW9iaWxlIjoiOTgxODk4OTQ1MCIsInJlc3RhdXJhbnRfaWQiOiIxIiwidXVpZCI6IjkyZGFkNTMwLWNkNjctMTFlNy04NTJiLThmZGQ0NDUyOWNjNyIsImxhc3RfcGFzc3dvcmRfdXBkYXRlIjoiMjAxOS0xMC0xMFQxMDozODoyNS4wMDBaIiwiaWF0IjoxNTk0NTMyNTU2LCJleHAiOjE1OTY5NTE3NTZ9.NAh8Fvu-RwGAqDtVR9i2mce0wQ0QN2VL7CKLAxlKLTs",
      },
    };

    try {
      const wapis = await Axios.get(
        `http://staging.fastor.in/v1/web/orders?pass=demopass&days=${menu}`,
        config
      );
      console.log(wapis.data);
      return setHomePosts(wapis.data.data), setHomeLoadingIndicator(false);
    } catch (err) {
      setError("L lag gye HomePosts");
      console.log("wapis");
    }
  };
  useEffect(() => {
    HomePostsData();
    console.log("called");
  }, []);

  return [HomePostsData, HomePosts, errorMessage, HomeLoadingIndicator];
};
