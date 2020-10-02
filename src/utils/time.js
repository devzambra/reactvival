export const parseTime = (time) => {
    const hours = ('0' + Math.floor(time / 3600)).slice(-2);
    const minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
    const seconds = ('0' + Math.floor((time % 3600) % 60)).slice(-2);

    return `${hours}:${minutes}:${seconds}`;
};