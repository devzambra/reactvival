const HIGH_SCORE = 'high_score';

export const setHighScore = (score) => {
    const prev = getHighScore();

    if (score > prev) {
        localStorage.setItem(HIGH_SCORE, score);
    }
};

export const getHighScore = () => {
    return localStorage.getItem(HIGH_SCORE) || 0;
};