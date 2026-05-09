import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e86dc1f0534146ad986ea1cb96ddb3b5",
  },
});