import axios from "axios";
const BASEURL_count = "https://opentdb.com/api_count.php?"
const BASEURL_qs = "https://opentdb.com/api.php?";


export default {
    getQuiz: function (catNum, difficulty) {
        let qURL = `${BASEURL_count}category=${catNum}`
        // console.log(qURL)
        return axios.get(qURL).then(res => {
            var qAmt = 0;
            let qTot
            console.log(res);
            switch (difficulty) {
                case 'easy':
                    qTot = res.data.category_question_count.easy_question_count;
                    qAmt = qTot < 10 ? qTot : 10;
                    break;
                case 'medium':
                    qTot = res.data.category_question_count.medium_question_count;
                    qAmt = qTot < 10 ? qTot : 10;
                    break;
                case 'hard':
                    qTot = res.data.category_question_count.hard_question_count;
                    qAmt = qTot < 10 ? qTot : 10;
                    break;
                case 'any':
                default:
                    qTot = res.data.category_question_count.total_question_count;
                    qAmt = qTot < 10 ? qTot : 10;
            }
            let qURL = `${BASEURL_qs}amount=${qAmt}`;
            qURL += `&category=${catNum}`;
            console.log(qURL)
            return axios.get(qURL);
        })
    },
    getQuizAny: function (difficulty) {
        let qAmt = 10;
        let qURL = `${BASEURL_qs}amount=${qAmt}`;
        if (difficulty != 'any') qURL += `&difficulty=${difficulty}`;
        console.log(qURL);
        return axios.get(qURL);
    },
    getQuizAsync: async function (catNum, diff) {
        try {
            let qAmtRes = await axios.get(BASEURL_count + 'amount=' + catNum)
            let qAmt
            let result = await axios.get
        } catch (err) {
            console.log(err)
        }
    }

}