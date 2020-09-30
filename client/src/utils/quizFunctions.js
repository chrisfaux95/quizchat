import otdbAPI from './API/otdbAPI';

// EXPORTS LIST OF CATEGORIES FOR OTDB SORTED ALPHABETICALLY
export function getCategories() {
    const categories = [
        { name: "General Knowledge", value: 9 },
        { name: "Entertainment: Books", value: 10 },
        { name: "Entertainment: Film", value: 11 },
        { name: "Entertainment: Music", value: 12 },
        { name: "Entertainment: Musicals & Theatres", value: 13 },
        { name: "Entertainment: TV", value: 14 },
        { name: "Entertainment: Video Games", value: 15 },
        { name: "Entertainment: Board Games", value: 16 },
        { name: "Science & Nature", value: 17 },
        { name: "Science: Computers", value: 18 },
        { name: "Science: Mathematics", value: 19 },
        { name: "Mythology", value: 20 },
        { name: "Sports", value: 21 },
        { name: "Geography", value: 22 },
        { name: "History", value: 23 },
        { name: "Politics", value: 24 },
        { name: "Art", value: 25 },
        { name: "Celebrities", value: 26 },
        { name: "Animals", value: 27 },
        { name: "Vehicles", value: 28 },
        { name: "Entertainment: Comics", value: 29 },
        { name: "Science: Gadgets", value: 30 },
        { name: "Entertainment: Japanese Anime & Manga", value: 31 },
        { name: "Entertainment: Cartoons & Animation", value: 32 }
    ];

    categories.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    return categories;
}

export function getQuestions(req) {
        if (req.difficulty === 'any') {
            return otdbAPI.getQuizAny(req.difficulty);
        } else {
            return otdbAPI.getQuiz(req.category, req.difficulty);
        }
}

/* Function to shuffle the questions:
From: https://stackoverflow.com/a/12646864/13871979 */
/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

