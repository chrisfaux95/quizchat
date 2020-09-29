import axios from "axios";

export default {
    getRandom: function () {
        return axios.get("/api/jeopardy/random");
    },
    getAll: function (req) {
        return axios.get("/api/jeopardy", req);
    },
    getById: function (id) {
        return axios.get("/api/jeopardy/byID/" + id);
    }
}