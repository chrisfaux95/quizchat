import axios from "axios";

export default {
    getQuiz: function (catNum, difficulty) {
        axios.get("https://opentdb.com/api_count.php?category=" + catNum).then(res => {
            let qAmt = 10;
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
                case 'all':
                default:
                    let qTot = res.category_question_count.total_question_count;
                    qAmt = qTot < 10 ? qTot : 10;
            }
            return axios.get(`https://opentdb.com/api.php?amount=${qAmt}&category=${catNum}&difficulty=${difficulty}`)
        })
    },
    
}