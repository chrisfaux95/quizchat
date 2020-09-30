import axios from "axios";

export default {
    getQuiz: function (catNum, difficulty) {
        let qAmt = this.getQAmt(catNum, difficulty);
        let qURL = `https://opentdb.com/api.php?amount=${qAmt}`;
        qURL += `&category=${catNum}`;
        
        return axios.get(qURL);
    },
    getQuizAny: function (difficulty) {
        let qAmt = 10;
        let qURL = `https://opentdb.com/api.php?amount=${qAmt}`;
        if (difficulty != 'any') qURL += `&difficulty=${difficulty}`;

        return axios.get(qURL);
    },
    getQAmt: function (catNum, difficulty) {
        var qAmt;
        axios.get(`https://opentdb.com/api_count.php?category=${catNum}`).then(
            res => {
                switch (difficulty) {
                    case 'easy':
                        let qTot = res.category_question_count.easy_question_count
                        qAmt = qTot < 10 ? qTot : 10;
                        break;
                    case 'medium':
                        let qTot = res.category_question_count.medium_question_count
                        qAmt = qTot < 10 ? qTot : 10;
                        break;
                    case 'hard':
                        let qTot = res.category_question_count.hard_question_count;
                        qAmt = qTot < 10 ? qTot : 10;
                        break;
                    case 'any':
                    default:
                        let qTot = res.category_question_count.total_question_count;
                        qAmt = qTot < 10 ? qTot : 10;
                }
            }
        )
        return qAmt;
    }

}