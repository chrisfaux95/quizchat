import axios from 'axios';

export default {
    getScores: function() {
        return axios.get("/api/scores/", req);
    },
    getHighScores: function(req) {
        return axios.get("/api/scores/high_scores", req)
    },
    postScores: function(req) {
        return axios.post("/api/scores/", req)
    },

}